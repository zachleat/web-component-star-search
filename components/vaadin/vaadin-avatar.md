---
tagName: vaadin-avatar
added: 2026-10-08
description: "`<vaadin-avatar>` is a Web Component providing avatar displaying functionality."
category: Media
builtWith: Lit
jsSize: 41234
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/avatar"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/avatar
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [abbr, color-index, i18n, img, name, theme, with-tooltip]
---

`<vaadin-avatar>` is a Web Component providing avatar displaying functionality.

```html
<vaadin-avatar img="avatars/avatar-1.jpg"></vaadin-avatar>
```

### Styling

The following shadow DOM parts are available for styling:

Part name | Description
--------- | ---------------
`abbr`    | The abbreviation element
`icon`    | The icon element

The following custom CSS properties are available for styling:

Custom CSS property                |
:----------------------------------|
| `--vaadin-avatar-background`     |
| `--vaadin-avatar-border-color`   |
| `--vaadin-avatar-border-width`   |
| `--vaadin-avatar-font-size`      |
| `--vaadin-avatar-font-weight`    |
| `--vaadin-avatar-size`           |
| `--vaadin-avatar-text-color`     |

The following state attributes are available for styling:

Attribute         | Description
------------------|-------------
`focus-ring`      | Set when the avatar is focused using the keyboard.
`focused`         | Set when the avatar is focused.
`has-color-index` | Set when the avatar has `colorIndex` and the corresponding custom CSS property exists.
`has-tooltip`     | Set when the element has a slotted tooltip.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
