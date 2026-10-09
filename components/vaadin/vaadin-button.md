---
tagName: vaadin-button
added: 2026-10-08
description: "`<vaadin-button>` is an accessible and customizable button that allows users to perform actions."
category: Actions
builtWith: Lit
jsSize: 6957
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/button"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/button
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, theme]
---

`<vaadin-button>` is an accessible and customizable button that allows users to perform actions.

```html
<vaadin-button>Press me</vaadin-button>
```

### Styling

The following shadow DOM parts are available for styling:

Part name | Description
----------|-------------
`label`   | The label (text) inside the button.
`prefix`  | A slot for content before the label (e.g. an icon).
`suffix`  | A slot for content after the label (e.g. an icon).

The following state attributes are available for styling:

Attribute      | Description
---------------|-------------
`active`       | Set when the button is pressed down, either with mouse, touch or the keyboard
`disabled`     | Set when the button is disabled
`focus-ring`   | Set when the button is focused using the keyboard
`focused`      | Set when the button is focused
`has-tooltip`  | Set when the button has a slotted tooltip

The following custom CSS properties are available for styling:

Custom CSS property                |
:----------------------------------|
| `--vaadin-button-background`     |
| `--vaadin-button-border-color`   |
| `--vaadin-button-border-radius`  |
| `--vaadin-button-border-width`   |
| `--vaadin-button-font-family`    |
| `--vaadin-button-font-size`      |
| `--vaadin-button-font-weight`    |
| `--vaadin-button-gap`            |
| `--vaadin-button-height`         |
| `--vaadin-button-label-wrap`     |
| `--vaadin-button-line-height`    |
| `--vaadin-button-margin`         |
| `--vaadin-button-padding`        |
| `--vaadin-button-text-color`     |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
