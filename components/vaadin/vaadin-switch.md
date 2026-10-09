---
tagName: vaadin-switch
added: 2026-10-08
description: "`<vaadin-switch>` is a binary on/off switch control for a single setting."
category: Forms
builtWith: Lit
jsSize: 12933
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/switch"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/switch
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, autofocus, checked, disabled, error-message, helper-text, invalid, label, manual-validation, name, readonly, required, theme, value]
events: [change, checked-changed, invalid-changed, validated]
---

`<vaadin-switch>` is a binary on/off switch control for a single setting.

```html
<vaadin-switch label="Notifications"></vaadin-switch>
```

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|-------------
`switch`             | The track element that holds the marker.
`marker`             | The marker element inside the track.
`label`              | The slotted label element wrapper.
`helper-text`        | The slotted helper text element wrapper.
`error-message`      | The slotted error message element wrapper.
`required-indicator` | The `required` state indicator element.

The following state attributes are available for styling:

Attribute            | Description
---------------------|-------------
`active`             | Set when the switch is activated with mouse, touch or the keyboard.
`checked`            | Set when the switch is checked.
`disabled`           | Set when the switch is disabled.
`readonly`           | Set when the switch is readonly.
`focus-ring`         | Set when the switch is focused using the keyboard.
`focused`            | Set when the switch is focused.
`required`           | Set when the switch is required.
`invalid`            | Set when the switch is invalid.
`has-label`          | Set when the switch has a label.
`has-helper`         | Set when the switch has helper text.
`has-error-message`  | Set when the switch has an error message.
`has-tooltip`        | Set when the switch has a slotted tooltip.

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
| `--vaadin-input-field-error-color`               |
| `--vaadin-input-field-error-font-size`           |
| `--vaadin-input-field-error-font-weight`         |
| `--vaadin-input-field-error-line-height`         |
| `--vaadin-input-field-helper-color`              |
| `--vaadin-input-field-helper-font-size`          |
| `--vaadin-input-field-helper-font-weight`        |
| `--vaadin-input-field-helper-line-height`        |
| `--vaadin-input-field-required-indicator`        |
| `--vaadin-input-field-required-indicator-color`  |
| `--vaadin-switch-background`                     |
| `--vaadin-switch-border-color`                   |
| `--vaadin-switch-border-radius`                  |
| `--vaadin-switch-border-width`                   |
| `--vaadin-switch-gap`                            |
| `--vaadin-switch-height`                         |
| `--vaadin-switch-width`                          |
| `--vaadin-switch-icon-color`                     |
| `--vaadin-switch-icon-size`                      |
| `--vaadin-switch-label-color`                    |
| `--vaadin-switch-label-font-size`                |
| `--vaadin-switch-label-font-weight`              |
| `--vaadin-switch-label-line-height`              |
| `--vaadin-switch-marker-border-color`            |
| `--vaadin-switch-marker-border-radius`           |
| `--vaadin-switch-marker-border-width`            |
| `--vaadin-switch-marker-color`                   |
| `--vaadin-switch-marker-height`                  |
| `--vaadin-switch-marker-scale`                   |
| `--vaadin-switch-marker-width`                   |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
