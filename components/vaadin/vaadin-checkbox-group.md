---
tagName: vaadin-checkbox-group
added: 2026-10-08
description: "`<vaadin-checkbox-group>` is a web component that allows the user to choose several items from a group of binary choices."
category: Forms
builtWith: Lit
jsSize: 13215
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/checkbox-group"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/components
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, disabled, error-message, helper-text, invalid, label, manual-validation, readonly, required, theme, value]
events: [invalid-changed, validated, value-changed]
---

`<vaadin-checkbox-group>` is a web component that allows the user to choose several items from a group of binary choices.

```html
<vaadin-checkbox-group label="Export data">
  <vaadin-checkbox value="0" label="Order ID"></vaadin-checkbox>
  <vaadin-checkbox value="1" label="Product name"></vaadin-checkbox>
  <vaadin-checkbox value="2" label="Customer"></vaadin-checkbox>
  <vaadin-checkbox value="3" label="Status"></vaadin-checkbox>
</vaadin-checkbox-group>
```

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|----------------
`label`              | The slotted label element wrapper
`group-field`        | The checkbox elements wrapper
`helper-text`        | The slotted helper text element wrapper
`error-message`      | The slotted error message element wrapper
`required-indicator` | The `required` state indicator element

The following state attributes are available for styling:

Attribute           | Description
--------------------|---------------------------------
`disabled`          | Set when the element is disabled
`readonly`          | Set when the element is readonly
`invalid`           | Set when the element is invalid
`focused`           | Set when the element is focused
`has-label`         | Set when the element has a label
`has-value`         | Set when the element has a value
`has-helper`        | Set when the element has helper text
`has-error-message` | Set when the element has an error message
`has-tooltip`       | Set when the element has a slotted tooltip

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
