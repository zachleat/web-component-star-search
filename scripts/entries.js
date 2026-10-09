import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { toMarkdown } from "./frontmatter.js";

export function parseOptions() {
	return parseArgs({
		allowPositionals: true,
		options: {
			library: { type: "string" },
			"library-url": { type: "string" },
			package: { type: "string" },
			author: { type: "string" },
			"author-url": { type: "string" },
			repository: { type: "string" },
			license: { type: "string" },
			description: { type: "string" },
			demo: { type: "string" },
			documentation: { type: "string" },
			keywords: { type: "string" },
			tags: { type: "string" },
			"built-with": { type: "string" },
			overwrite: { type: "boolean", default: false },
		},
	});
}

const clean = (str = "") => str.replace(/\s+/g, " ").trim();

// First prose paragraph of a markdown string, cut to its first sentence when long.
export function summarize(markdown = "", maxLength = 200) {
	let paragraph = markdown
		.split(/\n\s*\n/)
		.map(p => clean(p.replace(/\[([^\]]+)\](\([^)]*\)|\[[^\]]*\])/g, "$1").replace(/\s*<?https?:\/\/\S+/g, "")))
		.find(p => p && !/^(#|```|<|\||[-*] |\d+\. |!\[)/.test(p));
	if (!paragraph || paragraph.length <= maxLength) {
		return paragraph || "";
	}
	return paragraph.match(/^.{20,}?[.!?](?=\s|$)/)?.[0] || paragraph;
}
const names = (items = [], filter = () => true) => [...new Set(items.filter(filter).map(item => item.name).filter(Boolean))];

const runtimeLibraries = { lit: "Lit", "lit-element": "Lit", "@lit/reactive-element": "Lit", "@microsoft/fast-element": "FAST" };
// Libraries compiled into the published output only show up as devDependencies.
const compiledLibraries = { "@elenajs/core": "Elena", "@stencil/core": "Stencil" };

// Names the base library a package’s components are built on (see _data/baseLibraries.js).
export function detectBuiltWith(pkg) {
	let runtime = { ...pkg.peerDependencies, ...pkg.dependencies };
	for (let [dep, name] of Object.entries(runtimeLibraries)) {
		if (dep in runtime) {
			return name;
		}
	}
	for (let [dep, name] of Object.entries(compiledLibraries)) {
		if (dep in (pkg.devDependencies || {})) {
			return name;
		}
	}
	return "Vanilla";
}

export function optionsToData(opts) {
	let data = {
		library: opts.library ? { name: opts.library, url: opts["library-url"] } : undefined,
		package: opts.package,
		author: opts.author,
		authorUrl: opts["author-url"],
		repository: opts.repository,
		demo: opts.demo,
		documentation: opts.documentation,
		license: opts.license,
		builtWith: opts["built-with"],
		description: opts.description,
		keywords: opts.keywords?.split(",").map(k => k.trim()).filter(Boolean),
	};
	return Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined));
}

// Returns one entry per non-deprecated custom element in a Custom Elements Manifest.
export function entriesFromManifest(manifest, defaults = {}) {
	let entries = [];
	for (let mod of manifest.modules || []) {
		for (let decl of mod.declarations || []) {
			if (!decl.customElement || !decl.tagName || ["deprecated", "internal"].includes(decl.status)) {
				continue;
			}
			// Descriptions that start with a heading are README dumps, not summaries.
			let body = /^\s*#/.test(decl.description || "") ? "" : (decl.description || "").trim();
			let base = defaults.library?.url || defaults.documentation;
			if (base) {
				body = body.replace(/\]\((\/[^)]*)\)/g, (match, href) => `](${new URL(href, base)})`);
			}
			let description = summarize(decl.summary) || summarize(body) || defaults.description;
			entries.push({
				data: {
					tagName: decl.tagName,
					...defaults,
					description,
					documentation: decl.documentation || defaults.documentation,
					status: decl.status,
					attributes: names(decl.attributes),
					slots: names(decl.slots, slot => slot.name),
					events: names(decl.events),
					cssParts: names(decl.cssParts),
				},
				body: clean(body) === description ? "" : body,
			});
		}
	}
	return entries;
}

export function writeEntries(entries, folder, { overwrite = false } = {}) {
	let outputDir = path.join("components", folder);
	fs.mkdirSync(outputDir, { recursive: true });
	let count = 0;
	for (let { data, body } of entries) {
		let file = path.join(outputDir, `${data.tagName}.md`);
		if (fs.existsSync(file) && !overwrite) {
			continue;
		}
		let { tagName, description, category, builtWith, library, ...rest } = data;
		let now = new Date();
		let added = new Date(now - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
		fs.writeFileSync(file, toMarkdown({ tagName, added, description, category, builtWith, library, ...rest }, body));
		count++;
	}
	console.log(`Wrote ${count} components to ${outputDir}`);
}
