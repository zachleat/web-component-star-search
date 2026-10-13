// Limits a wrapping list of pills to a number of rows, with an ellipsis pill that shows the rest.
class PillClamp extends HTMLElement {
	connectedCallback() {
		this.list = this.querySelector("ul");
		this.toggle = document.createElement("li");
		this.toggle.innerHTML = `<button type="button" class="source-pill" aria-expanded="false" title="Show all">…</button>`;
		this.toggle.firstChild.addEventListener("click", () => {
			this.expanded = true;
			this.clamp();
		});
		// Only width changes move pills between rows, and clamping itself changes the height.
		new ResizeObserver(([entry]) => {
			let width = entry.contentRect.width;
			if (width !== this.width) {
				this.width = width;
				this.clamp();
			}
		}).observe(this.list);
	}

	clamp() {
		let rows = parseInt(this.getAttribute("rows"), 10) || 4;
		let items = [...this.list.children].filter((item) => item !== this.toggle);
		for (let item of items) {
			item.hidden = false;
		}
		this.toggle.remove();
		if (this.expanded) {
			return;
		}

		let tops = [...new Set(items.map((item) => item.offsetTop))];
		if (tops.length <= rows) {
			return;
		}
		let limit = tops[rows];
		for (let item of items) {
			item.hidden = item.offsetTop >= limit;
		}
		this.list.append(this.toggle);
		// Hide more pills until the ellipsis fits on the last row.
		let visible = items.filter((item) => !item.hidden);
		while (this.toggle.offsetTop >= limit && visible.length) {
			visible.pop().hidden = true;
		}
	}
}

customElements.define("pill-clamp", PillClamp);
