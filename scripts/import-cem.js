// Imports every custom element from a Custom Elements Manifest into individual markdown entries.
// Usage: node scripts/import-cem.js <manifest-url-or-path> <folder> [--library NAME --library-url URL --package NAME --author NAME --author-url URL --repository URL --license ID --description TEXT --demo URL --documentation URL --keywords a,b --overwrite]
import fs from "node:fs";
import { parseOptions, optionsToData, entriesFromManifest, writeEntries } from "./entries.js";

const { values: opts, positionals: [source, folder] } = parseOptions();
if (!source || !folder) {
	console.error("Usage: node scripts/import-cem.js <manifest-url-or-path> <folder> [options]");
	process.exit(1);
}

const manifest = /^https?:/.test(source)
	? await (await fetch(source)).json()
	: JSON.parse(fs.readFileSync(source, "utf8"));

writeEntries(entriesFromManifest(manifest, optionsToData(opts)), folder, opts);
