---
tagName: vaadin-grid-tree-toggle
added: 2026-10-08
description: "`<vaadin-grid-tree-toggle>` is a helper element for the `<vaadin-grid>` that provides toggle and level display functionality for the item tree."
category: Layout
builtWith: Lit
jsSize: 1544
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [expanded, leaf, level, theme]
events: [expanded-changed]
---

`<vaadin-grid-tree-toggle>` is a helper element for the `<vaadin-grid>`
that provides toggle and level display functionality for the item tree.

#### Example:
```html
<vaadin-grid-column id="column"></vaadin-grid-column>
```
```js
const column = document.querySelector('#column');
column.renderer = (root, column, model) => {
  let treeToggle = root.firstElementChild;
  if (!treeToggle) {
    treeToggle = document.createElement('vaadin-grid-tree-toggle');
    treeToggle.addEventListener('expanded-changed', () => { ... });
    root.appendChild(treeToggle);
  }
  treeToggle.leaf = !model.item.hasChildren;
  treeToggle.level = level;
  treeToggle.expanded = expanded;
  treeToggle.textContent = model.item.name;
};
```

### Styling

The following shadow DOM parts are available for styling:

Part name | Description
---|---
`toggle` | The tree toggle icon

The following state attributes are available for styling:

Attribute  | Description
-----------|-------------------------------------
`expanded` | When present, the toggle is expanded
`leaf`     | When present, the toggle is not expandable, i. e., the current item is a leaf

The following custom CSS properties are available for styling:

Custom CSS property                          |
:--------------------------------------------|
| `--vaadin-grid-tree-toggle-level-offset`   |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
