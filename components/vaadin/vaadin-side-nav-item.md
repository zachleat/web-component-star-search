---
tagName: vaadin-side-nav-item
added: 2026-10-08
description: "A navigation item to be used within `<vaadin-side-nav>`. Represents a navigation target. Not intended to be used separately."
category: Navigation
builtWith: Lit
jsSize: 5763
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/side-nav"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/side-nav
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [current, disabled, expanded, i18n, match-nested, path, router-ignore, target, theme]
events: [expanded-changed]
---

A navigation item to be used within `<vaadin-side-nav>`. Represents a navigation target.
Not intended to be used separately.

```html
<vaadin-side-nav-item>
  Item 1
  <vaadin-side-nav-item path="/path1" slot="children">
    Child item 1
  </vaadin-side-nav-item>
  <vaadin-side-nav-item path="/path2" slot="children">
    Child item 2
  </vaadin-side-nav-item>
</vaadin-side-nav-item>
```

### Customization

You can configure the item by using `slot` names.

Slot name | Description
----------|-------------
`prefix`  | A slot for content before the label (e.g. an icon).
`suffix`  | A slot for content after the label (e.g. an icon).

#### Example

```html
<vaadin-side-nav-item>
  <vaadin-icon icon="vaadin:chart" slot="prefix"></vaadin-icon>
  Item
  <vaadin-badge slot="suffix">Suffix</vaadin-badge>
</vaadin-side-nav-item>
```

### Styling

The following shadow DOM parts are available for styling:

Part name       | Description
----------------|----------------
`content`       | The element that wraps link and toggle button
`children`      | The element that wraps child items
`link`          | The clickable anchor used for navigation
`toggle-button` | The toggle button

The following state attributes are available for styling:

Attribute      | Description
---------------|-------------
`disabled`     | Set when the element is disabled.
`expanded`     | Set when the element is expanded.
`has-children` | Set when the element has child items.
`has-tooltip`  | Set when the element has a slotted tooltip.

The following custom CSS properties are available for styling:

Custom CSS property                       |
:-----------------------------------------|
| `--vaadin-side-nav-item-background`     |
| `--vaadin-side-nav-item-border-color`   |
| `--vaadin-side-nav-item-border-radius`  |
| `--vaadin-side-nav-item-border-width`   |
| `--vaadin-side-nav-item-font-size`      |
| `--vaadin-side-nav-item-font-weight`    |
| `--vaadin-side-nav-item-gap`            |
| `--vaadin-side-nav-item-line-height`    |
| `--vaadin-side-nav-item-padding`        |
| `--vaadin-side-nav-item-text-color`     |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
