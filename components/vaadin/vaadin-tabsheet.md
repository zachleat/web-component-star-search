---
tagName: vaadin-tabsheet
added: 2026-10-08
description: "`<vaadin-tabsheet>` is a Web Component for organizing and grouping content into scrollable panels. The panels can be switched between by using tabs."
category: Content
builtWith: Lit
jsSize: 12753
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/tabsheet"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/components
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [selected, theme]
events: [items-changed, selected-changed]
---

`<vaadin-tabsheet>` is a Web Component for organizing and grouping content
into scrollable panels. The panels can be switched between by using tabs.

```html
<vaadin-tabsheet>
  <div slot="prefix">Prefix</div>
  <div slot="suffix">Suffix</div>

  <vaadin-tabs slot="tabs">
    <vaadin-tab id="tab-1">Tab 1</vaadin-tab>
    <vaadin-tab id="tab-2">Tab 2</vaadin-tab>
    <vaadin-tab id="tab-3">Tab 3</vaadin-tab>
  </vaadin-tabs>

  <div tab="tab-1">Panel 1</div>
  <div tab="tab-2">Panel 2</div>
  <div tab="tab-3">Panel 3</div>
</vaadin-tabsheet>
```

### Styling

The following shadow DOM parts are exposed for styling:

Part name | Description
--------- | ---------------
`tabs-container`    | The container for the slotted prefix, tabs and suffix
`content`    | The container for the slotted panels

The following state attributes are available for styling:

Attribute         | Description
------------------|-------------
`loading` | Set when a tab without associated content is selected
`overflow`   | Set to `top`, `bottom`, `start`, `end`, all of them, or none.

The following custom CSS properties are available for styling:

Custom CSS property                  |
:------------------------------------|
| `--vaadin-tabsheet-border-color`   |
| `--vaadin-tabsheet-border-radius`  |
| `--vaadin-tabsheet-border-width`   |
| `--vaadin-tabsheet-gap`            |
| `--vaadin-tabsheet-padding`        |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
