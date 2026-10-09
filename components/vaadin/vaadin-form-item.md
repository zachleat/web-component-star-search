---
tagName: vaadin-form-item
added: 2026-10-08
description: "`<vaadin-form-item>` is a Web Component providing labelled form item wrapper for using inside `<vaadin-form-layout>`."
category: Forms
builtWith: Lit
jsSize: 1966
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/form-layout"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/form-layout
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [theme]
---

`<vaadin-form-item>` is a Web Component providing labelled form item wrapper
for using inside `<vaadin-form-layout>`.

`<vaadin-form-item>` accepts a single child as the input content,
and also has a separate named `label` slot:

```html
<vaadin-form-item>
  <label slot="label">Label aside</label>
  <input>
</vaadin-form-item>
```

The label is optional and can be omitted:

```html
<vaadin-form-item>
  <input type="checkbox"> Subscribe to our Newsletter
</vaadin-form-item>
```

By default, the `label` slot content is displayed aside of the input content.
When `label-position="top"` is set, the `label` slot content is displayed on top:

```html
<vaadin-form-item label-position="top">
  <label slot="label">Label on top</label>
  <input>
</vaadin-form-item>
```

**Note:** Normally, `<vaadin-form-item>` is used as a child of
a `<vaadin-form-layout>` element. Setting `label-position` is unnecessary,
because the `label-position` attribute is triggered automatically by the parent
`<vaadin-form-layout>`, depending on its width and responsive behavior.

**Deprecation note:** The `label-position` attribute is deprecated and will be removed
in Vaadin 26. Use `labelsAside` property on the form-layout instead.

### Input Width

By default, `<vaadin-form-item>` does not manipulate the width of the slotted
input element. Optionally you can stretch the child input element to fill
the available width for the input content by adding the `full-width` class:

```html
<vaadin-form-item>
  <label slot="label">Label</label>
  <input class="full-width">
</vaadin-form-item>
```

### Styling

The `label-position` attribute can be used to target the label on top state:

```css
vaadin-form-item[label-position="top"] {
  padding-top: 0.5rem;
}
```

**Deprecation note:** The `label-position` attribute is deprecated and will be removed
in Vaadin 26. Use `labelsAside` property on the form-layout instead.

The following shadow DOM parts are available for styling:

Part name            | Description
---------------------|-------------
`label`              | The slotted label element wrapper
`required-indicator` | The `required` state indicator element

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
