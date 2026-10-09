---
tagName: vaadin-board
added: 2026-10-08
description: "`<vaadin-board>` is a web component to create flexible responsive layouts and build nice looking dashboards."
category: Utilities
builtWith: Lit
jsSize: 2337
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/board"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/components
license: Vaadin Commercial License
commercial: true
authorUrl: https://vaadin.com/
---

`<vaadin-board>` is a web component to create flexible responsive layouts
and build nice looking dashboards.

A `<vaadin-board>` is built using `<vaadin-board-row>` elements containing your child elements.
Each board row consists of four columns, and can contain up to four elements. Using column spans
you can tune the layout to your liking.

```html
<vaadin-board>
  <vaadin-board-row>
    <div>This could be chart 1</div>
    <div>This could be chart 2</div>
    <div>This could be chart 3</div>
    <div>This could be chart 4</div>
  </vaadin-board-row>
</vaadin-board>
```
