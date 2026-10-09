// Imports the custom elements from one or more npm packages, using each package’s Custom Elements Manifest when it has one.
// Usage: node scripts/import-npm.js <folder> <package>... [same options as import-cem.js, plus --tags a,b to limit or name the tags]
import { parseOptions, optionsToData, entriesFromManifest, writeEntries, detectBuiltWith, summarize } from "./entries.js";

const { values: opts, positionals: [folder, ...packages] } = parseOptions();
if (!folder || !packages.length) {
	console.error("Usage: node scripts/import-npm.js <folder> <package>... [options]");
	process.exit(1);
}

const getJson = async (url) => (await fetch(url)).json();
const repoUrl = (repo) => (typeof repo === "string" ? repo : repo?.url)
	?.replace(/^git\+/, "").replace(/^git:\/\//, "https://").replace(/^git@([^:]+):/, "https://$1/").replace(/^ssh:\/\/git@github\.com/, "https://github.com").replace(/#.*$/, "").replace(/\.git$/, "");
const authorName = (author) => (typeof author === "string" ? author : author?.name)?.replace(/\s*[<(].*$/, "");
const genericKeywords = /^(html|web[- ]?components?|custom[- ]?elements?|webcomponents?|components?)$/i;

for (let name of packages) {
	let pkg = await getJson(`https://registry.npmjs.org/${name.replace("/", "%2F")}/latest`);
	let cdn = `https://cdn.jsdelivr.net/npm/${name}@${pkg.version}`;
	let repository = repoUrl(pkg.repository);

	let defaults = {
		...Object.fromEntries(Object.entries({
			package: name,
			author: authorName(pkg.author),
			repository,
			documentation: pkg.homepage,
			license: pkg.license,
			builtWith: detectBuiltWith(pkg),
			description: summarize(pkg.description),
			// Package keywords describe the whole library, not each of its components.
			keywords: opts.library ? undefined : (pkg.keywords || []).filter(k => !genericKeywords.test(k)),
		}).filter(([, value]) => value !== undefined)),
		...optionsToData(opts),
	};

	let { files } = await getJson(`https://data.jsdelivr.com/v1/packages/npm/${name}@${pkg.version}?structure=flat`);
	let filenames = files.map(f => f.name);
	let manifestPath = [pkg.customElements && `/${pkg.customElements.replace(/^\.?\//, "")}`, "/custom-elements.json", "/dist/custom-elements.json"]
		.find(f => f && filenames.includes(f));

	let entries = manifestPath ? entriesFromManifest(await getJson(cdn + manifestPath), defaults) : [];
	if (!entries.length) {
		let tags = new Set();
		let sources = filenames.filter(f => /\.m?js$/.test(f) && !/\.min\.|test|spec|demo|example|node_modules|config/.test(f));
		for (let file of sources.slice(0, 100)) {
			let js = await (await fetch(cdn + file)).text();
			for (let [, tag] of js.matchAll(/(?:\bdefine\(\s*(?:[\w$.]+\s*\|\|\s*)?|define\(\s*tag\s*=\s*|static get is\(\)\s*\{\s*return\s*|customElement\(\s*)\s*["'`]([a-z][\w]*-[\w-]*)["'`]/g)) {
				tags.add(tag);
			}
		}
		entries = [...tags].map(tagName => ({ data: { tagName, ...defaults }, body: "" }));
	}

	if (opts.tags) {
		let only = opts.tags.split(",");
		entries = only.map(tagName => entries.find(e => e.data.tagName === tagName) || { data: { tagName, ...defaults }, body: "" });
	}

	if (!defaults.author) {
		console.warn(`${name} has no author; pass --author`);
	}

	if (!entries.length) {
		console.warn(`No custom elements found in ${name}`);
		continue;
	}
	writeEntries(entries, folder, opts);
}
