---
tagName: vaadin-side-nav
added: 2026-10-08
description: "`<vaadin-side-nav>` is a Web Component for navigation menus."
category: Navigation
builtWith: Lit
jsSize: 7112
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/side-nav"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/side-nav
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [collapsed, collapsible, i18n, location, no-auto-expand, theme]
events: [collapsed-changed]
---

`<vaadin-side-nav>` is a Web Component for navigation menus.

```html
<vaadin-side-nav>
  <vaadin-side-nav-item>Item 1</vaadin-side-nav-item>
  <vaadin-side-nav-item>Item 2</vaadin-side-nav-item>
  <vaadin-side-nav-item>Item 3</vaadin-side-nav-item>
  <vaadin-side-nav-item>Item 4</vaadin-side-nav-item>
</vaadin-side-nav>
```

### Customization

You can configure the component by using `slot` names.

Slot name | Description
----------|-------------
`label`   | The label (text) inside the side nav.

#### Example

```html
<vaadin-side-nav>
  <span slot="label">Main menu</span>
  <vaadin-side-nav-item>Item</vaadin-side-nav-item>
</vaadin-side-nav>
```

### Styling

The following shadow DOM parts are available for styling:

Part name       | Description
----------------|----------------
`label`         | The label element
`children`      | The element that wraps child items
`toggle-button` | The toggle button

The following state attributes are available for styling:

Attribute    | Description
-------------|-------------
`collapsed`  | Set when the element is collapsed.
`focus-ring` | Set when the label is focused using the keyboard.
`focused`    | Set when the label is focused.

The following custom CSS properties are available for styling:

Custom CSS property                       |
:-----------------------------------------|
| `--vaadin-side-nav-child-indent`        |
| `--vaadin-side-nav-items-gap`           |
| `--vaadin-side-nav-label-color`         |
| `--vaadin-side-nav-label-font-size`     |
| `--vaadin-side-nav-label-font-weight`   |
| `--vaadin-side-nav-label-line-height`   |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
