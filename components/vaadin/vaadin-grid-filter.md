---
tagName: vaadin-grid-filter
added: 2026-10-08
description: "`<vaadin-grid-filter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls, and handlers for filtering the grid data."
category: Layout
builtWith: Lit
jsSize: 11295
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [path, theme, value]
events: [value-changed]
---

`<vaadin-grid-filter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls,
and handlers for filtering the grid data.

#### Example:
```html
<vaadin-grid-column id="column"></vaadin-grid-column>
```
```js
const column = document.querySelector('#column');
column.headerRenderer = (root, column) => {
  let filter = root.firstElementChild;
  if (!filter) {
    filter = document.createElement('vaadin-grid-filter');
    root.appendChild(filter);
  }
  filter.path = 'name.first';
};
column.renderer = (root, column, model) => {
  root.textContent = model.item.name.first;
};
```
