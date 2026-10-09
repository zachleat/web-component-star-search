// Records each entry’s minified + gzipped JS (bundled with dependencies) and separately shipped CSS as `jsSize`/`cssSize`.
// For library components, modules shared by (nearly) every component in the library are measured once into _data/librarySizes.json and excluded from `jsSize`.
// Usage: node scripts/measure-sizes.js [--force]
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import { execFileSync } from "node:child_process";
import * as esbuild from "esbuild";

const force = process.argv.includes("--force");
const librarySizesFile = "_data/librarySizes.json";
const files = fs.readdirSync("components", { recursive: true }).filter(f => f.endsWith(".md")).map(f => path.join("components", f));
const all = files
	.map(file => ({ file, source: fs.readFileSync(file, "utf8") }))
	.map(e => ({
		...e,
		tagName: e.source.match(/^tagName: (.*)$/m)[1],
		pkg: e.source.match(/^package: "?([^"\n]+)"?$/m)?.[1],
		library: e.source.match(/^library:\n {2}name: (.*)$/m)?.[1],
	}))
	// `noSize: true` marks packages a bundler can’t measure, like runtime-lazy-loaded Stencil builds.
	.filter(e => e.pkg && !/^noSize: true$/m.test(e.source));

const needsMeasuring = (e) => force || !/^jsSize:/m.test(e.source);
// A library’s shared base depends on all of its components, so measure every component of a library with any stale entry.
const staleLibraries = new Set(all.filter(e => e.library && needsMeasuring(e)).map(e => e.library));
const entries = all.filter(e => needsMeasuring(e) || staleLibraries.has(e.library));

if (!entries.length) {
	console.log("Nothing to measure");
	process.exit();
}

// Real path so metafile inputs match esbuild’s resolved paths (macOS temp folders are symlinked).
const dir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "wc-sizes-")));
fs.writeFileSync(path.join(dir, "package.json"), "{}");
// Explicit @latest: otherwise npm may pick an older release whose `engines` field matches the local Node version.
execFileSync("npm", ["install", "--ignore-scripts", "--no-audit", "--no-fund", ...new Set(entries.map(e => `${e.pkg}@latest`))], { cwd: dir, stdio: "inherit" });

const gzip = (contents) => zlib.gzipSync(contents, { level: 9 }).length;
const exists = (pkg, file) => fs.existsSync(path.join(dir, "node_modules", pkg, file));
const fileLists = new Map();
const listFiles = (pkg) => {
	if (!fileLists.has(pkg)) {
		fileLists.set(pkg, fs.readdirSync(path.join(dir, "node_modules", pkg), { recursive: true }).filter(f => !f.startsWith("node_modules")));
	}
	return fileLists.get(pkg);
};

// Library components get their own module when the package ships one per tag; otherwise measure the package entry.
function resolve({ pkg, tagName, library }) {
	let name = tagName.replace(/^[a-z0-9]+-/, "");
	let js = library && [`dist/components/${name}/${name}.js`, `dist/${tagName}.js`, `dist/menu/${tagName}.js`, `dist/${name}.js`, `src/js/components/${name}.js`].find(f => exists(pkg, f));
	let css = library
		? [`dist/${name}.css`, `src/css/components/${name}-wc.css`].filter(f => exists(pkg, f))
		: fs.readdirSync(path.join(dir, "node_modules", pkg), { recursive: true }).filter(f => f.endsWith(".css") && !/node_modules|demo|test|example|docs/.test(f));
	css = css.map(f => path.join(dir, "node_modules", pkg, f));
	// Otherwise find the tag’s module anywhere in the package, e.g. button/filled-button.js for md-filled-button.
	if (library && !js) {
		let candidates = listFiles(pkg).filter(f => [`${tagName}.js`, `${name}.js`, `${name.replaceAll("-", "_")}.js`].includes(path.basename(f)) && !/(^|\/)(test|tests|internal|stories|react|cjs|ssr)\//.test(f));
		let rank = (f) => [f.includes("labs/") ? 1 : 0, path.basename(f) === `${tagName}.js` ? 0 : 1, f.length];
		js = candidates.sort((a, b) => rank(a).join().localeCompare(rank(b).join(), undefined, { numeric: true }))[0];
		// Some libraries register each element from a sibling define module.
		let define = js && path.join(path.dirname(js), "define.js");
		if (define && exists(pkg, define)) {
			js = define;
		}
	}
	// Some packages only register the element from a separate define module.
	js ||= ["define.js", "dist/define.js"].find(f => exists(pkg, f));
	// Import files by path so a package’s `exports` map can’t block deep imports.
	return { js: js ? path.join(dir, "node_modules", pkg, js) : pkg, css };
}

// Bundles the given import specifiers, optionally leaving `external` files out; returns gzipped sizes and the bundled input files.
async function bundle(specifiers, external = new Set(), { treeShaking = true, keepExports = false } = {}) {
	let result = await esbuild.build({
		stdin: { contents: specifiers.map(s => `${keepExports ? "export * from" : "import"} ${JSON.stringify(s)};`).join("\n"), resolveDir: dir },
		absWorkingDir: dir,
		bundle: true,
		minify: true,
		format: "esm",
		platform: "browser",
		write: false,
		outdir: "out",
		metafile: true,
		logLevel: "silent",
		// Measure what a side-effect import pulls in, even when a package claims to have no side effects.
		ignoreAnnotations: true,
		treeShaking,
		loader: { ".woff": "empty", ".woff2": "empty", ".ttf": "empty", ".png": "empty", ".jpg": "empty", ".gif": "empty", ".svg": "text" },
		plugins: [{
			name: "external-shared",
			setup(build) {
				build.onResolve({ filter: /.*/ }, async (args) => {
					if (!external.size || args.pluginData?.resolving) {
						return;
					}
					let resolved = await build.resolve(args.path, { kind: args.kind, importer: args.importer, resolveDir: args.resolveDir, pluginData: { resolving: true } });
					if (external.has(resolved.path)) {
						return { path: args.path, external: true };
					}
				});
			},
		}],
	});
	let size = { js: 0, css: 0 };
	for (let output of result.outputFiles) {
		size[output.path.endsWith(".css") ? "css" : "js"] += gzip(output.contents);
	}
	let inputs = new Set(Object.keys(result.metafile.inputs).filter(f => f !== "<stdin>").map(f => path.resolve(dir, f)));
	// Modules that only export a class (you register it yourself) tree-shake to nothing on a plain import.
	if (size.js < 100 && !keepExports && specifiers.length === 1) {
		return bundle(specifiers, external, { treeShaking, keepExports: true });
	}
	return { size, inputs };
}

async function cssFilesSize(files) {
	let size = 0;
	for (let file of files) {
		let { code } = await esbuild.transform(fs.readFileSync(file, "utf8"), { loader: "css", minify: true });
		size += gzip(code);
	}
	return size;
}

const resolved = new Map(entries.map(e => [e, resolve(e)]));

// Shared base per library: files bundled by every one of its components.
const shared = new Map();
const librarySizes = fs.existsSync(librarySizesFile) ? JSON.parse(fs.readFileSync(librarySizesFile, "utf8")) : {};
for (let library of staleLibraries) {
	let members = entries.filter(e => e.library === library);
	let specifiers = [...new Set(members.map(e => resolved.get(e).js))];
	// Files used by at least 80% of a library’s components (one outlier shouldn’t empty the shared base).
	let counts = new Map();
	let bundled = 0;
	for (let specifier of specifiers) {
		try {
			let { inputs } = await bundle([specifier]);
			bundled++;
			for (let file of inputs) {
				counts.set(file, (counts.get(file) || 0) + 1);
			}
		} catch (error) {
			console.warn(`${library}: could not bundle ${specifier} for the shared base`);
		}
	}
	let common = new Set([...counts].filter(([, count]) => count >= bundled * 0.8).map(([file]) => file));
	if (specifiers.length < 2 || !common?.size) {
		delete librarySizes[library];
		continue;
	}
	// Nothing imports the shared modules’ exports here, so keep them whole instead of tree-shaking them away.
	let { size } = await bundle([...common], new Set(), { treeShaking: false });
	// Ignore trivial overlaps like a shared helper function.
	if (size.js < 250) {
		delete librarySizes[library];
		continue;
	}
	shared.set(library, common);
	librarySizes[library] = { jsSize: size.js, ...(size.css ? { cssSize: size.css } : {}) };
	console.log(`${library} (shared): ${size.js}${size.css ? ` + ${size.css} css` : ""}`);
}
fs.writeFileSync(librarySizesFile, JSON.stringify(librarySizes, null, "\t") + "\n");

const cache = new Map();
for (let entry of entries) {
	let { js, css } = resolved.get(entry);
	let external = shared.get(entry.library) || new Set();
	try {
		let key = `${entry.library}:${js}`;
		if (!cache.has(key)) {
			cache.set(key, bundle([js], external));
		}
		let { size } = await cache.get(key);
		let cssSize = size.css + await cssFilesSize(css);
		let fields = `jsSize: ${size.js}\n` + (cssSize ? `cssSize: ${cssSize}\n` : "");
		let source = entry.source.replace(/^(js|css)Size: .*\n/gm, "").replace(/^(builtWith: .*\n)/m, `$1${fields}`);
		fs.writeFileSync(entry.file, source);
		console.log(`${entry.tagName}: ${path.isAbsolute(js) ? path.relative(path.join(dir, "node_modules"), js) : js} ${size.js}${cssSize ? ` + ${cssSize} css` : ""}`);
	} catch (error) {
		console.warn(`${entry.tagName}: could not bundle ${js} (${error.message.split("\n")[0]})`);
	}
}

fs.rmSync(dir, { recursive: true, force: true });
