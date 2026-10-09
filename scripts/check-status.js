// Records `deprecated` (npm deprecation message), `archived` (archived GitHub repository) and `stars` (GitHub stars) on each entry.
// Requires an authenticated GitHub CLI (`gh auth login`).
// Usage: node scripts/check-status.js
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const files = fs.readdirSync("components", { recursive: true }).filter(f => f.endsWith(".md")).map(f => path.join("components", f));
const entries = files.map(file => {
	let source = fs.readFileSync(file, "utf8");
	let repo = source.match(/^repository: "?https:\/\/github\.com\/([^/\s"#]+\/[^/\s"#]+)/m)?.[1];
	return { file, source, pkg: source.match(/^package: "?([^"\n]+)"?$/m)?.[1], repo };
});

async function isDeprecated(pkg) {
	let res = await fetch(`https://registry.npmjs.org/${pkg.replace("/", "%2F")}/latest`);
	return res.ok ? (await res.json()).deprecated : undefined;
}

// Asks the GitHub GraphQL API (via the authenticated `gh` CLI) about many repositories per request.
function repoStatus(repos) {
	let status = new Map();
	for (let i = 0; i < repos.length; i += 50) {
		let batch = repos.slice(i, i + 50);
		let query = batch.map((repo, index) => {
			let [owner, name] = repo.split("/");
			return `r${index}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { isArchived stargazerCount }`;
		}).join("\n");
		let output;
		try {
			output = execFileSync("gh", ["api", "graphql", "-f", `query={ ${query} }`], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
		} catch (error) {
			// Missing or renamed repositories make gh exit non-zero, but the rest of the data is still returned.
			if (!error.stdout) {
				throw new Error(`gh api failed (is \`gh auth login\` done?): ${error.stderr || error.message}`);
			}
			output = error.stdout;
		}
		let { data = {} } = JSON.parse(output);
		batch.forEach((repo, index) => status.set(repo, data[`r${index}`]));
	}
	return status;
}

const deprecated = new Map();
for (let pkg of new Set(entries.map(e => e.pkg).filter(Boolean))) {
	deprecated.set(pkg, await isDeprecated(pkg));
}
const repos = repoStatus([...new Set(entries.map(e => e.repo).filter(Boolean))]);

for (let entry of entries) {
	let message = deprecated.get(entry.pkg);
	let repo = repos.get(entry.repo);
	let fields = (message ? `deprecated: ${JSON.stringify(String(message).replace(/\s+/g, " ").trim())}\n` : "")
		+ (repo?.isArchived ? "archived: true\n" : "")
		+ (repo?.stargazerCount ? `stars: ${repo.stargazerCount}\n` : "");
	let source = entry.source.replace(/^(deprecated|archived|stars): .*\n/gm, "");
	source = source.replace(/^(tagName: .*\n)/m, `$1${fields}`);
	if (source !== entry.source) {
		fs.writeFileSync(entry.file, source);
	}
	if (fields) {
		console.log(`${path.relative("components", entry.file)}: ${fields.trim().replace(/\n/g, ", ")}`);
	}
}
