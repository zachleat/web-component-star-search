---
tagName: vaadin-details-summary
added: 2026-10-08
description: The details summary element.
category: Layout
builtWith: Lit
jsSize: 5251
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/details"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/details
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, opened, theme]
---

The details summary element.

### Styling

The following shadow DOM parts are exposed for styling:

Part name  | Description
-----------|-------------------
`toggle`   | The icon element
`content`  | The content wrapper

The following state attributes are available for styling:

Attribute    | Description
-------------| -----------
`active`     | Set when the element is pressed down, either with mouse, touch or the keyboard.
`opened`     | Set when the element is expanded and related collapsible content is visible.
`disabled`   | Set when the element is disabled.
`focus-ring` | Set when the element is focused using the keyboard.
`focused`    | Set when the element is focused.

The following custom CSS properties are available for styling:

Custom CSS property                        |
:------------------------------------------|
| `--vaadin-details-summary-background`    |
| `--vaadin-details-summary-border-color`  |
| `--vaadin-details-summary-border-radius` |
| `--vaadin-details-summary-border-width`  |
| `--vaadin-details-summary-font-size`     |
| `--vaadin-details-summary-font-weight`   |
| `--vaadin-details-summary-gap`           |
| `--vaadin-details-summary-height`        |
| `--vaadin-details-summary-padding`       |
| `--vaadin-details-summary-text-color`    |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
