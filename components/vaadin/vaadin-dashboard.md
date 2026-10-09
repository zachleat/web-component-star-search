---
tagName: vaadin-dashboard
added: 2026-10-08
description: "A responsive, grid-based dashboard layout component"
category: Layout
builtWith: Lit
jsSize: 17695
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/dashboard"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/dashboard
license: Vaadin Commercial License
commercial: true
authorUrl: https://vaadin.com/
attributes: [dense-layout, editable, i18n, renderer, root-heading-level, theme]
events: [dashboard-item-before-remove, dashboard-item-move-mode-changed, dashboard-item-moved, dashboard-item-removed, dashboard-item-resize-mode-changed, dashboard-item-resized, dashboard-item-selected-changed]
---

A responsive, grid-based dashboard layout component

### Quick Start

Assign an array to the [`items`](#/elements/vaadin-dashboard#property-items) property.
Set a renderer function to the [`renderer`](#/elements/vaadin-dashboard#property-renderer) property.

The widgets and the sections will be generated and configured based on the renderer and the items provided.

```html
<vaadin-dashboard></vaadin-dashboard>
```

```js
const dashboard = document.querySelector('vaadin-dashboard');

dashboard.items = [
  { title: 'Widget 1 title', content: 'Text 1', rowspan: 2 },
  { title: 'Widget 2 title', content: 'Text 2', colspan: 2 },
  {
    title: 'Section title',
    items: [{ title: 'Widget in section title', content: 'Text 3' }]
  },
  // ... more items
];

dashboard.renderer = (root, _dashboard, { item }) => {
  const widget = root.firstElementChild || document.createElement('vaadin-dashboard-widget');
  if (!root.contains(widget)) {
    root.appendChild(widget);
  }
  widget.widgetTitle = item.title;
  widget.textContent = item.content;
};
```

### Styling

The following custom properties are available:

Custom Property                     | Description
------------------------------------|-------------
`--vaadin-dashboard-col-min-width`  | minimum column width of the dashboard
`--vaadin-dashboard-col-max-width`  | maximum column width of the dashboard
`--vaadin-dashboard-row-min-height` | minimum row height of the dashboard
`--vaadin-dashboard-row-height`     | fixed row height of the dashboard. Must be in length units. Overrides `--vaadin-dashboard-row-min-height` and prevents rows from growing to fit content
`--vaadin-dashboard-col-max-count`  | maximum column count of the dashboard
`--vaadin-dashboard-gap`            | gap between child elements. Must be in length units (0 is not allowed, 0px is)
`--vaadin-dashboard-padding`        | space around the dashboard's outer edges. Must be in length units (0 is not allowed, 0px is)

The following state attributes are available for styling:

Attribute            | Description
---------------------|-------------
`editable`           | Set when the dashboard is editable.
`dense-layout`       | Set when the dashboard is in dense mode.
`item-selected`      | Set when an item is selected.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
