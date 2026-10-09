---
tagName: vaadin-tabs
added: 2026-10-08
description: "`<vaadin-tabs>` is a Web Component for organizing and grouping content into sections."
category: Navigation
builtWith: Lit
jsSize: 9978
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/tabs"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/tabs
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, orientation, selected, theme]
events: [items-changed, selected-changed]
---

`<vaadin-tabs>` is a Web Component for organizing and grouping content into sections.

```html
<vaadin-tabs selected="4">
  <vaadin-tab>Page 1</vaadin-tab>
  <vaadin-tab>Page 2</vaadin-tab>
  <vaadin-tab>Page 3</vaadin-tab>
  <vaadin-tab>Page 4</vaadin-tab>
</vaadin-tabs>
```

### Styling

The following shadow DOM parts are available for styling:

Part name         | Description
------------------|--------------------------------------
`back-button`     | Button for moving the scroll back
`tabs`            | The tabs container
`forward-button`  | Button for moving the scroll forward

The following state attributes are available for styling:

Attribute      | Description
---------------|--------------------------------------
`orientation`  | Tabs disposition, valid values are `horizontal` and `vertical`
`overflow`     | It's set to `start`, `end`, none or both.

The following custom CSS properties are available for styling:

Custom CSS property              |
:--------------------------------|
| `--vaadin-tabs-background`     |
| `--vaadin-tabs-border-color`   |
| `--vaadin-tabs-border-radius`  |
| `--vaadin-tabs-border-width`   |
| `--vaadin-tabs-font-size`      |
| `--vaadin-tabs-font-weight`    |
| `--vaadin-tabs-gap`            |
| `--vaadin-tabs-padding`        |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
