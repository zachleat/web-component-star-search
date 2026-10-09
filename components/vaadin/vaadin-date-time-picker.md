---
tagName: vaadin-date-time-picker
added: 2026-10-08
description: "`<vaadin-date-time-picker>` is a Web Component providing a date time selection field."
category: Data
builtWith: Lit
jsSize: 52147
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/date-time-picker"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/date-time-picker
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, auto-open-disabled, autofocus, date-metadata-provider, date-placeholder, default-time, disabled, error-message, helper-text, i18n, initial-position, invalid, label, manual-validation, max, min, name, readonly, required, show-week-numbers, step, theme, time-placeholder, value]
events: [change, invalid-changed, unparsable-change, validated, value-changed]
---

`<vaadin-date-time-picker>` is a Web Component providing a date time selection field.

```html
<vaadin-date-time-picker value="2019-09-16T15:00"></vaadin-date-time-picker>
```

```js
dateTimePicker.value = '2019-09-16T15:00';
```

When the selected `value` is changed, a `value-changed` event is triggered.

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|----------------
`label`              | The slotted label element wrapper
`input-fields`       | The date and time pickers wrapper
`helper-text`        | The slotted helper text element wrapper
`error-message`      | The slotted error message element wrapper
`required-indicator` | The `required` state indicator element

The following state attributes are available for styling:

Attribute           | Description
--------------------|---------------------------------
`disabled`          | Set when the element is disabled
`focused`           | Set when the element is focused
`focus-ring`        | Set when the element is keyboard focused
`readonly`          | Set when the element is readonly
`invalid`           | Set when the element is invalid
`has-label`         | Set when the element has a label
`has-value`         | Set when the element has a value
`has-helper`        | Set when the element has helper text
`has-error-message` | Set when the element has an error message
`has-tooltip`       | Set when the element has a slotted tooltip

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
| `--vaadin-date-time-picker-gap`                  |
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

### Internal components

The following components are created by `<vaadin-date-time-picker>` and placed in light DOM:

- [`<vaadin-date-picker>`](#/elements/vaadin-date-picker).
- [`<vaadin-time-picker>`](#/elements/vaadin-time-picker).

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.

### Change events

Depending on the nature of the value change that the user attempts to commit e.g. by pressing Enter,
the component can fire either a `change` event or an `unparsable-change` event:

Value change             | Event
:------------------------|:------------------
empty => parsable        | change
empty => unparsable      | unparsable-change
parsable => empty        | change
parsable => parsable     | change
parsable => unparsable   | change
unparsable => empty      | unparsable-change
unparsable => parsable   | change
unparsable => unparsable | unparsable-change
incomplete => empty      | unparsable-change
incomplete => parsable   | change
incomplete => unparsable | unparsable-change
empty => incomplete      | unparsable-change
parsable => incomplete   | change
unparsable => incomplete | unparsable-change
