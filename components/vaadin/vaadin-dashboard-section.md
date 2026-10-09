---
tagName: vaadin-dashboard-section
added: 2026-10-08
description: A section component for use with the Dashboard component
category: Layout
builtWith: Lit
jsSize: 12666
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
attributes: [section-title, theme]
---

A section component for use with the Dashboard component

```html
<vaadin-dashboard-section section-title="Section Title">
  <vaadin-dashboard-widget widget-title="Widget 1"></vaadin-dashboard-widget>
  <vaadin-dashboard-widget widget-title="Widget 2"></vaadin-dashboard-widget>
</vaadin-dashboard-section>
```

#### Example

```html
<vaadin-dashboard-section section-title="Section title">
  <vaadin-dashboard-widget widget-title="Widget 1"></vaadin-dashboard-widget>
  <vaadin-dashboard-widget widget-title="Widget 2"></vaadin-dashboard-widget>
</vaadin-dashboard-section>
```

### Styling

The following shadow DOM parts are available for styling:

Part name              | Description
-----------------------|-------------
`header`               | The header of the section
`title`                | The title of the section
`button`               | Set on all the buttons (move, remove and others)
`move-button`          | The move button
`remove-button`        | The remove button
`move-backward-button` | The move backward button when in move mode
`move-forward-button`  | The move forward button when in move mode
`move-apply-button`    | The apply button when in move mode

The following state attributes are available for styling:

Attribute      | Description
---------------|-------------
`selected`     | Set when the element is selected.
`focused`      | Set when the element is focused.
`move-mode`    | Set when the element is being moved.
`editable`     | Set when the element is editable.
`first-child`  | Set when the element is the first child of the parent.
`last-child`   | Set when the element is the last child of the parent.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
