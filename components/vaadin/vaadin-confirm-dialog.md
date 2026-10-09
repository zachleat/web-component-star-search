---
tagName: vaadin-confirm-dialog
added: 2026-10-08
description: "`<vaadin-confirm-dialog>` is a Web Component for showing alerts and asking for user confirmation."
category: Overlays
builtWith: Lit
jsSize: 14972
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/confirm-dialog"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/confirm-dialog
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, cancel-button-visible, cancel-text, cancel-theme, confirm-text, confirm-theme, header, height, message, no-close-on-esc, opened, reject-button-visible, reject-text, reject-theme, theme, width]
events: [cancel, closed, confirm, opened-changed, reject]
---

`<vaadin-confirm-dialog>` is a Web Component for showing alerts and asking for user confirmation.

```html
<vaadin-confirm-dialog cancel-button-visible>
  There are unsaved changes. Do you really want to leave?
</vaadin-confirm-dialog>
```

### Styling

The following shadow DOM parts are available for styling:

Part name        | Description
-----------------|-------------------------------------------
`backdrop`       | Backdrop of the overlay
`overlay`        | The overlay container
`content`        | The overlay content
`header`         | The header element wrapper
`message`        | The message element wrapper
`footer`         | The footer element that wraps the buttons
`cancel-button`  | The "Cancel" button wrapper
`confirm-button` | The "Confirm" button wrapper
`reject-button`  | The "Reject" button wrapper

The following custom CSS properties are available for styling:

Custom CSS property                      |
:----------------------------------------|
|`--vaadin-confirm-dialog-max-width`     |
|`--vaadin-confirm-dialog-min-width`     |
|`--vaadin-dialog-background`            |
|`--vaadin-dialog-border-color`          |
|`--vaadin-dialog-border-radius`         |
|`--vaadin-dialog-border-width`          |
|`--vaadin-dialog-padding`               |
|`--vaadin-dialog-shadow`                |
|`--vaadin-dialog-text-color`            |
|`--vaadin-dialog-title-color`           |
|`--vaadin-dialog-title-font-size`       |
|`--vaadin-dialog-title-font-weight`     |
|`--vaadin-dialog-title-line-height`     |
|`--vaadin-overlay-backdrop-background`  |

Use `confirmTheme`, `cancelTheme` and `rejectTheme` properties to customize buttons theme.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.

### Custom content

The following slots are available for providing custom content:

Slot name         | Description
------------------|---------------------------
`header`          | Slot for header element
`cancel-button`   | Slot for "Cancel" button
`confirm-button`  | Slot for "Confirm" button
`reject-button`   | Slot for "Reject" button
