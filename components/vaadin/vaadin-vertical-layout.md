---
tagName: vaadin-vertical-layout
added: 2026-10-08
description: "`<vaadin-vertical-layout>` provides a simple way to vertically align your HTML elements."
category: Layout
builtWith: Lit
jsSize: 784
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/vertical-layout"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/vertical-layout
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [theme]
---

`<vaadin-vertical-layout>` provides a simple way to vertically align your HTML elements.

```html
<vaadin-vertical-layout>
  <div>Item 1</div>
  <div>Item 2</div>
</vaadin-vertical-layout>
```

### Built-in Theme Variations

`<vaadin-vertical-layout>` supports the following theme variations:

Theme variation    | Description
-------------------|---------------
`theme="margin"`   | Applies the default amount of CSS margin for the host element
`theme="padding"`  | Applies the default amount of CSS padding for the host element
`theme="spacing"`  | Applies the default amount of CSS margin between items
`theme="wrap"`     | Items wrap to the next row when they exceed the layout width

### Custom CSS Properties

The following custom CSS properties are available for styling:

Custom CSS property                | Description
-----------------------------------|-------------
`--vaadin-vertical-layout-margin`  | The default CSS margin applied when using `theme="margin"`
`--vaadin-vertical-layout-padding` | The default CSS padding applied when using `theme="padding"`
`--vaadin-vertical-layout-gap`     | The default CSS gap applied when using `theme="spacing"`

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
