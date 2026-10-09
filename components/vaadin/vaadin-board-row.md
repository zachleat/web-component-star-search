---
tagName: vaadin-board-row
added: 2026-10-08
description: "`<vaadin-board-row>` is a web component that together with `<vaadin-board>` component allows to create flexible responsive layouts and build nice looking dashboard."
category: Utilities
builtWith: Lit
jsSize: 2102
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

`<vaadin-board-row>` is a web component that together with `<vaadin-board>` component allows
to create flexible responsive layouts and build nice looking dashboard.

Each row can contain up to four elements (fewer if colspan is used) and is automatically responsive.
The row changes between `large`, `medium` and `small` modes depending on the available width and
the set breakpoints.

In `large` mode, typically all content is shown side-by-side, in `medium` half of the content is
side by side and in `small` mode, content is laid out vertically.

The breakpoints can be set using custom CSS properties.
By default the breakpoints are `small: <600px`, `medium: < 960px`, `large >= 960px`.

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

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|-------------
`--vaadin-board-width-small` | Determines the width where mode changes from `small` to `medium` | `600px`
`--vaadin-board-width-medium` | Determines the width where mode changes from `medium` to `large` | `960px`
