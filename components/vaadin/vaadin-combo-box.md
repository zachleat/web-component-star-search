---
tagName: vaadin-combo-box
added: 2026-10-08
description: "`<vaadin-combo-box>` is a web component for choosing a value from a filterable list of options presented in a dropdown overlay."
category: Data
builtWith: Lit
jsSize: 32205
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/combo-box"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/combo-box
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, allow-custom-value, allowed-char-pattern, auto-open-disabled, autofocus, autoselect, clear-button-visible, data-provider, disabled, error-message, filter, helper-text, invalid, item-id-path, item-label-path, item-value-path, label, loading, manual-validation, name, opened, page-size, partial-match-mode, pattern, placeholder, readonly, renderer, required, selected-item, size, theme, title, value]
events: [change, custom-value-set, filter-changed, invalid-changed, opened-changed, selected-item-changed, vaadin-combo-box-dropdown-closed, vaadin-combo-box-dropdown-opened, validated, value-changed]
---

`<vaadin-combo-box>` is a web component for choosing a value from a filterable list of options
presented in a dropdown overlay. The options can be provided as a list of strings or objects
by setting [`items`](#/elements/vaadin-combo-box#property-items) property on the element.

```html
<vaadin-combo-box id="combo-box"></vaadin-combo-box>
```

```js
document.querySelector('#combo-box').items = ['apple', 'orange', 'banana'];
```

When the selected `value` is changed, a `value-changed` event is triggered.

### Item rendering

To customize the content of the `<vaadin-combo-box-item>` elements placed in the dropdown, use
[`renderer`](#/elements/vaadin-combo-box#property-renderer) property which accepts a function.
The renderer function is called with `root`, `comboBox`, and `model` as arguments.

Generate DOM content by using `model` object properties if needed, and append it to the `root`
element. The `comboBox` reference is provided to access the combo-box element state. Do not
set combo-box properties in a `renderer` function.

```js
const comboBox = document.querySelector('#combo-box');
comboBox.items = [{'label': 'Hydrogen', 'value': 'H'}];
comboBox.renderer = (root, comboBox, model) => {
  const item = model.item;
  root.innerHTML = `${model.index}: ${item.label} <b>${item.value}</b>`;
};
```

Renderer is called on the opening of the combo-box and each time the related model is updated.
Before creating new content, it is recommended to check if there is already an existing DOM
element in `root` from a previous renderer call for reusing it. Even though combo-box uses
infinite scrolling, reducing DOM operations might improve performance.

The following properties are available in the `model` argument:

Property   | Type             | Description
-----------|------------------|-------------
`index`    | Number           | Index of the item in the `items` array
`item`     | String or Object | The item reference
`selected` | Boolean          | True when item is selected
`focused`  | Boolean          | True when item is focused

### Lazy Loading with Function Data Provider

In addition to assigning an array to the items property, you can alternatively use the
[`dataProvider`](#/elements/vaadin-combo-box#property-dataProvider) function property.
The `<vaadin-combo-box>` calls this function lazily, only when it needs more data
to be displayed.

__Note that when using function data providers, the total number of items
needs to be set manually. The total number of items can be returned
in the second argument of the data provider callback:__

```js
comboBox.dataProvider = async (params, callback) => {
  const API = 'https://demo.vaadin.com/demo-data/1.0/filtered-countries';
  const { filter, page, pageSize } = params;
  const index = page * pageSize;

  const res = await fetch(`${API}?index=${index}&count=${pageSize}&filter=${filter}`);
  if (res.ok) {
    const { result, size } = await res.json();
    callback(result, size);
  }
};
```

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
`loader`             | The loading indicator shown while loading items

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
`loading`            | Set when loading items from the data provider

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
| `--vaadin-combo-box-overlay-max-height`          |
| `--vaadin-combo-box-overlay-width`               |
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

### Internal components

In addition to `<vaadin-combo-box>` itself, the following internal
components are themable:

- `<vaadin-combo-box-item>` - has the same API as [`<vaadin-item>`](#/elements/vaadin-item).

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
