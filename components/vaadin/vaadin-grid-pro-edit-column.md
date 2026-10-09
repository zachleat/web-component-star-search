---
tagName: vaadin-grid-pro-edit-column
added: 2026-10-08
description: "`<vaadin-grid-pro-edit-column>` is a helper element for the `<vaadin-grid-pro>` that provides default inline editing for the items."
category: Layout
builtWith: Lit
jsSize: 32077
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid-pro"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid-pro
license: Vaadin Commercial License
commercial: true
authorUrl: https://vaadin.com/
attributes: [auto-width, edit-mode-renderer, editor-type, editor-value-path, flex-grow, footer-part-name, footer-renderer, frozen, frozen-to-end, header, header-part-name, header-renderer, hidden, is-cell-editable, path, renderer, resizable, row-header, text-align, width]
---

`<vaadin-grid-pro-edit-column>` is a helper element for the `<vaadin-grid-pro>`
that provides default inline editing for the items.

__Note that the `path` property must be explicitly specified for edit column.__

#### Example:
```html
<vaadin-grid-pro>
 <vaadin-grid-pro-edit-column path="name.first"></vaadin-grid-pro-edit-column>

 <vaadin-grid-column>
   ...
```
