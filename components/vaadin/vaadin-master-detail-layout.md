---
tagName: vaadin-master-detail-layout
added: 2026-10-08
description: "`<vaadin-master-detail-layout>` is a web component for building UIs with a master (or primary) area and a detail (or secondary) area that is displayed next to, or overlaid on top of, the master area, depending on configuration and viewport size."
category: Layout
builtWith: Lit
jsSize: 5203
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/master-detail-layout"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/master-detail-layout
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [detail-size, expand-detail, expand-master, force-overlay, master-size, no-animation, orientation, overlay-containment, overlay-size, theme]
events: [backdrop-click, detail-escape-press]
---

`<vaadin-master-detail-layout>` is a web component for building UIs with a master
(or primary) area and a detail (or secondary) area that is displayed next to, or
overlaid on top of, the master area, depending on configuration and viewport size.

### Slots

The component has two main content areas: the master area (default slot)
and the detail area (`detail` slot). When the detail doesn't fit next to
the master, it is shown as an overlay on top of the master area:

```html
<vaadin-master-detail-layout>
  <div>Master content</div>
  <div slot="detail">Detail content</div>
</vaadin-master-detail-layout>
```

The component also supports a `detail-placeholder` slot for content shown
in the detail area when no detail is selected. Unlike the `detail` slot,
the placeholder is simply hidden when it doesn't fit next to the master area,
rather than shown as an overlay:

```html
<vaadin-master-detail-layout>
  <div>Master content</div>
  <div slot="detail-placeholder">Select an item</div>
</vaadin-master-detail-layout>
```

### Styling

The following shadow DOM parts are available for styling:

Part name             | Description
----------------------|----------------------
`backdrop`            | Backdrop covering the master area in the overlay mode
`master`              | The master area
`detail`              | The detail area
`detail-placeholder`  | The detail placeholder area

The following state attributes are available for styling:

Attribute                 | Description
--------------------------|----------------------
`expand-master`           | Set when the master area expands to fill available space.
`expand-detail`           | Set when the detail area expands to fill available space.
`orientation`             | Set to `horizontal` or `vertical` depending on the orientation.
`has-detail`              | Set when the detail content is provided and visible.
`has-detail-placeholder`  | Set when the detail placeholder content is provided.
`overlay`                 | Set when columns don't fit and the detail is shown as an overlay.
`overlay-containment`     | Set to `layout` or `page`.

The following custom CSS properties are available for styling:

Custom CSS property                                  |
:----------------------------------------------------|
| `--vaadin-master-detail-layout-border-color`       |
| `--vaadin-master-detail-layout-border-width`       |
| `--vaadin-master-detail-layout-detail-background`  |
| `--vaadin-master-detail-layout-detail-shadow`      |
| `--vaadin-overlay-backdrop-background`             |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
