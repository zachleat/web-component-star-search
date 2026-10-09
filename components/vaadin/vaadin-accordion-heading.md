---
tagName: vaadin-accordion-heading
added: 2026-10-08
description: The accordion heading element.
category: Layout
builtWith: Lit
jsSize: 4833
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/accordion"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/accordion
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, opened, theme]
---

The accordion heading element.

`vaadin-accordion-heading` is the element for the headings in the accordion.
As recommended by the WAI ARIA Best Practices, each heading needs to wrap a
`<button>`. This element puts that button in the Shadow DOM, as it is more
convenient to use and doesn't make styling of the heading more problematic.

The WAI ARIA Best Practices also recommend setting `aria-level` depending
on what level the headings are. It is hard to determine the level of a heading
algorithmically, and setting it is not strictly required to have an accessible
accordion. To keep things easier to use, this element does not set `aria-level`
attribute but leaves that to the developer creating an accordion.

### Styling

The following shadow DOM parts are exposed for styling:

Part name  | Description
-----------|-------------------
`toggle`   | The icon element
`content`  | The content wrapper

The following state attributes are available for styling:

Attribute    | Description
-------------| -----------
`active`     | Set when the element is pressed down, either with mouse, touch or the keyboard.
`opened`     | Set when the collapsible content is expanded and visible.
`disabled`   | Set when the element is disabled.

The following custom CSS properties are available for styling:

Custom CSS property                          |
:--------------------------------------------|
| `--vaadin-accordion-heading-background`    |
| `--vaadin-accordion-heading-border-color`  |
| `--vaadin-accordion-heading-border-radius` |
| `--vaadin-accordion-heading-border-width`  |
| `--vaadin-accordion-heading-font-size`     |
| `--vaadin-accordion-heading-font-weight`   |
| `--vaadin-accordion-heading-gap`           |
| `--vaadin-accordion-heading-height`        |
| `--vaadin-accordion-heading-padding`       |
| `--vaadin-accordion-heading-text-color`    |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
