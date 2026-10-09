---
tagName: vaadin-accordion
added: 2026-10-08
description: "`<vaadin-accordion>` is a Web Component implementing accordion widget: a vertically stacked set of expandable panels."
category: Layout
builtWith: Lit
jsSize: 9935
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/accordion"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/accordion
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [heading-level, opened, theme]
events: [items-changed, opened-changed]
---

`<vaadin-accordion>` is a Web Component implementing accordion widget:
a vertically stacked set of expandable panels. The component should be
used as a wrapper for two or more `<vaadin-accordion-panel>` components.

Panel headings function as controls that enable users to open (expand)
or hide (collapse) their associated sections of content. The user can
toggle panels by mouse click, Enter and Space keys.

Only one panel can be opened at a time, opening a new one forces
previous panel to close and hide its content.

```html
<vaadin-accordion>
  <vaadin-accordion-panel>
    <vaadin-accordion-heading slot="summary">Panel 1</vaadin-accordion-heading>
    <div>This panel is opened, so the text is visible by default.</div>
  </vaadin-accordion-panel>
  <vaadin-accordion-panel>
    <vaadin-accordion-heading slot="summary">Panel 2</vaadin-accordion-heading>
    <div>After opening this panel, the first one becomes closed.</div>
  </vaadin-accordion-panel>
</vaadin-accordion>
```

### Styling

Accordion does not have own stylable shadow parts or state attributes. Instead, apply styles to
the following components:

- [`<vaadin-accordion-heading>`](#/elements/vaadin-accordion-heading)
- [`<vaadin-accordion-panel>`](#/elements/vaadin-accordion-panel)

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
