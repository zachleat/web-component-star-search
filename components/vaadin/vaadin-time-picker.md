---
tagName: vaadin-time-picker
added: 2026-10-08
description: "`<vaadin-time-picker>` is a Web Component providing a time-selection field."
category: Data
builtWith: Lit
jsSize: 29911
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/time-picker"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/time-picker
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, allowed-char-pattern, auto-open-disabled, autofocus, autoselect, clear-button-visible, disabled, error-message, helper-text, i18n, invalid, label, manual-validation, max, min, name, opened, pattern, placeholder, readonly, required, step, theme, title, value]
events: [change, invalid-changed, opened-changed, unparsable-change, validated, value-changed]
---

`<vaadin-time-picker>` is a Web Component providing a time-selection field.

```html
<vaadin-time-picker></vaadin-time-picker>
```
```js
timePicker.value = '14:30';
```

When the selected `value` is changed, a `value-changed` event is triggered.

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|----------------
`label`              | The label element
`input-field`        | The element that wraps prefix, value and buttons
`field-button`       | Set on both clear and toggle buttons
`clear-button`       | The clear button
`error-message`      | The error message element
`helper-text`        | The helper text element wrapper
`required-indicator` | The `required` state indicator element
`toggle-button`      | The toggle button
`overlay`            | The overlay container
`content`            | The overlay content

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
`focused`            | Set when the element is focused
`focus-ring`         | Set when the element is keyboard focused
`readonly`           | Set when the element is readonly
`opened`             | Set when the overlay is opened

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
| `--vaadin-item-overlay-padding`                  |
| `--vaadin-time-picker-overlay-max-height`        |
| `--vaadin-time-picker-overlay-width`             |

### Internal components

In addition to `<vaadin-time-picker>` itself, the following internal
components are themable:

- `<vaadin-time-picker-item>` - has the same API as [`<vaadin-item>`](#/elements/vaadin-item).

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
