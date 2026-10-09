// Adds a `category` to entries that don’t have one: the first word of the tag name (then of the description) found in _data/categories.js wins.
// Usage: node scripts/categorize.js [--force]
import fs from "node:fs";
import path from "node:path";
import categories from "../_data/categories.js";

const force = process.argv.includes("--force");
const files = fs.readdirSync("components", { recursive: true }).filter(f => f.endsWith(".md")).map(f => path.join("components", f));

function classify(tagName, description) {
	let words = [...tagName.split("-"), ...description.toLowerCase().split(/[^a-z0-9]+/)];
	for (let word of words) {
		let match = categories.find(c => c.words.includes(word));
		if (match) {
			return match.name;
		}
	}
	return "Utilities";
}

let counts = {};
for (let file of files) {
	let source = fs.readFileSync(file, "utf8");
	if (/^category:/m.test(source) && !force) {
		continue;
	}
	let tagName = source.match(/^tagName: (.*)$/m)[1];
	let description = source.match(/^description: (.*)$/m)?.[1] || "";
	let category = classify(tagName, description);
	counts[category] = (counts[category] || 0) + 1;
	source = source.replace(/^category: .*\n/m, "").replace(/^(description: .*\n)/m, `$1category: ${category}\n`);
	fs.writeFileSync(file, source);
}
console.log(counts);
