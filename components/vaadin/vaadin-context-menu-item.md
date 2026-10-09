---
tagName: vaadin-context-menu-item
added: 2026-10-08
description: "`<vaadin-context-menu-item>` is a Web Component for creating `<vaadin-context-menu>` items."
category: Navigation
builtWith: Lit
jsSize: 5061
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/context-menu"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/context-menu
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, selected, theme]
---

`<vaadin-context-menu-item>` is a Web Component for creating `<vaadin-context-menu>` items.

### Styling

The following shadow DOM parts are available for styling:

Part name    | Description
-------------|----------------
`checkmark`  | The graphical checkmark shown for a checked item
`content`    | The element that wraps the slot

The following state attributes are available for styling:

Attribute    | Description
-------------|-------------
`active`     | Set when the item is pressed down, either with mouse, touch or the keyboard.
`disabled`   | Set when the item is disabled.
`focus-ring` | Set when the item is focused using the keyboard.
`focused`    | Set when the item is focused.
`expanded`   | Set when the item has a sub-menu and it is opened.

The following custom CSS properties are available for styling:

Custom CSS property                |
:----------------------------------|
| `--vaadin-item-border-radius`    |
| `--vaadin-item-checkmark-color`  |
| `--vaadin-item-gap`              |
| `--vaadin-item-height`           |
| `--vaadin-item-padding`          |
| `--vaadin-item-text-align`       |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
