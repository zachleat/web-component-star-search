---
tagName: vaadin-drawer-toggle
added: 2026-10-08
description: The Drawer Toggle component controls the drawer in App Layout component.
category: Overlays
builtWith: Lit
jsSize: 5540
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/app-layout"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/app-layout
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [aria-label, disabled, theme]
---

The Drawer Toggle component controls the drawer in App Layout component.

```html
<vaadin-app-layout>
  <vaadin-drawer-toggle slot="navbar">Toggle drawer</vaadin-drawer-toggle>
</vaadin-app-layout>
```

### Styling

The following shadow DOM parts are available for styling:

Part name    | Description
-------------|------------
`icon`       | The icon element

The following state attributes are available for styling:

Attribute    | Description
-------------|------------
`focus-ring` | Set when the element is focused using the keyboard
`focused`    | Set when the element is focused

The following custom CSS properties are available for styling:

Custom CSS property                |
:----------------------------------|
| `--vaadin-button-background`     |
| `--vaadin-button-border-color`   |
| `--vaadin-button-border-radius`  |
| `--vaadin-button-border-width`   |
| `--vaadin-button-font-size`      |
| `--vaadin-button-line-height`    |
| `--vaadin-button-margin`         |
| `--vaadin-button-padding`        |
| `--vaadin-button-text-color`     |
| `--vaadin-icon-size`             |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
