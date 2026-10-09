---
tagName: vaadin-upload-drop-zone
added: 2026-10-08
description: "`<vaadin-upload-drop-zone>` is a Web Component that can be used as a drop zone for file uploads. When files are dropped on the drop zone, they are added to a linked UploadManager."
category: Forms
builtWith: Lit
jsSize: 3754
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/upload"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/upload
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [disabled, manager, max-files-reached, theme]
---

`<vaadin-upload-drop-zone>` is a Web Component that can be used as a drop zone
for file uploads. When files are dropped on the drop zone, they are added to
a linked UploadManager.

```html
<vaadin-upload-drop-zone>
  <p>Drop files here</p>
</vaadin-upload-drop-zone>
```

The drop zone must be linked to an UploadManager by setting the
`manager` property:

```javascript
const dropZone = document.querySelector('vaadin-upload-drop-zone');
dropZone.manager = uploadManager;
```

### Styling

The component has no styling by default. When files are dragged over,
the `dragover` attribute is set and the component uses a hover effect.
To override the hover effect, use `vaadin-upload-drop-zone[dragover]::after`
selector to style the pseudo-element covering the drop zone during dragover.

Attribute          | Description
-------------------|--------------------------------------------
`dragover`         | Set when files are being dragged over the element
`disabled`         | Set when the drop zone is effectively disabled
`max-files-reached`| Set when the manager has reached maxFiles

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
