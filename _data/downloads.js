// Weekly npm downloads and monthly jsDelivr hits per package, cached for a day.
import fs from "node:fs";
import path from "node:path";
import Fetch from "@11ty/eleventy-fetch";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getJson(url, retries = 3) {
	try {
		return await Fetch(url, { duration: "1d", type: "json" });
	} catch (error) {
		// npm’s downloads API rate limits bursts; back off and retry.
		if (retries && /\(429\)/.test(error.message)) {
			await sleep(2000);
			return getJson(url, retries - 1);
		}
		return undefined;
	}
}

export default async function () {
	let packages = new Set();
	for (let file of fs.readdirSync("components", { recursive: true }).filter(f => f.endsWith(".md"))) {
		let pkg = fs.readFileSync(path.join("components", file), "utf8").match(/^package: "?([^"\n]+)"?$/m)?.[1];
		if (pkg) {
			packages.add(pkg);
		}
	}

	let npm = {};
	// The bulk endpoint takes up to 128 unscoped packages per request but no scoped ones.
	let unscoped = [...packages].filter(pkg => !pkg.startsWith("@"));
	for (let i = 0; i < unscoped.length; i += 128) {
		let batch = unscoped.slice(i, i + 128);
		let result = await getJson(`https://api.npmjs.org/downloads/point/last-week/${batch.join(",")}`);
		for (let pkg of batch) {
			npm[pkg] = batch.length === 1 ? result?.downloads : result?.[pkg]?.downloads;
		}
	}
	for (let pkg of [...packages].filter(pkg => pkg.startsWith("@"))) {
		npm[pkg] = (await getJson(`https://api.npmjs.org/downloads/point/last-week/${pkg}`))?.downloads;
	}

	let downloads = {};
	await Promise.all([...packages].map(async (pkg) => {
		let cdn = await getJson(`https://data.jsdelivr.com/v1/stats/packages/npm/${pkg}?period=month`);
		downloads[pkg] = { npm: npm[pkg], cdn: cdn?.hits?.total };
	}));
	return downloads;
}
