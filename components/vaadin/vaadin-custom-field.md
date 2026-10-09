---
tagName: vaadin-custom-field
added: 2026-10-08
description: "`<vaadin-custom-field>` is a web component for wrapping multiple components as a single field."
category: Forms
builtWith: Lit
jsSize: 6688
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/custom-field"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/custom-field
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, error-message, format-value, helper-text, invalid, label, manual-validation, name, parse-value, required, theme, value]
events: [change, invalid-changed, validated, value-changed]
---

`<vaadin-custom-field>` is a web component for wrapping multiple components as a single field.

```html
<vaadin-custom-field label="Appointment time">
  <vaadin-date-picker></vaadin-date-picker>
  <vaadin-time-picker></vaadin-time-picker>
</vaadin-custom-field>
```

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|----------------
`label`              | The slotted label element wrapper
`helper-text`        | The slotted helper text element wrapper
`error-message`      | The slotted error message element wrapper
`required-indicator` | The `required` state indicator element
`input-fields`       | The slotted input elements wrapper

The following state attributes are available for styling:

Attribute           | Description
--------------------|--------------------------------
`invalid`           | Set when the element is invalid
`focused`           | Set when the element is focused
`has-label`         | Set when the element has a label
`has-value`         | Set when the element has a value
`has-helper`        | Set when the element has helper text
`has-error-message` | Set when the element has an error message
`has-tooltip`       | Set when the element has a slotted tooltip

You may also manually set `disabled` or `readonly` attribute on this component to make the label
part look visually the same as on a `<vaadin-text-field>` when it is disabled or readonly.

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
| `--vaadin-input-field-error-color`               |
| `--vaadin-input-field-error-font-size`           |
| `--vaadin-input-field-error-font-weight`         |
| `--vaadin-input-field-error-line-height`         |
| `--vaadin-input-field-label-color`               |
| `--vaadin-input-field-label-font-size`           |
| `--vaadin-input-field-label-font-weight`         |
| `--vaadin-input-field-label-line-height`         |
| `--vaadin-input-field-helper-color`              |
| `--vaadin-input-field-helper-font-size`          |
| `--vaadin-input-field-helper-font-weight`        |
| `--vaadin-input-field-helper-line-height`        |
| `--vaadin-input-field-required-indicator-color`  |
| `--vaadin-input-field-required-indicator`        |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
