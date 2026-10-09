---
tagName: vaadin-slider
added: 2026-10-08
description: "`<vaadin-slider>` is a web component that represents a range slider for selecting numerical values within a defined range."
category: Forms
builtWith: Lit
jsSize: 17229
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/slider"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/slider
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accessible-description-ref, accessible-name, accessible-name-ref, disabled, error-message, helper-text, invalid, label, manual-validation, max, min, min-max-visible, readonly, required, step, theme, value, value-always-visible]
events: [change, input, invalid-changed, validated, value-changed]
---

`<vaadin-slider>` is a web component that represents a range slider
for selecting numerical values within a defined range.

```html
<vaadin-slider min="0" max="100" step="1"></vaadin-slider>
```

### Styling

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|-----------------
`label`              | The label element
`required-indicator` | The required indicator element
`helper-text`        | The helper text element
`error-message`      | The error message element
`track`              | The slider track
`track-fill`         | The filled portion of the track
`thumb`              | The slider thumb
`marks`              | Container for min/max labels
`min`                | Minimum value label
`max`                | Maximum value label

The following state attributes are available for styling:

Attribute          | Description
-------------------|-------------
`active`           | Set when the slider is activated with mouse or touch
`disabled`         | Set when the slider is disabled
`readonly`         | Set when the slider is read-only
`focused`          | Set when the slider has focus
`focus-ring`       | Set when the slider is focused using the keyboard
`min-max-visible`  | Set when the min/max labels are displayed

The following custom CSS properties are available for styling:

Custom CSS property                              |
:------------------------------------------------|
| `--vaadin-field-default-width`                 |
| `--vaadin-input-field-error-color`             |
| `--vaadin-input-field-error-font-size`         |
| `--vaadin-input-field-error-font-weight`       |
| `--vaadin-input-field-helper-color`            |
| `--vaadin-input-field-helper-font-size`        |
| `--vaadin-input-field-helper-font-weight`      |
| `--vaadin-input-field-label-color`             |
| `--vaadin-input-field-label-font-size`         |
| `--vaadin-input-field-label-font-weight`       |
| `--vaadin-input-field-required-indicator`      |
| `--vaadin-slider-bubble-arrow-border-radius`   |
| `--vaadin-slider-bubble-arrow-size`            |
| `--vaadin-slider-bubble-background`            |
| `--vaadin-slider-bubble-border-color`          |
| `--vaadin-slider-bubble-border-radius`         |
| `--vaadin-slider-bubble-border-width`          |
| `--vaadin-slider-bubble-font-size`             |
| `--vaadin-slider-bubble-font-weight`           |
| `--vaadin-slider-bubble-line-height`           |
| `--vaadin-slider-bubble-offset`                |
| `--vaadin-slider-bubble-padding`               |
| `--vaadin-slider-bubble-shadow`                |
| `--vaadin-slider-bubble-text-color`            |
| `--vaadin-slider-fill-background`              |
| `--vaadin-slider-fill-border-color`            |
| `--vaadin-slider-fill-border-width`            |
| `--vaadin-slider-marks-color`                  |
| `--vaadin-slider-marks-font-size`              |
| `--vaadin-slider-marks-font-weight`            |
| `--vaadin-slider-thumb-background`             |
| `--vaadin-slider-thumb-border-color`           |
| `--vaadin-slider-thumb-border-radius`          |
| `--vaadin-slider-thumb-border-width`           |
| `--vaadin-slider-thumb-cursor`                 |
| `--vaadin-slider-thumb-cursor-active`          |
| `--vaadin-slider-thumb-height`                 |
| `--vaadin-slider-thumb-width`                  |
| `--vaadin-slider-track-background`             |
| `--vaadin-slider-track-border-color`           |
| `--vaadin-slider-track-border-radius`          |
| `--vaadin-slider-track-border-width`           |
| `--vaadin-slider-track-height`                 |

In order to style the slider bubble, use `<vaadin-slider-bubble>` shadow DOM parts:

Part name        | Description
-----------------|----------------------
`overlay`        | The overlay container
`content`        | The overlay content
`arrow`          | Arrow pointing to the thumb

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
