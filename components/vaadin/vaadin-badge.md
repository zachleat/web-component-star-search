---
tagName: vaadin-badge
added: 2026-10-08
description: "`<vaadin-badge>` is a Web Component for displaying badges."
category: Feedback
builtWith: Lit
jsSize: 2854
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/badge"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/badge
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [number, theme]
---

`<vaadin-badge>` is a Web Component for displaying badges.

```html
<vaadin-badge>New</vaadin-badge>
```

### Slots

Name     | Description
---------|-------------
(none)   | Default slot for the badge text content
`icon`   | Slot for an icon to place before the text

### Styling

The following shadow DOM parts are available for styling:

Part name  | Description
-----------|-------------
`icon`     | The container for the icon slot
`number`   | The container for the number value
`content`  | The container for the default slot

The following state attributes are available for styling:

Attribute      | Description
---------------|-------------
`has-icon`     | Set when the badge has content in the icon slot
`has-content`  | Set when the badge has content in the default slot
`has-number`   | Set when the badge has a number value

The following custom CSS properties are available for styling:

Custom CSS property              |
:--------------------------------|
`--vaadin-badge-background`      |
`--vaadin-badge-border-color`    |
`--vaadin-badge-border-radius`   |
`--vaadin-badge-border-width`    |
`--vaadin-badge-font-size`       |
`--vaadin-badge-font-weight`     |
`--vaadin-badge-font-family`     |
`--vaadin-badge-gap`             |
`--vaadin-badge-line-height`     |
`--vaadin-badge-padding`         |
`--vaadin-badge-text-color`      |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
