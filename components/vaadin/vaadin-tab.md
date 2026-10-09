---
tagName: vaadin-tab
added: 2026-10-08
description: "`<vaadin-tab>` is a Web Component providing an accessible and customizable tab."
category: Navigation
builtWith: Lit
jsSize: 6580
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/tabs"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/tabs
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, selected, theme]
---

`<vaadin-tab>` is a Web Component providing an accessible and customizable tab.

```html
<vaadin-tab>Tab 1</vaadin-tab>
```

The following state attributes are available for styling:

Attribute      | Description
---------------|---------------------------------
`disabled`     | Set when the element is disabled
`focused`      | Set when the element is focused
`focus-ring`   | Set when the element is keyboard focused
`selected`     | Set when the tab is selected
`active`       | Set when mousedown or enter/spacebar pressed
`orientation`  | Set to `horizontal` or `vertical` depending on the direction of items
`has-tooltip`  | Set when the tab has a slotted tooltip

The following custom CSS properties are available for styling:

Custom CSS property            |
:------------------------------|
| `--vaadin-tab-background`    |
| `--vaadin-tab-border-color`  |
| `--vaadin-tab-border-radius` |
| `--vaadin-tab-border-width`  |
| `--vaadin-tab-font-size`     |
| `--vaadin-tab-font-weight`   |
| `--vaadin-tab-gap`           |
| `--vaadin-tab-line-height`   |
| `--vaadin-tab-padding`       |
| `--vaadin-tab-text-color`    |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
