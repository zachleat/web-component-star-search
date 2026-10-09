---
tagName: vaadin-virtual-list
added: 2026-10-08
description: "`<vaadin-virtual-list>` is a Web Component for displaying a virtual/infinite list of items."
category: Data
builtWith: Lit
jsSize: 8060
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/virtual-list"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [item-accessible-name-generator, renderer, theme]
---

`<vaadin-virtual-list>` is a Web Component for displaying a virtual/infinite list of items.

```html
<vaadin-virtual-list></vaadin-virtual-list>
```

```js
const list = document.querySelector('vaadin-virtual-list');
list.items = items; // An array of data items
list.renderer = (root, list, {item, index}) => {
  root.textContent = `#${index}: ${item.name}`
}
```

### Styling

The following state attributes are available for styling:

Attribute        | Description
-----------------|--------------------------------------------
`overflow`       | Set to `top`, `bottom`, both, or none.

### Built-in Theme Variants

`<vaadin-virtual-list>` supports the following theme variants:

Theme variant                            | Description
-----------------------------------------|---------------
`theme="overflow-indicators"`            | Shows visual indicators at the top and bottom when the content is scrolled
`theme="overflow-indicator-top"`         | Shows the visual indicator at the top when the content is scrolled
`theme="overflow-indicator-top-bottom"`  | Shows the visual indicator at the bottom when the content is scrolled

### Custom CSS Properties

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
`--vaadin-virtual-list-overflow-indicator-color`   |
`--vaadin-virtual-list-overflow-indicator-height`  |
`--vaadin-virtual-list-padding-block`              |
`--vaadin-virtual-list-padding-inline`             |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
