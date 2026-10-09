---
tagName: vaadin-avatar-group
added: 2026-10-08
description: "`<vaadin-avatar-group>` is a Web Component providing avatar group displaying functionality."
category: Media
builtWith: Lit
jsSize: 49750
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/avatar-group"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/components
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [i18n, max-items-visible, theme]
---

`<vaadin-avatar-group>` is a Web Component providing avatar group displaying functionality.

To create the avatar group, first add the component to the page:

```html
<vaadin-avatar-group></vaadin-avatar-group>
```

And then use [`items`](#/elements/vaadin-avatar-group#property-items) property to initialize the structure:

```js
document.querySelector('vaadin-avatar-group').items = [
  {name: 'John Doe'},
  {abbr: 'AB'}
];
```

### Styling

The following shadow DOM parts are exposed for styling:

Part name   | Description
----------- | ---------------
`container` | The container element
`overlay`   | The overflow avatar menu overlay
`content`   | The overflow avatar menu overlay content

The following custom CSS properties are available for styling:

Custom CSS property                |
:----------------------------------|
| `--vaadin-avatar-group-gap`      |
| `--vaadin-avatar-group-overlap`  |

See the [`<vaadin-avatar>`](#/elements/vaadin-avatar) documentation for the available
state attributes and stylable shadow parts of avatar elements.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.

### Internal components

In addition to `<vaadin-avatar-group>` itself, the following internal
components are themable:

- `<vaadin-avatar-group-menu>` - has the same API as [`<vaadin-list-box>`](#/elements/vaadin-list-box).
- `<vaadin-avatar-group-menu-item>` - has the same API as [`<vaadin-item>`](#/elements/vaadin-item).
