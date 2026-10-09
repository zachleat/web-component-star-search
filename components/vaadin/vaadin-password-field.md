---
tagName: vaadin-password-field
added: 2026-10-08
description: "`<vaadin-password-field>` is an extension of `<vaadin-text-field>` component for entering passwords."
category: Forms
builtWith: Lit
jsSize: 15331
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/password-field"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/password-field
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, allowed-char-pattern, autocapitalize, autocomplete, autocorrect, autofocus, autoselect, clear-button-visible, disabled, error-message, helper-text, inputmode, invalid, label, manual-validation, maxlength, minlength, name, password-visible, pattern, placeholder, readonly, required, reveal-button-hidden, theme, title, value]
events: [change, input, invalid-changed, validated, value-changed]
---

`<vaadin-password-field>` is an extension of `<vaadin-text-field>` component for entering passwords.

```html
<vaadin-password-field label="Password"></vaadin-password-field>
```

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|----------------
`label`              | The label element
`input-field`        | The element that wraps prefix, value and suffix
`field-button`       | Set on both clear and reveal buttons
`clear-button`       | The clear button
`error-message`      | The error message element
`helper-text`        | The helper text element wrapper
`required-indicator` | The `required` state indicator element
`reveal-button`      | The eye icon which toggles the password visibility

The following state attributes are available for styling:

Attribute            | Description
---------------------|---------------------------------
`disabled`           | Set when the element is disabled
`has-value`          | Set when the element has a value
`has-label`          | Set when the element has a label
`has-helper`         | Set when the element has helper text or slot
`has-error-message`  | Set when the element has an error message
`has-tooltip`        | Set when the element has a slotted tooltip
`invalid`            | Set when the element is invalid
`input-prevented`    | Temporarily set when invalid input is prevented
`focused`            | Set when the element is focused
`focus-ring`         | Set when the element is keyboard focused
`readonly`           | Set when the element is readonly
`password-visible`   | Set when the password is visible

Note, the `input-prevented` state attribute is only supported when `allowedCharPattern` is set.

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
| `--vaadin-field-default-width`                   |
| `--vaadin-input-field-background`                |
| `--vaadin-input-field-border-color`              |
| `--vaadin-input-field-border-radius`             |
| `--vaadin-input-field-border-width`              |
| `--vaadin-input-field-bottom-end-radius`         |
| `--vaadin-input-field-bottom-start-radius`       |
| `--vaadin-input-field-button-text-color`         |
| `--vaadin-input-field-container-gap`             |
| `--vaadin-input-field-disabled-background`       |
| `--vaadin-input-field-disabled-text-color`       |
| `--vaadin-input-field-error-color`               |
| `--vaadin-input-field-error-font-size`           |
| `--vaadin-input-field-error-font-weight`         |
| `--vaadin-input-field-error-line-height`         |
| `--vaadin-input-field-gap`                       |
| `--vaadin-input-field-helper-color`              |
| `--vaadin-input-field-helper-font-size`          |
| `--vaadin-input-field-helper-font-weight`        |
| `--vaadin-input-field-helper-line-height`        |
| `--vaadin-input-field-label-color`               |
| `--vaadin-input-field-label-font-size`           |
| `--vaadin-input-field-label-font-weight`         |
| `--vaadin-input-field-label-line-height`         |
| `--vaadin-input-field-padding`                   |
| `--vaadin-input-field-placeholder-color`         |
| `--vaadin-input-field-required-indicator`        |
| `--vaadin-input-field-required-indicator-color`  |
| `--vaadin-input-field-top-end-radius`            |
| `--vaadin-input-field-top-start-radius`          |
| `--vaadin-input-field-value-color`               |
| `--vaadin-input-field-value-font-size`           |
| `--vaadin-input-field-value-font-weight`         |
| `--vaadin-input-field-value-line-height`         |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
