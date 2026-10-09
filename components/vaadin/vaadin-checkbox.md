---
tagName: vaadin-checkbox
added: 2026-10-08
description: "`<vaadin-checkbox>` is an input field representing a binary choice."
category: Forms
builtWith: Lit
jsSize: 12200
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/checkbox"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/checkbox
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, autofocus, checked, disabled, error-message, helper-text, indeterminate, invalid, label, manual-validation, name, readonly, required, theme, value]
events: [change, checked-changed, indeterminate-changed, invalid-changed, validated]
---

`<vaadin-checkbox>` is an input field representing a binary choice.

```html
<vaadin-checkbox label="I accept the terms and conditions"></vaadin-checkbox>
```

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|-------------
`checkbox`           | The element representing a stylable custom checkbox
`label`              | The slotted label element wrapper
`helper-text`        | The slotted helper text element wrapper
`error-message`      | The slotted error message element wrapper
`required-indicator` | The `required` state indicator element

The following state attributes are available for styling:

Attribute            | Description
---------------------|-------------
`active`             | Set when the checkbox is activated with mouse, touch or the keyboard.
`checked`            | Set when the checkbox is checked.
`disabled`           | Set when the checkbox is disabled.
`readonly`           | Set when the checkbox is readonly.
`focus-ring`         | Set when the checkbox is focused using the keyboard.
`focused`            | Set when the checkbox is focused.
`indeterminate`      | Set when the checkbox is in the indeterminate state.
`invalid`            | Set when the checkbox is invalid.
`has-label`          | Set when the checkbox has a label.
`has-helper`         | Set when the checkbox has helper text.
`has-error-message`  | Set when the checkbox has an error message.
`has-tooltip`        | Set when the checkbox has a slotted tooltip.

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
| `--vaadin-checkbox-background`                   |
| `--vaadin-checkbox-border-color`                 |
| `--vaadin-checkbox-border-radius`                |
| `--vaadin-checkbox-border-width`                 |
| `--vaadin-checkbox-gap`                          |
| `--vaadin-checkbox-label-color`                  |
| `--vaadin-checkbox-label-font-size`              |
| `--vaadin-checkbox-label-font-weight`            |
| `--vaadin-checkbox-label-line-height`            |
| `--vaadin-checkbox-marker-color`                 |
| `--vaadin-checkbox-marker-size`                  |
| `--vaadin-checkbox-size`                         |
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

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
