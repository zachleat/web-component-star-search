// Latest stable version, latest tag and last publish date per npm package (from the compact registry document), cached for a day.
import fs from "node:fs";
import path from "node:path";
import Fetch from "@11ty/eleventy-fetch";

// Highest version without a prerelease suffix, e.g. 1.4.2 over 2.0.0-beta.1.
function latestStable(versions) {
	let parse = (version) => version.split(".").map(Number);
	return versions
		.filter(version => /^\d+\.\d+\.\d+$/.test(version))
		.sort((a, b) => {
			let [x, y] = [parse(a), parse(b)];
			return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
		})
		.pop();
}

export default async function () {
	let packages = new Set();
	for (let file of fs.readdirSync("components", { recursive: true }).filter(f => f.endsWith(".md"))) {
		let pkg = fs.readFileSync(path.join("components", file), "utf8").match(/^package: "?([^"\n]+)"?$/m)?.[1];
		if (pkg) {
			packages.add(pkg);
		}
	}

	let published = {};
	await Promise.all([...packages].map(async (pkg) => {
		// Retry transient registry failures so an uncached build doesn’t silently drop data.
		for (let attempt = 0; attempt < 3; attempt++) {
			try {
				let doc = await Fetch(`https://registry.npmjs.org/${pkg.replace("/", "%2F")}`, {
					duration: "1d",
					type: "json",
					fetchOptions: { headers: { accept: "application/vnd.npm.install-v1+json" } },
				});
				published[pkg] = { date: doc.modified, version: latestStable(Object.keys(doc.versions || {})), latest: doc["dist-tags"]?.latest };
				break;
			} catch {
				await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
			}
		}
	}));
	return published;
}
