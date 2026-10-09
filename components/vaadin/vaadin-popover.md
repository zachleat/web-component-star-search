---
tagName: vaadin-popover
added: 2026-10-08
description: "`<vaadin-popover>` is a Web Component for creating overlays that are positioned next to specified DOM element (target)."
category: Overlays
builtWith: Lit
jsSize: 12892
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/popover"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/popover
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-name, accessible-name-ref, autofocus, focus-delay, for, height, hide-delay, hover-delay, modal, no-close-on-esc, no-close-on-outside-click, no-tab-focus, opened, overlay-role, position, role, theme, trigger, width, with-backdrop]
events: [closed, opened-changed]
---

`<vaadin-popover>` is a Web Component for creating overlays
that are positioned next to specified DOM element (target).

Unlike `<vaadin-tooltip>`, the popover supports rich content
that can be provided by using `renderer` function.

### Styling

The following shadow DOM parts are available for styling:

Part name        | Description
-----------------|-------------------------------------------
`backdrop`       | Backdrop of the overlay
`overlay`        | The overlay container
`content`        | The overlay content
`arrow`          | Optional arrow pointing to the target when using `theme="arrow"`

The following state attributes are available for styling:

Attribute        | Description
-----------------|----------------------------------------
`position`       | Reflects the `position` property value.

The following custom CSS properties are available for styling:

Custom CSS property                      |
:----------------------------------------|
|`--vaadin-overlay-backdrop-background`  |
|`--vaadin-popover-arrow-border-radius`  |
|`--vaadin-popover-arrow-inset`          |
|`--vaadin-popover-arrow-size`           |
|`--vaadin-popover-background`           |
|`--vaadin-popover-border-color`         |
|`--vaadin-popover-border-radius`        |
|`--vaadin-popover-border-width`         |
|`--vaadin-popover-offset-bottom`        |
|`--vaadin-popover-offset-end`           |
|`--vaadin-popover-offset-start`         |
|`--vaadin-popover-offset-top`           |
|`--vaadin-popover-padding`              |
|`--vaadin-popover-text-color`           |
|`--vaadin-popover-shadow`               |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
