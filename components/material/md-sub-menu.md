---
tagName: md-sub-menu
added: 2026-09-27
stars: 11283
description: Menus display a list of choices on a temporary surface.
category: Navigation
builtWith: Lit
jsSize: 10163
library:
  name: Material Web
  url: https://material-web.dev/
package: "@material/web"
repository: https://github.com/material-components/material-web
documentation: https://material-web.dev/components/menu/
license: Apache-2.0
author: Google
authorUrl: https://material-web.dev/
---

Menu items are the selectable choices within the menu. Menu items must
implement the `Menu` interface and also have the `md-menu`
attribute. Additionally menu items are list items so they must also have the
`md-list-item` attribute.

Menu items can control a menu by selectively firing the `close-menu` and
`deselect-items` events.

This menu item will open a sub-menu that is slotted in the `submenu` slot.
Additionally, the containing menu must either have `has-overflow` or
`positioning=fixed` set to `true` in order to display the containing menu
properly.
