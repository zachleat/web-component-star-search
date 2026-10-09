---
tagName: vaadin-dashboard-layout
added: 2026-10-08
description: "A responsive, grid-based dashboard layout component"
category: Layout
builtWith: Lit
jsSize: 2082
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
attributes: [dense-layout, root-heading-level, theme]
---

A responsive, grid-based dashboard layout component

```html
<vaadin-dashboard-layout>
  <vaadin-dashboard-widget widget-title="Widget 1"></vaadin-dashboard-widget>
  <vaadin-dashboard-widget widget-title="Widget 2"></vaadin-dashboard-widget>
  <vaadin-dashboard-section section-title="Section">
    <vaadin-dashboard-widget widget-title="Widget in Section"></vaadin-dashboard-widget>
  </vaadin-dashboard-section>
</vaadin-dashboard-layout>
```

### Styling

The following custom properties are available:

Custom Property                     | Description
------------------------------------|-------------
`--vaadin-dashboard-col-min-width`  | minimum column width of the layout
`--vaadin-dashboard-col-max-width`  | maximum column width of the layout
`--vaadin-dashboard-row-min-height` | minimum row height of the layout
`--vaadin-dashboard-row-height`     | fixed row height of the layout. Must be in length units. Overrides `--vaadin-dashboard-row-min-height` and prevents rows from growing to fit content
`--vaadin-dashboard-col-max-count`  | maximum column count of the layout
`--vaadin-dashboard-gap`            | gap between child elements. Must be in length units (0 is not allowed, 0px is)
`--vaadin-dashboard-padding`        | space around the dashboard's outer edges. Must be in length units (0 is not allowed, 0px is)

The following state attributes are available for styling:

Attribute      | Description
---------------|-------------
`dense-layout` | Set when the dashboard is in dense mode.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
