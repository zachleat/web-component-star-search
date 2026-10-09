---
tagName: vaadin-select-list-box
added: 2026-10-08
description: "`<vaadin-select-list-box>` is a Web Component for wrapping `<vaadin-select>` items."
category: Forms
builtWith: Lit
jsSize: 3525
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/select"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/select
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, orientation, selected, theme]
---

`<vaadin-select-list-box>` is a Web Component for wrapping `<vaadin-select>` items.

```html
<vaadin-select>
  <vaadin-select-list-box slot="overlay">
    <vaadin-select-item value="foo">Foo</vaadin-select-item>
    <vaadin-select-item value="bar">Bar</vaadin-select-item>
  </vaadin-select-list-box>
</vaadin-select>
```

### Styling

The following shadow DOM parts are available for styling:

Part name         | Description
------------------|------------------------
`items`           | The items container

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
