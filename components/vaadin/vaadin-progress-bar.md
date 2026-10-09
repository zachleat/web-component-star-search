---
tagName: vaadin-progress-bar
added: 2026-10-08
description: "`<vaadin-progress-bar>` is a Web Component for progress bars."
category: Feedback
builtWith: Lit
jsSize: 1491
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/progress-bar"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/progress-bar
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [indeterminate, max, min, theme, value]
---

`<vaadin-progress-bar>` is a Web Component for progress bars.

```html
<vaadin-progress-bar min="0" max="1" value="0.5">
</vaadin-progress-bar>
```

### Styling

The following shadow DOM parts are available for styling:

Part name  | Description
-----------|----------------
`bar`      | Progress-bar's background
`value`    | Progress-bar's foreground

The following custom CSS properties are available for styling:

Custom CSS property                          |
:--------------------------------------------|
| `--vaadin-progress-bar-animation-duration` |
| `--vaadin-progress-bar-background`         |
| `--vaadin-progress-bar-border-color`       |
| `--vaadin-progress-bar-border-radius`      |
| `--vaadin-progress-bar-border-width`       |
| `--vaadin-progress-bar-height`             |
| `--vaadin-progress-bar-padding`            |
| `--vaadin-progress-bar-value-background`   |
| `--vaadin-progress-value`                  |

The following state attributes are available for styling:

Attribute       | Description
----------------|-------------------------------------
`indeterminate` | Set to an indeterminate progress bar

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
