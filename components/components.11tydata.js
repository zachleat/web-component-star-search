export default {
	layout: "layouts/component.njk",
	permalink: "{{ page.filePathStem }}/",
	templateEngineOverride: "md",
	eleventyComputed: {
		title: (data) => `<${data.tagName}>`,
		source: (data) => data.library?.name || data.author,
	},
};
