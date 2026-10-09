---
tagName: vaadin-multi-select-combo-box
added: 2026-10-08
description: "`<vaadin-multi-select-combo-box>` is a web component that wraps `<vaadin-combo-box>` and extends its functionality to allow selecting multiple items, in addition to basic features."
category: Forms
builtWith: Lit
jsSize: 35781
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/multi-select-combo-box"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/multi-select-combo-box
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, allow-custom-value, allowed-char-pattern, auto-expand-horizontally, auto-expand-vertically, auto-open-disabled, autofocus, autoselect, clear-button-visible, collapse-chips, data-provider, disabled, error-message, filter, helper-text, i18n, invalid, item-id-path, item-label-path, item-value-path, keep-filter, label, loading, manual-validation, name, opened, page-size, partial-match-mode, placeholder, readonly, renderer, required, selected-items, selected-items-on-top, size, theme, title]
events: [change, custom-value-set, filter-changed, invalid-changed, opened-changed, selected-items-changed, validated]
---

`<vaadin-multi-select-combo-box>` is a web component that wraps `<vaadin-combo-box>` and extends
its functionality to allow selecting multiple items, in addition to basic features.

```html
<vaadin-multi-select-combo-box id="comboBox"></vaadin-multi-select-combo-box>
```

```js
const comboBox = document.querySelector('#comboBox');
comboBox.items = ['apple', 'banana', 'lemon', 'orange'];
comboBox.selectedItems = ['lemon', 'orange'];
```

### Styling

The following shadow DOM parts are available for styling:

Part name              | Description
-----------------------|----------------
`chips`                | The element that wraps slotted chips for selected items
`label`                | The label element
`input-field`          | The element that wraps prefix, value and suffix
`field-button`         | Set on both clear and toggle buttons
`clear-button`         | The clear button
`error-message`        | The error message element
`helper-text`          | The helper text element wrapper
`required-indicator`   | The `required` state indicator element
`toggle-button`        | The toggle button
`overlay`              | The overlay container
`content`              | The overlay content
`loader`               | The loading indicator shown while loading items

The following state attributes are available for styling:

Attribute              | Description
-----------------------|-----------------
`disabled`             | Set to a disabled element
`has-value`            | Set when the element has a value
`has-label`            | Set when the element has a label
`has-helper`           | Set when the element has helper text or slot
`has-error-message`    | Set when the element has an error message
`has-tooltip`          | Set when the element has a slotted tooltip
`invalid`              | Set when the element is invalid
`focused`              | Set when the element is focused
`focus-ring`           | Set when the element is keyboard focused
`loading`              | Set when loading items from the data provider
`opened`               | Set when the dropdown is open
`readonly`             | Set to a readonly element

The following custom CSS properties are available for styling:

Custom CSS property                                     |
:-------------------------------------------------------|
| `--vaadin-chip-background`                            |
| `--vaadin-chip-border-color`                          |
| `--vaadin-chip-border-radius`                         |
| `--vaadin-chip-border-width`                          |
| `--vaadin-chip-font-size`                             |
| `--vaadin-chip-font-weight`                           |
| `--vaadin-chip-gap`                                   |
| `--vaadin-chip-height`                                |
| `--vaadin-chip-padding`                               |
| `--vaadin-chip-remove-button-text-color`              |
| `--vaadin-chip-text-color`                            |
| `--vaadin-field-default-width`                        |
| `--vaadin-input-field-background`                     |
| `--vaadin-input-field-border-color`                   |
| `--vaadin-input-field-border-radius`                  |
| `--vaadin-input-field-border-width`                   |
| `--vaadin-input-field-bottom-end-radius`              |
| `--vaadin-input-field-bottom-start-radius`            |
| `--vaadin-input-field-button-text-color`              |
| `--vaadin-input-field-container-gap`                  |
| `--vaadin-input-field-disabled-background`            |
| `--vaadin-input-field-disabled-text-color`            |
| `--vaadin-input-field-error-color`                    |
| `--vaadin-input-field-error-font-size`                |
| `--vaadin-input-field-error-font-weight`              |
| `--vaadin-input-field-error-line-height`              |
| `--vaadin-input-field-gap`                            |
| `--vaadin-input-field-helper-color`                   |
| `--vaadin-input-field-helper-font-size`               |
| `--vaadin-input-field-helper-font-weight`             |
| `--vaadin-input-field-helper-line-height`             |
| `--vaadin-input-field-label-color`                    |
| `--vaadin-input-field-label-font-size`                |
| `--vaadin-input-field-label-font-weight`              |
| `--vaadin-input-field-label-line-height`              |
| `--vaadin-input-field-padding`                        |
| `--vaadin-input-field-placeholder-color`              |
| `--vaadin-input-field-required-indicator`             |
| `--vaadin-input-field-required-indicator-color`       |
| `--vaadin-input-field-top-end-radius`                 |
| `--vaadin-input-field-top-start-radius`               |
| `--vaadin-input-field-value-color`                    |
| `--vaadin-input-field-value-font-size`                |
| `--vaadin-input-field-value-font-weight`              |
| `--vaadin-input-field-value-line-height`              |
| `--vaadin-item-overlay-padding`                       |
| `--vaadin-multi-select-combo-box-chip-min-width`      |
| `--vaadin-multi-select-combo-box-chips-gap`           |
| `--vaadin-multi-select-combo-box-input-min-width`     |
| `--vaadin-multi-select-combo-box-overlay-max-height`  |
| `--vaadin-multi-select-combo-box-overlay-width`       |

### Internal components

In addition to `<vaadin-multi-select-combo-box>` itself, the following internal
components are themable:

- `<vaadin-multi-select-combo-box-chip>`
- `<vaadin-multi-select-combo-box-item>` - has the same API as `<vaadin-item>`.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
