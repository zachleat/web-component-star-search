// Latest stable version, its publish date and the latest tag per npm package, cached for a day.
import fs from "node:fs";
import path from "node:path";
import { registryDoc, stableVersions, packagesInCatalog } from "../lib/registry.js";

export default async function () {
	let packages = new Set(packagesInCatalog(fs, path).map((entry) => entry.pkg));
	let published = {};
	await Promise.all([...packages].map(async (pkg) => {
		let doc = await registryDoc(pkg);
		if (!doc) {
			return;
		}
		let version = stableVersions(Object.keys(doc.versions || {})).pop();
		let latest = doc["dist-tags"]?.latest;
		published[pkg] = { date: doc.time?.[version] || doc.time?.[latest], version, latest };
	}));
	return published;
}
