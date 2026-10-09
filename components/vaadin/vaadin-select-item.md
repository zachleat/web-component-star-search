---
tagName: vaadin-select-item
added: 2026-10-08
description: "`<vaadin-select-item>` is a Web Component for creating `<vaadin-select>` items."
category: Forms
builtWith: Lit
jsSize: 4834
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/select"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/select
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, selected, theme]
---

`<vaadin-select-item>` is a Web Component for creating `<vaadin-select>` items.

### Styling

The following shadow DOM parts are available for styling:

Part name    | Description
-------------|----------------
`checkmark`  | The graphical checkmark shown for a selected item
`content`    | The element that wraps the slot

The following state attributes are available for styling:

Attribute    | Description
-------------|-------------
`active`     | Set when the item is pressed down, either with mouse, touch or the keyboard.
`disabled`   | Set when the item is disabled.
`focus-ring` | Set when the item is focused using the keyboard.
`focused`    | Set when the item is focused.
`selected`   | Set when the item is selected

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
