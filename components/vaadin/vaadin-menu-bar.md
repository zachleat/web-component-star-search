---
tagName: vaadin-menu-bar
added: 2026-10-08
description: "`<vaadin-menu-bar>` is a Web Component providing a set of horizontally stacked buttons offering the user quick access to a consistent set of commands."
category: Navigation
builtWith: Lit
jsSize: 26429
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/menu-bar"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/menu-bar
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, i18n, open-on-hover, reverse-collapse, tab-navigation, theme]
events: [item-selected]
---

`<vaadin-menu-bar>` is a Web Component providing a set of horizontally stacked buttons offering
the user quick access to a consistent set of commands. Each button can toggle a submenu with
support for additional levels of nested menus.

To create the menu bar, first add the component to the page:

```html
<vaadin-menu-bar></vaadin-menu-bar>
```

And then use [`items`](#/elements/vaadin-menu-bar#property-items) property to initialize the structure:

```js
document.querySelector('vaadin-menu-bar').items = [{text: 'File'}, {text: 'Edit'}];
```

### Styling

The following shadow DOM parts are exposed for styling:

Part name         | Description
------------------|----------------
`container`       | The container wrapping menu bar buttons.

The following state attributes are available for styling:

Attribute           | Description
--------------------|----------------------------------
`disabled`          | Set when the menu bar is disabled
`has-single-button` | Set when there is only one button visible

The following custom CSS properties are available for styling:

Custom CSS property         |
:---------------------------|
| `--vaadin-menu-bar-gap`   |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.

### Internal components

In addition to `<vaadin-menu-bar>` itself, the following internal
components are themable:

- `<vaadin-menu-bar-button>` - has the same API as [`<vaadin-button>`](#/elements/vaadin-button).
- `<vaadin-menu-bar-item>` - has the same API as [`<vaadin-item>`](#/elements/vaadin-item).
- `<vaadin-menu-bar-list-box>` - has the same API as [`<vaadin-list-box>`](#/elements/vaadin-list-box).
- `<vaadin-menu-bar-submenu>` - has the same API as [`<vaadin-context-menu>`](#/elements/vaadin-context-menu).

The `<vaadin-menu-bar-item>` sub-menu elements have the following additional state attributes
on top of the built-in `<vaadin-item>` state attributes:

Attribute  | Description
---------- |-------------
`expanded` | Expanded parent item.
