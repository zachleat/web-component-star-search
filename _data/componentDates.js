// When each library component last changed: the earliest release whose files for that component match the latest stable release.
// Compares jsDelivr file sizes across versions (hashes churn on embedded version strings and chunk names); old version listings never change, so they’re cached indefinitely.
import fs from "node:fs";
import path from "node:path";
import { fetchJson, registryDoc, stableVersions, packagesInCatalog } from "../lib/registry.js";

const MAX_VERSIONS = 60;
const skipFile = /(^|\/)(test|tests|internal|stories|react|cjs|ssr)\/|\.(d\.ts|map)$|\.examples?\.|\.bench\./;

function listing(pkg, version, isLatest) {
	return fetchJson(`https://data.jsdelivr.com/v1/packages/npm/${pkg}@${version}?structure=flat`, isLatest ? "1d" : "*");
}

// The component’s module, plus its sibling files when it has a folder of its own.
function keyFiles(tagName, files) {
	let name = tagName.replace(/^[a-z0-9]+-/, "");
	let names = [`${tagName}.js`, `${name}.js`, `${name.replaceAll("-", "_")}.js`];
	let rank = (f) => [f.includes("/labs/") ? 1 : 0, path.basename(f) === `${tagName}.js` ? 0 : 1, f.length];
	let module = files
		.filter((f) => names.includes(path.basename(f)) && !skipFile.test(f))
		.sort((a, b) => rank(a).join().localeCompare(rank(b).join(), undefined, { numeric: true }))[0];
	if (!module) {
		return;
	}
	let dir = path.dirname(module);
	let siblings = files.filter((f) => path.dirname(f) === dir && !skipFile.test(f));
	// Flat layouts (many components per folder) only compare the module itself.
	return siblings.length > 15 ? [module] : siblings;
}

export default async function () {
	let libraries = new Map();
	for (let entry of packagesInCatalog(fs, path).filter((entry) => entry.library)) {
		libraries.set(entry.pkg, [...(libraries.get(entry.pkg) || []), entry.tagName]);
	}

	let dates = {};
	await Promise.all([...libraries].map(async ([pkg, tags]) => {
		let doc = await registryDoc(pkg);
		let versions = stableVersions(Object.keys(doc?.versions || {})).reverse().slice(0, MAX_VERSIONS);
		if (versions.length < 2) {
			return;
		}
		let latest = await listing(pkg, versions[0], true);
		if (!latest?.files) {
			return;
		}
		let hashesOf = (list) => new Map(list.files.map((f) => [f.name, f.size]));
		let latestHashes = hashesOf(latest);
		let pending = new Map();
		for (let tag of tags) {
			let keys = keyFiles(tag, [...latestHashes.keys()]);
			if (keys) {
				pending.set(tag, { keys, signature: keys.map((k) => latestHashes.get(k)).join() });
			}
		}
		let changed = new Map();
		for (let i = 1; i < versions.length && pending.size; i++) {
			let older = await listing(pkg, versions[i]);
			if (!older?.files) {
				break;
			}
			let hashes = hashesOf(older);
			for (let [tag, { keys, signature }] of pending) {
				if (keys.map((k) => hashes.get(k)).join() !== signature) {
					changed.set(tag, versions[i - 1]);
					pending.delete(tag);
				}
			}
		}
		// Unchanged across every version checked: date it to the oldest one.
		for (let tag of pending.keys()) {
			changed.set(tag, versions.at(-1));
		}
		// When nearly every component “changed” in the latest release, the build output is too noisy to trust.
		let inLatest = [...changed.values()].filter((version) => version === versions[0]).length;
		if (changed.size > 5 && inLatest / changed.size > 0.8) {
			return;
		}
		for (let [tag, version] of changed) {
			if (doc.time?.[version]) {
				dates[`${pkg}#${tag}`] = { date: doc.time[version], version };
			}
		}
	}));
	return dates;
}
