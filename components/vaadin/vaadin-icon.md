---
tagName: vaadin-icon
added: 2026-10-08
description: "`<vaadin-icon>` is a Web Component for displaying SVG icons."
category: Media
builtWith: Lit
jsSize: 6401
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/icon"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/components
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [char, class, font-family, icon, icon-class, ligature, size, src, symbol, theme]
---

`<vaadin-icon>` is a Web Component for displaying SVG icons.

### Icon property

The `<vaadin-icon>` component is designed to be used as a drop-in replacement for `<iron-icon>`.
For example, you can use it with `vaadin-icons` like this:

```html
<vaadin-icon icon="vaadin:angle-down"></vaadin-icon>
```

Alternatively, you can also pick one of the Lumo icons:

```html
<vaadin-icon icon="lumo:user"></vaadin-icon>
```

### Custom SVG icon

Alternatively, instead of selecting an icon from an iconset by name, you can pass any custom `svg`
literal using the [`svg`](#/elements/vaadin-icon#property-svg) property. In this case you can also
define the size of the SVG `viewBox` using the [`size`](#/elements/vaadin-icon#property-size) property:

```js
import { html, svg } from 'lit';

// in your component
render() {
  const svgIcon = svg`<path d="M13 4v2l-5 5-5-5v-2l5 5z"></path>`;
  return html`
    <vaadin-icon
      .svg="${svgIcon}"
      size="16"
    ></vaadin-icon>
  `;
}
```

### Styling

The following custom CSS properties are available for styling:

Custom CSS property            |
:------------------------------|
| `--vaadin-icon-color`        |
| `--vaadin-icon-size`         |
| `--vaadin-icon-stroke-width` |
| `--vaadin-icon-visual-size`  |

The following state attributes are available for styling:

Attribute      | Description
---------------|-------------
`has-tooltip`  | Set when the icon has a slotted tooltip

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
