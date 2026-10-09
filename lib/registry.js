// Shared npm registry helpers for the global data files.
import Fetch from "@11ty/eleventy-fetch";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Retries transient failures so an uncached build doesn’t silently drop data.
export async function fetchJson(url, duration = "1d") {
	for (let attempt = 0; attempt < 3; attempt++) {
		try {
			return await Fetch(url, { duration, type: "json" });
		} catch {
			await wait(1000 * (attempt + 1));
		}
	}
}

export function registryDoc(pkg) {
	return fetchJson(`https://registry.npmjs.org/${pkg.replace("/", "%2F")}`);
}

const parse = (version) => version.split(".").map(Number);

// Stable versions (no prerelease suffix), oldest first.
export function stableVersions(versions = []) {
	return versions
		.filter((version) => /^\d+\.\d+\.\d+$/.test(version))
		.sort((a, b) => {
			let [x, y] = [parse(a), parse(b)];
			return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
		});
}

export function packagesInCatalog(fs, path) {
	let entries = [];
	for (let file of fs.readdirSync("components", { recursive: true }).filter((f) => f.endsWith(".md"))) {
		let source = fs.readFileSync(path.join("components", file), "utf8");
		let pkg = source.match(/^package: "?([^"\n]+)"?$/m)?.[1];
		if (pkg) {
			entries.push({ pkg, tagName: source.match(/^tagName: (.*)$/m)[1], library: source.match(/^library:\n {2}name: (.*)$/m)?.[1] });
		}
	}
	return entries;
}
