// Filters the component cards using Pagefind for text queries and data attributes for facets.
class ComponentSearch extends HTMLElement {
	connectedCallback() {
		this.form = this.querySelector("form");
		this.status = this.querySelector("[data-status]");
		this.items = [...document.querySelectorAll(this.getAttribute("items"))];
		this.form.hidden = false;
		let options = this.querySelector(".search-options");
		options.hidden = false;
		// These controls live outside the form (via the form attribute), so their events don’t bubble to the form.
		options.addEventListener("input", () => this.update());

		let params = new URLSearchParams(location.search);
		for (let [name, value] of params) {
			this.setValue(name, value);
		}

		this.form.addEventListener("submit", (event) => event.preventDefault());
		// Form values clear after the reset event, so update on the next tick.
		this.form.addEventListener("reset", () => setTimeout(() => {
			// Hidden inputs keep their value on reset.
			for (let field of this.form.querySelectorAll("input[type=hidden]")) {
				field.value = "";
			}
			this.update();
		}));
		this.form.addEventListener("input", (event) => {
			clearTimeout(this.timer);
			this.timer = setTimeout(() => this.update(), event.target.type === "search" ? 200 : 0);
		});

		// Filter links on the cards update the form in place instead of reloading.
		document.addEventListener("click", (event) => {
			let link = event.target.closest("a[data-filter]");
			if (!link || event.metaKey || event.ctrlKey || event.shiftKey) {
				return;
			}
			event.preventDefault();
			// Clicking the active filter again turns it off.
			let active = link.hasAttribute("aria-current");
			for (let [name, value] of new URL(link.href).searchParams) {
				this.setValue(name, active ? "" : value);
			}
			this.update();
			// Only scroll back up when the controls are out of view (e.g. after clicking a link on a card).
			if (this.getBoundingClientRect().top < 0) {
				this.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		});

		// Always run once to apply the default sort.
		this.update();
	}

	// Selects only list common values, so add an option on demand (e.g. a source with one component).
	setValue(name, value) {
		let field = this.form.elements[name];
		if (!field) {
			return;
		}
		if (field.type === "checkbox") {
			field.checked = Boolean(value);
			return;
		}
		if (field.tagName === "SELECT" && value && ![...field.options].some((option) => option.value === value)) {
			field.add(new Option(value, value));
		}
		field.value = value;
	}

	async matchingUrls(query) {
		if (!query) {
			return;
		}
		this.pagefind ||= import("/pagefind/pagefind.js").then(async (pagefind) => {
			await pagefind.init();
			return pagefind;
		});
		let search = await (await this.pagefind).search(query);
		let results = await Promise.all(search.results.map((result) => result.data()));
		return new Set(results.map((result) => result.url));
	}

	// Reorders the cards (most popular by default); items without a value sort last, and ties keep name order.
	sort(order) {
		let key = order?.startsWith("size") ? "size" : ["published", "added"].includes(order) ? order : order === "name" ? undefined : "popular";
		let direction = order === "size-asc" ? 1 : -1;
		let toNumber = (value) => ["published", "added"].includes(key) ? Date.parse(value) : Number(value);
		let sorted = this.items.map((item, index) => ({ item, index, value: key ? toNumber(item.dataset[key]) : NaN }));
		sorted.sort((a, b) => {
			if (!key || (Number.isNaN(a.value) && Number.isNaN(b.value))) {
				return a.index - b.index;
			}
			if (Number.isNaN(a.value) || Number.isNaN(b.value)) {
				return Number.isNaN(a.value) ? 1 : -1;
			}
			return (a.value - b.value) * direction || a.index - b.index;
		});
		this.items[0].parentElement.append(...sorted.map(({ item }) => item));
	}

	async update() {
		let values = Object.fromEntries(new FormData(this.form));
		let query = values.q.trim();
		let run = (this.run || 0) + 1;
		this.run = run;
		this.setAttribute("aria-busy", "true");

		let urls = await this.matchingUrls(query);
		if (run !== this.run) {
			return;
		}

		let count = 0;
		for (let item of this.items) {
			let match = (!urls || urls.has(item.dataset.url))
				&& (!values.category || item.dataset.category === values.category)
				&& (!values.source || item.dataset.source === values.source)
				&& (!values.builtWith || item.dataset.builtWith === values.builtWith)
				&& (!values.demo || "demo" in item.dataset)
				&& (!values.npm || "npm" in item.dataset)
				&& (!values.indie || "indie" in item.dataset);
			item.hidden = !match;
			count += match ? 1 : 0;
		}
		this.sort(values.sort);
		// Mark filter links that match the current filters.
		for (let link of document.querySelectorAll("a[data-filter]")) {
			let params = [...new URL(link.href).searchParams];
			link.toggleAttribute("aria-current", params.length > 0 && params.every(([name, value]) => values[name] === value));
		}
		this.status.textContent = `${count} of ${this.items.length} components`;
		this.removeAttribute("aria-busy");

		let params = new URLSearchParams(Object.entries(values).filter(([, value]) => value.trim()));
		history.replaceState(null, "", params.size ? `?${params}` : location.pathname);
	}
}

customElements.define("component-search", ComponentSearch);
