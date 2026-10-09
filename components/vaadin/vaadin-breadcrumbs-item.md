---
tagName: vaadin-breadcrumbs-item
added: 2026-10-08
description: "`<vaadin-breadcrumbs-item>` is a single item inside a `<vaadin-breadcrumbs>`."
category: Navigation
builtWith: Lit
jsSize: 2653
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/breadcrumbs"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/breadcrumbs
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [current, disabled, path, theme]
---

`<vaadin-breadcrumbs-item>` is a single item inside a `<vaadin-breadcrumbs>`.

```html
<vaadin-breadcrumbs-item path="/docs">Docs</vaadin-breadcrumbs-item>
```

### Styling

The following shadow DOM parts are available for styling:

Part name | Description
----------|------------------------------------------------------------
`link`    | The interactive `<a>` rendered when `path` is set.
`nolink`  | The non-interactive `<span>` rendered when `path` is unset.
`label`   | Wraps the item's text content, inside `link` or `nolink`.

The following state attributes are available for styling:

Attribute    | Description
-------------|-------------
`current`    | Set by the parent `<vaadin-breadcrumbs>` on the last item when it has no `path`.
`disabled`   | Set when the item is disabled.
`focus-ring` | Set when the item is focused by the keyboard.
`focused`    | Set when the item is focused.
`has-prefix` | Set when the item has content in the prefix slot

The following custom CSS properties are available for styling:

Custom CSS property                          |
:--------------------------------------------|
| `--vaadin-breadcrumbs-item-border-radius`  |
| `--vaadin-breadcrumbs-item-gap`            |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
