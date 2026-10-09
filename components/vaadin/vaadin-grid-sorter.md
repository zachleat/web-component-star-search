---
tagName: vaadin-grid-sorter
added: 2026-10-08
description: "`<vaadin-grid-sorter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls, visual feedback, and handlers for sorting the grid data."
category: Layout
builtWith: Lit
jsSize: 1746
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [direction, path, theme]
events: [direction-changed, sorter-changed]
---

`<vaadin-grid-sorter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls,
visual feedback, and handlers for sorting the grid data.

#### Example:
```html
<vaadin-grid-column id="column"></vaadin-grid-column>
```
```js
const column = document.querySelector('#column');
column.renderer = (root, column, model) => {
  let sorter = root.firstElementChild;
  if (!sorter) {
    sorter = document.createElement('vaadin-grid-sorter');
    root.appendChild(sorter);
  }
  sorter.path = 'name.first';
};
```

### Styling

The following shadow DOM parts are available for styling:

Part name | Description
----------------|----------------
`content` | The slotted content wrapper
`indicators` | The internal sorter indicators.
`order` | The internal sorter order

The following state attributes are available for styling:

Attribute    | Description
-------------|---------------------------
`direction`  | Sort direction of a sorter
