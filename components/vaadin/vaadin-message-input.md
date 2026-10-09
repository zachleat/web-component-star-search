---
tagName: vaadin-message-input
added: 2026-10-08
description: "`<vaadin-message-input>` is a Web Component for sending messages. It consists of a text area that grows on along with the content, and a send button to send message."
category: Feedback
builtWith: Lit
jsSize: 17569
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/message-input"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/message-input
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, i18n, theme, value]
events: [submit]
---

`<vaadin-message-input>` is a Web Component for sending messages.
It consists of a text area that grows on along with the content, and a send button to send message.

The message can be sent by one of the following actions:
- by pressing Enter (use Shift + Enter to add a new line)
- by clicking `submit` button.

```html
<vaadin-message-input></vaadin-message-input>
```

### Slots

The following slots are available for adding content to the message input:

Name       | Description
-----------|-------------
`header`   | Content displayed above the text area and controls
`prefix`   | Content displayed before the text area
`button`   | Button that submits the message, replacing the default one
`footer`   | Content displayed below the text area and controls

When a custom button has no text content or accessible label, `aria-label` attribute
is set based on the [`i18n`](#/elements/vaadin-message-input#property-i18n) property.

### Styling

The following state attributes are available for styling:

Attribute      | Description
---------------|---------------------------------
`disabled`     | Set when the element is disabled
`focused`      | Set when the text area is focused
`focus-ring`   | Set when the text area is focused using the keyboard
`has-header`   | Set when the element has content in the header slot
`has-prefix`   | Set when the element has content in the prefix slot
`has-footer`   | Set when the element has content in the footer slot
`has-tooltip`  | Set when the element has a slotted tooltip

### Internal components

In addition to `<vaadin-message-input>` itself, the following internal
components are themable:

- `<vaadin-message-input-button>` - has the same API as `<vaadin-button>`
- `<vaadin-text-area>`

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
