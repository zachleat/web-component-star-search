function yamlValue(value) {
	if (Array.isArray(value)) {
		return `[${value.map(yamlValue).join(", ")}]`;
	}
	let str = String(value);
	if (/^[A-Za-z0-9][^#\n"'`[\]{},]*$/.test(str) && !str.includes(": ") && !str.endsWith(":")) {
		return str;
	}
	return JSON.stringify(str);
}

// Serializes a flat object to a markdown file with YAML front matter, skipping empty values.
export function toMarkdown(data, body = "") {
	let lines = ["---"];
	for (let [key, value] of Object.entries(data)) {
		if (value === undefined || value === null || value === "" || (Array.isArray(value) && !value.length)) {
			continue;
		}
		if (typeof value === "object" && !Array.isArray(value)) {
			lines.push(`${key}:`);
			for (let [subkey, subvalue] of Object.entries(value)) {
				lines.push(`  ${subkey}: ${yamlValue(subvalue)}`);
			}
			continue;
		}
		lines.push(`${key}: ${yamlValue(value)}`);
	}
	lines.push("---", "");
	return lines.join("\n") + (body ? `\n${body.trim()}\n` : "");
}
