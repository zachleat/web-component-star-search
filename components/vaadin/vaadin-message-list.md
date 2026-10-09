---
tagName: vaadin-message-list
added: 2026-10-08
description: "`<vaadin-message-list>` is a Web Component for showing an ordered list of messages. The messages are rendered as <vaadin-message>"
category: Feedback
builtWith: Lit
jsSize: 55272
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/message-list"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/message-list
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [announce-messages, items, markdown, theme]
events: [attachment-click]
---

`<vaadin-message-list>` is a Web Component for showing an ordered list of messages. The messages are rendered as <vaadin-message>

### Example

To create a new message list, add the component to the page:

```html
<vaadin-message-list></vaadin-message-list>
```

Provide the messages to the message list with the [`items`](#/elements/vaadin-message-list#property-items) property.

```js
document.querySelector('vaadin-message-list').items = [
  { text: 'Hello list', time: 'yesterday', userName: 'Matt Mambo', userAbbr: 'MM', userColorIndex: 1 },
  { text: 'Another message', time: 'right now', userName: 'Linsey Listy', userAbbr: 'LL', userColorIndex: 2, userImg: '/static/img/avatar.jpg' }
];
```

### Styling

The following shadow DOM parts are available for styling:

Part name | Description
----------|----------------
`list`    | The container wrapping messages.

The following custom CSS properties are available for styling:

Custom CSS property                |
:--------------------------------- |
`--vaadin-message-list-max-width`  |
`--vaadin-message-list-padding`    |

### Built-in Theme Variants

`<vaadin-message-list>` supports the following theme variants:

Theme variant        | Description
---------------------|---------------
`theme="bubble"`     | Shows the messages as chat bubbles
`theme="one-to-one"` | Hides the avatar and name of every message, for a chat between two participants. Works together with `bubble`

See the [`<vaadin-message>`](#/elements/vaadin-message) documentation for the available
theme variants, state attributes and stylable shadow parts of message elements.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
