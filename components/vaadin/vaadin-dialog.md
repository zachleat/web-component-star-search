---
tagName: vaadin-dialog
added: 2026-10-08
description: "`<vaadin-dialog>` is a Web Component for creating customized modal dialogs."
category: Overlays
builtWith: Lit
jsSize: 11527
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/dialog"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/dialog
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [draggable, footer-renderer, header-renderer, header-title, height, keep-in-viewport, left, modeless, no-autofocus, no-close-on-esc, no-close-on-outside-click, no-focus-trap, opened, overlay-role, renderer, resizable, theme, top, width]
events: [closed, drag-start, dragged, opened-changed, resize, resize-start]
---

`<vaadin-dialog>` is a Web Component for creating customized modal dialogs.

```html
<vaadin-dialog header-title="Title">
  <div>Dialog content</div>
  <div slot="footer">Footer</div>
</vaadin-dialog>
```

### Slots

Dialog supports following slots for providing content:

Name             | Description
-----------------|-------------
(none)           | Default slot for the content
`header-content` | Slot for the header content
`footer`         | Slot for the footer content

#### Renderer (deprecated)

The content of the dialog can also be populated by using the renderer callback functions,
although this approach is deprecated in favor of slotted content.

The renderer function provides `root`, `dialog` arguments.
Generate DOM content, append it to the `root` element and control the state
of the host element by accessing `dialog`. Before generating new content,
users are able to check if there is already content in `root` for reusing it.

```html
<vaadin-dialog id="dialog"></vaadin-dialog>
```
```js
const dialog = document.querySelector('#dialog');
dialog.renderer = function(root, dialog) {
  root.textContent = "Sample dialog";
};
```

Renderer is called on the opening of the dialog.
DOM generated during the renderer call can be reused
in the next renderer call and will be provided with the `root` argument.
On first call it will be empty.

### Styling

The following shadow DOM parts are available for styling:

Part name        | Description
-----------------|-------------------------------------------
`backdrop`       | Backdrop of the overlay
`overlay`        | The overlay container
`content`        | The overlay content
`header`         | Element wrapping title and header content
`header-content` | Element wrapping the header content slot
`title`          | Element wrapping the title slot
`footer`         | Element wrapping the footer slot

The following state attributes are available for styling:

Attribute        | Description
-----------------|--------------------------------------------
`has-title`      | Set when the element has a title
`has-header`     | Set when the element has header content
`has-footer`     | Set when the element has footer content
`overflow`       | Set to `top`, `bottom`, none or both

The following custom CSS properties are available for styling:

Custom CSS property                          |
:--------------------------------------------|
|`--vaadin-dialog-background`                |
|`--vaadin-dialog-border-color`              |
|`--vaadin-dialog-border-radius`             |
|`--vaadin-dialog-border-width`              |
|`--vaadin-dialog-max-width`                 |
|`--vaadin-dialog-min-width`                 |
|`--vaadin-dialog-overflow-indicator-color`  |
|`--vaadin-dialog-overflow-indicator-height` |
|`--vaadin-dialog-padding`                   |
|`--vaadin-dialog-shadow`                    |
|`--vaadin-dialog-text-color`                |
|`--vaadin-dialog-title-color`               |
|`--vaadin-dialog-title-font-size`           |
|`--vaadin-dialog-title-font-weight`         |
|`--vaadin-dialog-title-line-height`         |
|`--vaadin-dialog-toolbar-gap`               |
|`--vaadin-overlay-backdrop-background`      |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
