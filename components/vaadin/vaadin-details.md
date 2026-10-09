---
tagName: vaadin-details
added: 2026-10-08
description: "`<vaadin-details>` is a Web Component which the creates an expandable panel similar to `<details>` HTML element."
category: Layout
builtWith: Lit
jsSize: 8750
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/details"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/details
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [autofocus, disabled, opened, summary, theme]
events: [opened-changed]
---

`<vaadin-details>` is a Web Component which the creates an
expandable panel similar to `<details>` HTML element.

```html
<vaadin-details>
  <vaadin-details-summary slot="summary">Expandable Details</vaadin-details-summary>
  <div>
    Toggle using mouse, Enter and Space keys.
  </div>
</vaadin-details>
```

### Styling

The following shadow DOM parts are exposed for styling:

Part name        | Description
-----------------|----------------
`content`        | The wrapper for the collapsible details content.

The following state attributes are available for styling:

Attribute      | Description
---------------|------------
`opened`       | Set when the collapsible content is expanded and visible
`disabled`     | Set when the element is disabled
`focus-ring`   | Set when the element is focused using the keyboard
`focused`      | Set when the element is focused
`has-tooltip`  | Set when the element has a slotted tooltip

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
