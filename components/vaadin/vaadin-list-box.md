---
tagName: vaadin-list-box
added: 2026-10-08
description: "`<vaadin-list-box>` is a Web Component for creating menus."
category: Data
builtWith: Lit
jsSize: 4953
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/list-box"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/list-box
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, multiple, orientation, selected, selected-values, theme]
events: [items-changed, selected-changed, selected-values-changed]
---

`<vaadin-list-box>` is a Web Component for creating menus.

```html
<vaadin-list-box selected="2">
  <vaadin-item>Item 1</vaadin-item>
  <vaadin-item>Item 2</vaadin-item>
  <vaadin-item>Item 3</vaadin-item>
  <vaadin-item>Item 4</vaadin-item>
</vaadin-list-box>
```

### Styling

The following shadow DOM parts are available for styling:

Part name         | Description
------------------|------------------------
`items`           | The items container

The following state attributes are available for styling:

Attribute      | Description
---------------|---------------------------------
`has-tooltip`  | Set when the element has a slotted tooltip

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
