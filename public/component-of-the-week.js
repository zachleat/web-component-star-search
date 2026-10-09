// Shows a copy of one card, picked by the ISO week so everyone sees the same component all week.
class ComponentOfTheWeek extends HTMLElement {
	static hash(str) {
		let hash = 5381;
		for (let char of str) {
			hash = ((hash << 5) + hash + char.charCodeAt(0)) >>> 0;
		}
		return hash;
	}

	// ISO 8601 week, e.g. "2026-W41".
	static week(date = new Date()) {
		let day = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
		day.setUTCDate(day.getUTCDate() + 4 - (day.getUTCDay() || 7));
		let yearStart = new Date(Date.UTC(day.getUTCFullYear(), 0, 1));
		let week = Math.ceil(((day - yearStart) / 86400000 + 1) / 7);
		return `${day.getUTCFullYear()}-W${week}`;
	}

	connectedCallback() {
		let items = document.querySelectorAll(this.getAttribute("items"));
		if (!items.length) {
			return;
		}
		let card = items[ComponentOfTheWeek.hash(ComponentOfTheWeek.week()) % items.length].cloneNode(true);
		card.removeAttribute("hidden");
		let list = document.createElement("ul");
		list.className = "component-list";
		list.append(card);
		this.append(list);
		this.hidden = false;
	}
}

customElements.define("component-of-the-week", ComponentOfTheWeek);
