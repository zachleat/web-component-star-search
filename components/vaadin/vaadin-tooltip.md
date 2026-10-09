---
tagName: vaadin-tooltip
added: 2026-10-08
description: "`<vaadin-tooltip>` is a Web Component for creating tooltips."
category: Overlays
builtWith: Lit
jsSize: 38559
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/tooltip"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/tooltip
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [aria-link-mode, focus-delay, for, hide-delay, hover-delay, manual, markdown, opened, position, text, theme]
events: [content-changed]
---

`<vaadin-tooltip>` is a Web Component for creating tooltips.

```html
<button id="confirm">Confirm</button>
<vaadin-tooltip text="Click to save changes" for="confirm"></vaadin-tooltip>
```

### Markdown Support

The tooltip supports rendering Markdown content by setting the `markdown` property:

```html
<button id="info">Info</button>
<vaadin-tooltip
  text="**Important:** Click to view *detailed* information"
  markdown
  for="info">
</vaadin-tooltip>
```

### Styling

The following shadow DOM parts are available for styling:

Part name   | Description
----------- | ---------------
`overlay`   | The overlay element
`content`   | The overlay content element

The following state attributes are available for styling:

Attribute        | Description
-----------------|----------------------------------------
`markdown`       | Reflects the `markdown` property value.
`position`       | Reflects the `position` property value.

The following custom CSS properties are available for styling:

Custom CSS property                |
:----------------------------------|
| `--vaadin-tooltip-background`    |
| `--vaadin-tooltip-border-color`  |
| `--vaadin-tooltip-border-radius` |
| `--vaadin-tooltip-border-width`  |
| `--vaadin-tooltip-font-size`     |
| `--vaadin-tooltip-font-weight`   |
| `--vaadin-tooltip-line-height`   |
| `--vaadin-tooltip-max-width`     |
| `--vaadin-tooltip-offset-bottom` |
| `--vaadin-tooltip-offset-end`    |
| `--vaadin-tooltip-offset-start`  |
| `--vaadin-tooltip-offset-top`    |
| `--vaadin-tooltip-padding`       |
| `--vaadin-tooltip-shadow`        |
| `--vaadin-tooltip-text-color`    |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
