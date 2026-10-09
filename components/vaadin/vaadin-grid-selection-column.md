---
tagName: vaadin-grid-selection-column
added: 2026-10-08
description: "`<vaadin-grid-selection-column>` is a helper element for the `<vaadin-grid>` that provides default renderers and functionality for item selection."
category: Layout
builtWith: Lit
jsSize: 16193
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [auto-select, auto-width, drag-select, flex-grow, footer-part-name, footer-renderer, frozen, frozen-to-end, header, header-part-name, header-renderer, hidden, path, renderer, resizable, row-header, select-all, text-align, width]
events: [select-all-changed]
---

`<vaadin-grid-selection-column>` is a helper element for the `<vaadin-grid>`
that provides default renderers and functionality for item selection.

#### Example:
```html
<vaadin-grid>
 <vaadin-grid-selection-column frozen auto-select></vaadin-grid-selection-column>

 <vaadin-grid-column>
   ...
```

By default the selection column displays `<vaadin-checkbox>` elements in the
column cells. The checkboxes in the body rows toggle selection of the corresponding row items.

When the grid data is provided as an array of [`items`](#/elements/vaadin-grid#property-items),
the column header gets an additional checkbox that can be used for toggling
selection for all the items at once.

__The default content can also be overridden__
