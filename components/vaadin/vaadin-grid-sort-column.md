---
tagName: vaadin-grid-sort-column
added: 2026-10-08
description: "`<vaadin-grid-sort-column>` is a helper element for the `<vaadin-grid>` that provides default header renderer and functionality for sorting."
category: Layout
builtWith: Lit
jsSize: 4001
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [auto-width, direction, flex-grow, footer-part-name, footer-renderer, frozen, frozen-to-end, header, header-part-name, header-renderer, hidden, path, renderer, resizable, row-header, text-align, width]
events: [direction-changed]
---

`<vaadin-grid-sort-column>` is a helper element for the `<vaadin-grid>`
that provides default header renderer and functionality for sorting.

#### Example:
```html
<vaadin-grid>
 <vaadin-grid-sort-column path="name.first" direction="asc"></vaadin-grid-sort-column>

 <vaadin-grid-column>
   ...
```
