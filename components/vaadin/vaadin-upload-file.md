---
tagName: vaadin-upload-file
added: 2026-10-08
description: "`<vaadin-upload-file>` element represents a file in the file list of `<vaadin-upload>`."
category: Forms
builtWith: Lit
jsSize: 7326
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/upload"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/upload
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [complete, disabled, error-message, file-name, held, indeterminate, progress, status, theme, uploading]
events: [file-abort, file-retry, file-start]
---

`<vaadin-upload-file>` element represents a file in the file list of `<vaadin-upload>`.

### Styling

The following shadow DOM parts are available for styling:

Part name        | Description
-----------------|-------------
`thumbnail`      | Image thumbnail for image files (used with `thumbnails` theme)
`loader`         | Loading spinner (used with `thumbnails` theme)
`done-icon`      | File done status icon
`warning-icon`   | File warning status icon
`meta`           | Container for file name, status and error messages
`name`           | File name
`error`          | Error message, shown when error happens
`status`         | Status message
`commands`       | Container for file command buttons
`start-button`   | Start file upload button
`retry-button`   | Retry file upload button
`remove-button`  | Remove file button

The following state attributes are available for styling:

Attribute        | Description
-----------------|-------------
`disabled`       | Set when the element is disabled
`focus-ring`     | Set when the element is focused using the keyboard.
`focused`        | Set when the element is focused.
`error`          | An error has happened during uploading.
`indeterminate`  | Uploading is in progress, but the progress value is unknown.
`uploading`      | Uploading is in progress.
`complete`       | Uploading has finished successfully.

The following custom CSS properties are available for styling:

Custom CSS property                          |
:--------------------------------------------|
`--vaadin-upload-file-border-radius`         |
`--vaadin-upload-file-button-background`     |
`--vaadin-upload-file-button-border-color`   |
`--vaadin-upload-file-button-border-radius`  |
`--vaadin-upload-file-button-border-width`   |
`--vaadin-upload-file-button-text-color`     |
`--vaadin-upload-file-button-padding`        |
`--vaadin-upload-file-done-color`            |
`--vaadin-upload-file-error-color`           |
`--vaadin-upload-file-error-font-size`       |
`--vaadin-upload-file-error-font-weight`     |
`--vaadin-upload-file-error-line-height`     |
`--vaadin-upload-file-gap`                   |
`--vaadin-upload-file-name-color`            |
`--vaadin-upload-file-name-font-size`        |
`--vaadin-upload-file-name-font-weight`      |
`--vaadin-upload-file-name-line-height`      |
`--vaadin-upload-file-padding`               |
`--vaadin-upload-file-status-color`          |
`--vaadin-upload-file-status-font-size`      |
`--vaadin-upload-file-status-font-weight`    |
`--vaadin-upload-file-status-line-height`    |
`--vaadin-upload-file-warning-color`         |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
