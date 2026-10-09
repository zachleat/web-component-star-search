---
tagName: vaadin-markdown
added: 2026-10-08
description: "`<vaadin-markdown>` is a web component for rendering Markdown content. It takes Markdown source as input and renders the corresponding HTML."
category: Content
builtWith: Lit
jsSize: 27322
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/markdown"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/markdown
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [content, line-breaks, theme]
---

`<vaadin-markdown>` is a web component for rendering Markdown content.
It takes Markdown source as input and renders the corresponding HTML.

### Styling

The component does not have specific shadow DOM parts for styling the rendered Markdown content itself,
as the content is rendered directly into the component's light DOM via a slot.
You can style the rendered HTML elements using standard CSS selectors targeting the `vaadin-markdown` element.

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
