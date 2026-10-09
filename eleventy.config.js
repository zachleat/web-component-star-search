import * as pagefind from "pagefind";
import fontAwesomePlugin from "@11ty/font-awesome";

// Sources with a Font Awesome brand icon use it instead of an IndieWeb avatar.
const brandIcons = {
	"github.com": "fa-github",
	"webawesome.com": "fa-web-awesome",
};

export default function (eleventyConfig) {
	eleventyConfig.ignores.add("README.md");
	eleventyConfig.setServerOptions({
		port: 8765,
		liveReload: false,
	});
	eleventyConfig.addPlugin(fontAwesomePlugin, {
		failOnError: true,
		// Sizes icons before (or without) CSS.
		defaultAttributes: { "aria-hidden": "true", width: "1em", height: "1em" },
	});

	eleventyConfig.addPassthroughCopy({ public: "/" });
	eleventyConfig.addPassthroughCopy({
		"node_modules/@zachleat/solar-eclipse-toggle/solar-eclipse-toggle.js": "/static/solar-eclipse-toggle.js",
		"node_modules/@zachleat/solar-eclipse-toggle/solar-eclipse-toggle.css": "/static/solar-eclipse-toggle.css",
	});

	eleventyConfig.addCollection("components", (collectionApi) => {
		return collectionApi
			.getFilteredByGlob("components/**/*.md")
			.sort((a, b) => a.data.tagName.localeCompare(b.data.tagName));
	});

	eleventyConfig.addCollection("libraries", (collectionApi) => {
		let names = collectionApi
			.getFilteredByGlob("components/**/*.md")
			.map((entry) => entry.data.library?.name)
			.filter(Boolean);
		return [...new Set(names)].sort();
	});

	eleventyConfig.addFilter("avatar", (url) => {
		if (!url) {
			return "";
		}
		let { hostname, pathname } = new URL(url);
		let host = hostname.replace(/^www\./, "");
		let brand = pathname === "/" && brandIcons[host];
		if (brand) {
			return `<i class="fa-brands ${brand} avatar avatar-icon avatar-${brand}"></i>`;
		}
		// GitHub profile URLs use the account’s own avatar.
		let [account, ...rest] = pathname.split("/").filter(Boolean);
		let src = host === "github.com" && account && !rest.length
			? `https://github.com/${account}.png?size=60`
			: `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(url)}/`;
		return `<img src="${src}" alt="" class="avatar" width="60" height="60" loading="lazy" decoding="async">`;
	});

	eleventyConfig.addFilter("countBy", (entries, key) => {
		let counts = {};
		for (let entry of entries) {
			let value = entry.data[key];
			if (value) {
				counts[value] = (counts[value] || 0) + 1;
			}
		}
		return counts;
	});

	eleventyConfig.addFilter("screenshotUrl", (url) => {
		let { hostname, pathname } = new URL(url);
		// GitHub repositories use their OpenGraph card instead of a screenshot.
		let [owner, repo] = pathname.split("/").filter(Boolean);
		if (hostname === "github.com" && owner && repo) {
			return `https://v1.opengraph.11ty.dev/${encodeURIComponent(`https://github.com/${owner}/${repo}`)}/`;
		}
		return `https://v1.screenshot.11ty.dev/${encodeURIComponent(url.split("#")[0])}/opengraph/`;
	});

	eleventyConfig.addFilter("bytes", (size) => `${Math.max(size / 1000, 0.1).toFixed(1)} kB`);

	eleventyConfig.addFilter("sources", (entries) => {
		let sources = new Map();
		// Counts skip deprecated and archived components.
		for (let { data } of entries) {
			if (data.deprecated || data.archived) {
				continue;
			}
			let source = sources.get(data.source) || { name: data.source, url: data.library?.url || data.authorUrl, count: 0 };
			source.count++;
			sources.set(data.source, source);
		}
		return [...sources.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
	});

	// Preview images for the demo, docs and source links, skipping CodePen and duplicate images.
	eleventyConfig.addFilter("previews", (links) => {
		let previews = [];
		for (let [label, url] of links) {
			if (!url || url.includes("codepen.io")) {
				continue;
			}
			let src = eleventyConfig.getFilter("screenshotUrl")(url);
			let existing = previews.find((preview) => preview.src === src);
			if (!existing) {
				previews.push({ label, url, src });
			} else if (label === "Source code") {
				// A GitHub README “documentation” link shows the same card as the repository, so keep it once, as the source.
				previews.splice(previews.indexOf(existing), 1);
				previews.push({ label, url, src });
			}
		}
		return previews;
	});

	eleventyConfig.addFilter("findByTag", (entries, tagName) => entries.find((entry) => entry.data.tagName === tagName));

	// 0–5 from whichever is stronger: monthly usage (npm weekly downloads scaled to a month plus jsDelivr monthly hits; 1 dot at 1,000, 5 at 10 million) or GitHub stars (1 dot at ~30, 5 at ~300,000).
	eleventyConfig.addFilter("popularity", (stats, stars) => {
		let monthly = Math.round((stats?.npm || 0) * 30 / 7 + (stats?.cdn || 0));
		if (!monthly && !stars) {
			return;
		}
		let downloadScore = monthly ? Math.log10(monthly) - 2 : 0;
		let starScore = stars ? Math.log10(stars) - 0.5 : 0;
		let value = Math.max(downloadScore, starScore);
		return { score: Math.max(0, Math.min(5, Math.floor(value))), value, monthly, stars };
	});

	eleventyConfig.addFilter("date", (value) => new Date(value).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }));

	// Shorthand age as of the build, e.g. "3d", "5mo", "2y".
	eleventyConfig.addFilter("age", (value) => {
		let days = Math.floor((Date.now() - new Date(value)) / 86400000);
		if (days < 1) {
			return "today";
		}
		if (days < 30) {
			return `${days}d`;
		}
		if (days < 365) {
			return `${Math.floor(days / 30)}mo`;
		}
		return `${Math.floor(days / 365)}y`;
	});

	// YAML dates become Date objects; keep them as YYYY-MM-DD.
	eleventyConfig.addFilter("isoDate", (value) => new Date(value).toISOString().slice(0, 10));

	eleventyConfig.addFilter("number", (value) => new Intl.NumberFormat("en-US").format(value));

	eleventyConfig.addFilter("npmUrl", (name) => `https://www.npmjs.com/package/${name}`);

	// Index this build’s pages rather than the output folder, so deleted entries don’t linger in search.
	eleventyConfig.on("eleventy.after", async ({ directories, results }) => {
		let { index } = await pagefind.createIndex();
		for (let { url, content, outputPath } of results) {
			if (outputPath?.endsWith(".html")) {
				await index.addHTMLFile({ url, content });
			}
		}
		await index.writeFiles({ outputPath: `${directories.output}pagefind` });
		await pagefind.close();
	});
}
