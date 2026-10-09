---
tagName: vaadin-message
added: 2026-10-08
description: "`<vaadin-message>` is a Web Component for showing a single message with an author, message and time."
category: Feedback
builtWith: Lit
jsSize: 43107
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/message-list"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/message-list
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [theme, time, user-abbr, user-color-index, user-img, user-name]
events: [attachment-click]
---

`<vaadin-message>` is a Web Component for showing a single message with an author, message and time.

```html
<vaadin-message
  time="2021-01-28 10:43"
  user-name="Bob Ross"
  user-abbr="BR"
  user-img="/static/img/avatar.jpg"
>
 There is no real ending. It's just the place where you stop the story.
</vaadin-message>
```

### Styling

The following shadow DOM parts are available for styling:

Part name           | Description
--------------------|----------------
`name`              | Author's name
`time`              | When the message was posted
`content`           | The message itself as a slotted content
`attachments`       | Container for the attachments
`attachment`        | Individual attachment button
`attachment-image`  | Image attachment button (in addition to `attachment`)
`attachment-file`   | File attachment button (in addition to `attachment`)
`attachment-preview`| Image preview inside an image attachment
`attachment-icon`   | File icon inside a file attachment
`attachment-name`   | File name inside a file attachment

The following state attributes are available for styling:

Attribute           | Description
--------------------|-------------
`focus-ring`        | Set when the message is focused using the keyboard.
`focused`           | Set when the message is focused.
`typing-indicator`  | Set when the message is rendered as a typing indicator. The value is the indicator style: empty, `ellipsis` or `minimal`.

The following custom CSS properties are available for styling:

Custom CSS property                          |
:------------------------------------------- |
`--vaadin-message-attachment-background`     |
`--vaadin-message-attachment-border-color`   |
`--vaadin-message-attachment-border-radius`  |
`--vaadin-message-attachment-border-width`   |
`--vaadin-message-attachment-font-size`      |
`--vaadin-message-attachment-font-weight`    |
`--vaadin-message-attachment-gap`            |
`--vaadin-message-attachment-line-height`    |
`--vaadin-message-attachment-padding`        |
`--vaadin-message-attachment-text-color`     |
`--vaadin-message-attachments-alignment`     |
`--vaadin-message-content-background`        |
`--vaadin-message-content-border-radius`     |
`--vaadin-message-content-padding`           |
`--vaadin-message-font-size`                 |
`--vaadin-message-font-weight`               |
`--vaadin-message-gap`                       |
`--vaadin-message-header-line-height`        |
`--vaadin-message-line-height`               |
`--vaadin-message-name-color`                |
`--vaadin-message-name-font-size`            |
`--vaadin-message-name-font-weight`          |
`--vaadin-message-padding`                   |
`--vaadin-message-text-color`                |
`--vaadin-message-time-color`                |
`--vaadin-message-time-font-size`            |
`--vaadin-message-time-font-weight`          |
`--vaadin-message-user-color`                |

### Built-in Theme Variants

`<vaadin-message>` supports the following theme variants. Both of them require the parent
[`<vaadin-message-list>`](#/elements/vaadin-message-list) to use `theme="bubble"`:

Theme variant         | Description
----------------------|---------------
`theme="self"`        | Shows the message as sent by the current user, hides the avatar and name
`theme="full-width"`  | Removes the bubble and the width restriction, for an assistant or AI response

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
