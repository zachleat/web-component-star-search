---
tagName: vaadin-card
added: 2026-10-08
description: "`<vaadin-card>` is a versatile container for grouping related content and actions."
category: Layout
builtWith: Lit
jsSize: 4302
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/card"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/card
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [card-title, theme, title-heading-level]
---

`<vaadin-card>` is a versatile container for grouping related content and actions.
It presents information in a structured and visually appealing manner, with
customization options to fit various design requirements. The default ARIA role is `region`.

```html
<vaadin-card role="region" theme="outlined cover-media">
  <img slot="media" width="200" src="..." alt="">
  <div slot="title">Lapland</div>
  <div slot="subtitle">The Exotic North</div>
  <div>Lapland is the northern-most region of Finland and an active outdoor destination.</div>
  <vaadin-button slot="footer">Book Vacation</vaadin-button>
</vaadin-card>
```

### Styling

The following shadow DOM parts are available for styling:

Part name | Description
----------|-------------
`media`   | The container for the media element (e.g., image, video, icon). Shown above of before the card content.
`header`  | The container for title and subtitle - or for custom header content - and header prefix and suffix elements.
`content` | The container for the card content (usually text content).
`footer`  | The container for footer elements. This part is always at the bottom of the card.

The following custom CSS properties are available for styling:

Custom CSS property                    |
:--------------------------------------|
| `--vaadin-card-background`           |
| `--vaadin-card-border-color`         |
| `--vaadin-card-border-radius`        |
| `--vaadin-card-border-width`         |
| `--vaadin-card-gap`                  |
| `--vaadin-card-media-aspect-ratio`   |
| `--vaadin-card-padding`              |
| `--vaadin-card-shadow`               |
| `--vaadin-card-subtitle-color`       |
| `--vaadin-card-subtitle-font-size`   |
| `--vaadin-card-subtitle-font-weight` |
| `--vaadin-card-subtitle-line-height` |
| `--vaadin-card-title-color`          |
| `--vaadin-card-title-font-size`      |
| `--vaadin-card-title-font-weight`    |
| `--vaadin-card-title-line-height`    |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
