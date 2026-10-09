---
tagName: vaadin-grid-pro
added: 2026-10-08
description: "`<vaadin-grid-pro>` is a high quality data grid / data table Web Component with extended functionality. It extends `<vaadin-grid>` and adds extra features on top of the basic ones."
category: Layout
builtWith: Lit
jsSize: 44560
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/grid-pro"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/grid-pro
license: Vaadin Commercial License
commercial: true
authorUrl: https://vaadin.com/
attributes: [accessible-name, active-item, all-rows-visible, cell-part-name-generator, column-rendering, column-reordering-allowed, data-provider, disabled, drag-filter, drop-filter, drop-mode, edit-on-click, enter-next-row, i18n, is-item-selectable, item-has-children-path, item-id-path, loading, multi-sort, multi-sort-on-shift-click, multi-sort-priority, page-size, row-details-renderer, rows-draggable, single-cell-edit, size, theme]
events: [active-item-changed, cell-activate, cell-edit-started, cell-focus, column-reorder, column-resize, data-provider-changed, expanded-items-changed, grid-dragend, grid-dragstart, grid-drop, item-property-changed, item-toggle, loading-changed, selected-items-changed, size-changed]
---

`<vaadin-grid-pro>` is a high quality data grid / data table Web Component with extended functionality.
It extends `<vaadin-grid>` and adds extra features on top of the basic ones.

See [`<vaadin-grid>`](#/elements/vaadin-grid) documentation for details.

```html
<vaadin-grid-pro></vaadin-grid-pro>
```

### Internal components

In addition to `<vaadin-grid-pro>` itself, the following internal
components are themable:

- `<vaadin-grid-pro-edit-checkbox>` - has the same API as [`<vaadin-checkbox>`](#/elements/vaadin-checkbox).
- `<vaadin-grid-pro-edit-text-field>` - has the same API as [`<vaadin-text-field>`](#/elements/vaadin-text-field).
- `<vaadin-grid-pro-edit-select>` - has the same API as [`<vaadin-select>`](#/elements/vaadin-select).

### Styling

The following custom CSS properties are available for styling:

Custom CSS property                                    |
:------------------------------------------------------|
| `--vaadin-grid-background`                           |
| `--vaadin-grid-border-color`                         |
| `--vaadin-grid-border-radius`                        |
| `--vaadin-grid-border-width`                         |
| `--vaadin-grid-cell-background-color`                |
| `--vaadin-grid-cell-padding`                         |
| `--vaadin-grid-cell-text-overflow`                   |
| `--vaadin-grid-column-border-width`                  |
| `--vaadin-grid-column-resize-handle-color`           |
| `--vaadin-grid-header-font-size`                     |
| `--vaadin-grid-header-font-weight`                   |
| `--vaadin-grid-header-text-color`                    |
| `--vaadin-grid-pro-editable-cell-background-color`   |
| `--vaadin-grid-row-background-color`                 |
| `--vaadin-grid-row-border-width`                     |
| `--vaadin-grid-row-highlight-background-color`       |
| `--vaadin-grid-row-hover-background-color`           |
| `--vaadin-grid-row-odd-background-color`             |
| `--vaadin-grid-row-selected-background-color`        |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
