---
tagName: vaadin-grid-column-group
added: 2026-10-08
description: "A `<vaadin-grid-column-group>` is used to make groups of columns in `<vaadin-grid>` and to configure additional headers and footers."
category: Layout
builtWith: Lit
jsSize: 4010
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [flex-grow, footer-part-name, footer-renderer, frozen, frozen-to-end, header, header-part-name, header-renderer, hidden, resizable, row-header, text-align, width]
---

A `<vaadin-grid-column-group>` is used to make groups of columns in `<vaadin-grid>` and
to configure additional headers and footers.

Groups can be nested to create complex header and footer configurations.

#### Example:
```html
<vaadin-grid-column-group resizable id="columnGroup">
  <vaadin-grid-column id="column1"></vaadin-grid-column>
  <vaadin-grid-column id="column2"></vaadin-grid-column>
</vaadin-grid-column-group>
```

```js
const columnGroup = document.querySelector('#columnGroup');
columnGroup.headerRenderer = (root, columnGroup) => {
  root.textContent = 'header';
}

const column1 = document.querySelector('#column1');
column1.headerRenderer = (root, column) => { ... };
column1.renderer = (root, column, model) => { ... };

const column2 = document.querySelector('#column2');
column2.headerRenderer = (root, column) => { ... };
column2.renderer = (root, column, model) => { ... };
```
