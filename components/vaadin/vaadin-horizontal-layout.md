---
tagName: vaadin-horizontal-layout
added: 2026-10-08
description: "`<vaadin-horizontal-layout>` provides a simple way to horizontally align your HTML elements."
category: Layout
builtWith: Lit
jsSize: 1844
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/horizontal-layout"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/horizontal-layout
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [theme]
---

`<vaadin-horizontal-layout>` provides a simple way to horizontally align your HTML elements.

```html
<vaadin-horizontal-layout>
  <div>Item 1</div>
  <div>Item 2</div>
</vaadin-horizontal-layout>
```

### Built-in Theme Variations

`<vaadin-horizontal-layout>` supports the following theme variations:

Theme variation    | Description
-------------------|---------------
`theme="margin"`   | Applies the default amount of CSS margin for the host element
`theme="padding"`  | Applies the default amount of CSS padding for the host element
`theme="spacing"`  | Applies the default amount of CSS margin between items
`theme="wrap"`     | Items wrap to the next row when they exceed the layout width

### Component's slots

The following slots are available to be set:

Slot name          | Description
-------------------|---------------
no name            | Default slot
`middle`           | Slot for the content placed in the middle
`end`              | Slot for the content placed at the end

### Custom CSS Properties

The following custom CSS properties are available for styling:

Custom CSS property                  | Description
-------------------------------------|-------------
`--vaadin-horizontal-layout-margin`  | The default CSS margin applied when using `theme="margin"`
`--vaadin-horizontal-layout-padding` | The default CSS padding applied when using `theme="padding"`
`--vaadin-horizontal-layout-gap`     | The default CSS gap applied when using `theme="spacing"`

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
