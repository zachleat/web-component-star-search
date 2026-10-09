---
tagName: vaadin-notification
added: 2026-10-08
description: "`<vaadin-notification>` is a Web Component providing accessible and customizable notifications (toasts)."
category: Feedback
builtWith: Lit
jsSize: 5442
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/notification"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/notification
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [assertive, duration, opened, overlay-class, position, renderer, theme]
events: [closed, opened-changed]
---

`<vaadin-notification>` is a Web Component providing accessible and customizable notifications (toasts).

### Rendering

The content of the notification can be populated by using the renderer callback function.

The renderer function provides `root`, `notification` arguments.
Generate DOM content, append it to the `root` element and control the state
of the host element by accessing `notification`. Before generating new content,
users are able to check if there is already content in `root` for reusing it.

```html
<vaadin-notification id="notification"></vaadin-notification>
```
```js
const notification = document.querySelector('#notification');
notification.renderer = function(root, notification) {
  root.textContent = "Your work has been saved";
};
```

Renderer is called on the opening of the notification.
DOM generated during the renderer call can be reused
in the next renderer call and will be provided with the `root` argument.
On first call it will be empty.

### Styling

`<vaadin-notification>` uses `<vaadin-notification-card>` internal
themable component as the actual visible notification cards.

The following shadow DOM parts of the `<vaadin-notification-card>` are available for styling:

Part name | Description
----------|----------------
`overlay` | The notification container
`content` | The content of the notification

The following custom CSS properties are available for styling:

Custom CSS property                       |
:-----------------------------------------|
| `--vaadin-notification-background`      |
| `--vaadin-notification-border-color`    |
| `--vaadin-notification-border-radius`   |
| `--vaadin-notification-border-width`    |
| `--vaadin-notification-container-gap`   |
| `--vaadin-notification-padding`         |
| `--vaadin-notification-shadow`          |
| `--vaadin-notification-viewport-inset`  |
| `--vaadin-notification-width`           |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.

Note: the `theme` attribute value set on `<vaadin-notification>` is
propagated to the internal `<vaadin-notification-card>`.
