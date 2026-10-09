---
tagName: vaadin-upload
added: 2026-10-08
description: "`<vaadin-upload>` is a Web Component for uploading multiple files with drag and drop support."
category: Forms
builtWith: Lit
jsSize: 19544
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/upload"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/upload
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [accept, capture, disabled, form-data-name, i18n, max-concurrent-uploads, max-file-size, max-files, max-files-reached, method, no-auto, nodrop, target, theme, timeout, upload-format, with-credentials]
events: [file-reject, file-remove, files-changed, max-files-reached-changed, upload-abort, upload-before, upload-error, upload-progress, upload-request, upload-response, upload-retry, upload-start, upload-success]
---

`<vaadin-upload>` is a Web Component for uploading multiple files with drag and drop support.

Example:

```html
<vaadin-upload></vaadin-upload>
```

### Styling

The following shadow DOM parts are available for styling:

Part name          | Description
-------------------|-------------------------------------
`primary-buttons`  | Upload container
`drop-label`       | Element wrapping drop label and icon

The following state attributes are available for styling:

Attribute            | Description
---------------------|---------------------------------
`disabled`           | Set when the element is disabled
`nodrop`             | Set when drag and drop is disabled (e.g., on touch devices)
`dragover`           | Set when the file is being dragged over the element
`dragover-valid`     | Set when the dragged file is valid with `maxFiles` and `accept` criteria
`max-files-reached`  | Set when maximum number of files that the user is allowed to add has been reached

The following custom CSS properties are available for styling:

Custom CSS property                             |
:-----------------------------------------------|
| `--vaadin-upload-background`                  |
| `--vaadin-upload-border-color`                |
| `--vaadin-upload-border-radius`               |
| `--vaadin-upload-border-width`                |
| `--vaadin-upload-drop-label-color`            |
| `--vaadin-upload-drop-label-font-size`        |
| `--vaadin-upload-drop-label-font-weight`      |
| `--vaadin-upload-drop-label-gap`              |
| `--vaadin-upload-drop-label-line-height`      |
| `--vaadin-upload-file-border-radius`          |
| `--vaadin-upload-file-button-background`      |
| `--vaadin-upload-file-button-border-color`    |
| `--vaadin-upload-file-button-border-radius`   |
| `--vaadin-upload-file-button-border-width`    |
| `--vaadin-upload-file-button-padding`         |
| `--vaadin-upload-file-button-text-color`      |
| `--vaadin-upload-file-done-color`             |
| `--vaadin-upload-file-error-color`            |
| `--vaadin-upload-file-error-font-size`        |
| `--vaadin-upload-file-error-font-weight`      |
| `--vaadin-upload-file-error-line-height`      |
| `--vaadin-upload-file-gap`                    |
| `--vaadin-upload-file-list-divider-color`     |
| `--vaadin-upload-file-list-divider-width`     |
| `--vaadin-upload-file-name-color`             |
| `--vaadin-upload-file-name-font-size`         |
| `--vaadin-upload-file-name-font-weight`       |
| `--vaadin-upload-file-name-line-height`       |
| `--vaadin-upload-file-padding`                |
| `--vaadin-upload-file-status-color`           |
| `--vaadin-upload-file-status-font-size`       |
| `--vaadin-upload-file-status-font-weight`     |
| `--vaadin-upload-file-status-line-height`     |
| `--vaadin-upload-file-warning-color`          |
| `--vaadin-upload-gap`                         |
| `--vaadin-upload-icon-color`                  |
| `--vaadin-upload-padding`                     |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
