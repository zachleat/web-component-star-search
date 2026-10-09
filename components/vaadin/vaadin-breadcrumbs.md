---
tagName: vaadin-breadcrumbs
added: 2026-10-08
description: "`<vaadin-breadcrumbs>` is a Web Component that displays the user's location within a hierarchy as a trail of links from the root to the current page."
category: Navigation
builtWith: Lit
jsSize: 12612
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/breadcrumbs"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/breadcrumbs
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [i18n, theme]
---

`<vaadin-breadcrumbs>` is a Web Component that displays the user's location
within a hierarchy as a trail of links from the root to the current page.

```html
<vaadin-breadcrumbs>
  <vaadin-breadcrumbs-item path="/">Home</vaadin-breadcrumbs-item>
  <vaadin-breadcrumbs-item path="/docs">Docs</vaadin-breadcrumbs-item>
  <vaadin-breadcrumbs-item>Current page</vaadin-breadcrumbs-item>
</vaadin-breadcrumbs>
```

### Styling

The following shadow DOM parts are available for styling:

Part name          | Description
-------------------|------------
`list`             | The element with `role="list"` wrapping all items.
`overflow`         | The element wrapping the overflow button.
`overflow-button`  | The button that reveals collapsed items.
`overlay`          | The outer panel of the overflow overlay.
`overlay-content`  | The inner wrapper of the overflow overlay.

The following state attributes are available for styling:

Attribute      | Description
---------------|------------
`has-overflow` | Set when one or more items are collapsed into the overflow overlay.

The following custom CSS properties are available for styling:

Custom CSS property                          |
:--------------------------------------------|
| `--vaadin-breadcrumbs-font-size`           |
| `--vaadin-breadcrumbs-font-weight`         |
| `--vaadin-breadcrumbs-gap`                 |
| `--vaadin-breadcrumbs-line-height`         |
| `--vaadin-breadcrumbs-link-color`          |
| `--vaadin-breadcrumbs-overflow-icon`       |
| `--vaadin-breadcrumbs-separator-icon`      |
| `--vaadin-breadcrumbs-text-color`          |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
