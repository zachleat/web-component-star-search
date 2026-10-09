// Adds a `demo` URL to standalone entries that lack one, using the first “demo” link in the package or repository README.
// Usage: node scripts/find-demos.js
import fs from "node:fs";
import path from "node:path";

const files = fs.readdirSync("components", { recursive: true }).filter(f => f.endsWith(".md")).map(f => path.join("components", f));

async function getText(url) {
	let res = await fetch(url);
	return res.ok ? res.text() : undefined;
}

async function readme({ pkg, repo }) {
	let sources = [];
	if (pkg) {
		sources.push(`https://cdn.jsdelivr.net/npm/${pkg}/README.md`, `https://cdn.jsdelivr.net/npm/${pkg}/readme.md`);
	}
	if (repo) {
		sources.push(`https://raw.githubusercontent.com/${repo}/HEAD/README.md`, `https://raw.githubusercontent.com/${repo}/HEAD/readme.md`);
	}
	for (let url of sources) {
		let text = await getText(url);
		if (text) {
			return text;
		}
	}
}

// Markdown or HTML links whose text or URL mentions a demo; images and badges are skipped.
function findDemo(markdown) {
	let links = [
		...[...markdown.matchAll(/(?<!!)\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)/g)].map(([, text, url]) => ({ text, url })),
		...[...markdown.matchAll(/<a[^>]+href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(([, url, text]) => ({ text, url })),
	];
	let isFile = (url) => /\.(png|jpe?g|gif|svg|webp|pdf|mp4|zip)(\?|$)|shields\.io|badge/i.test(url);
	return [
		...links.filter(({ text, url }) => !isFile(url) && /\bdemo\b/i.test(text.replace(/<[^>]+>/g, ""))),
		...links.filter(({ url }) => !isFile(url) && /demo/i.test(url) && !/github\.com/.test(url)),
	].map(({ url }) => url);
}

// Dead demo hosts (e.g. Glitch) would only produce broken screenshots.
async function isLive(url) {
	try {
		let res = await fetch(url, { redirect: "follow" });
		// 403 is usually bot protection (e.g. CodePen), not a dead page.
		return res.ok || res.status === 403;
	} catch {
		return false;
	}
}

let cache = new Map();
for (let file of files) {
	let source = fs.readFileSync(file, "utf8");
	// Library READMEs describe the whole library, not a single component.
	if (/^demo:/m.test(source) || /^library:/m.test(source)) {
		continue;
	}
	let pkg = source.match(/^package: "?([^"\n]+)"?$/m)?.[1];
	let repo = source.match(/^repository: "?https:\/\/github\.com\/([^/\s"#]+\/[^/\s"#]+)/m)?.[1];
	if (!pkg && !repo) {
		continue;
	}
	let key = pkg || repo;
	if (!cache.has(key)) {
		let text = await readme({ pkg, repo });
		let demo;
		for (let url of text ? findDemo(text) : []) {
			if (await isLive(url)) {
				demo = url;
				break;
			}
		}
		cache.set(key, demo);
	}
	let demo = cache.get(key);
	if (demo) {
		// Append to the end of the front matter.
		fs.writeFileSync(file, source.replace(/^(---\n[\s\S]*?\n)(---\n)/, `$1demo: ${JSON.stringify(demo)}\n$2`));
		console.log(`${path.relative("components", file)}: ${demo}`);
	}
}
