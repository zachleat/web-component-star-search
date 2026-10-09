---
tagName: md-item
added: 2026-09-27
stars: 11283
description: An item layout component that can be used inside list items to give them their customizable structure.
category: Layout
builtWith: Lit
jsSize: 1207
library:
  name: Material Web
  url: https://material-web.dev/
package: "@material/web"
repository: https://github.com/material-components/material-web
documentation: "https://github.com/material-components/material-web#readme"
license: Apache-2.0
author: Google
authorUrl: https://material-web.dev/
---

An item layout component that can be used inside list items to give them
their customizable structure.

`<md-item>` does not have any functionality, which must be added by the
component using it.

All text will wrap unless `white-space: nowrap` is set on the item or any of
its children.

Slots available:
- `<default>`: The headline, or custom content.
- `headline`: The first line.
- `supporting-text`: Supporting text lines underneath the headline.
- `trailing-supporting-text`: A small text snippet at the end of the item.
- `start`: Any leading content, such as icons, avatars, or checkboxes.
- `end`: Any trailing content, such as icons and buttons.
- `container`: Background container content, intended for adding additional
    styles, such as ripples or focus rings.
