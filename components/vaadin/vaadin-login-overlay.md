---
tagName: vaadin-login-overlay
added: 2026-10-08
description: "`<vaadin-login-overlay>` is a web component which renders a login form in an overlay and provides an additional `brand` part for application title and description."
category: Overlays
builtWith: Lit
jsSize: 24010
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/login"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/login
license: Apache-2.0
authorUrl: https://vaadin.com/
attributes: [action, description, disabled, error, heading-level, i18n, no-autofocus, no-forgot-password, opened, theme, title]
events: [closed, description-changed, disabled-changed, error-changed, forgot-password, login]
---

`<vaadin-login-overlay>` is a web component which renders a login form in an overlay and
provides an additional `brand` part for application title and description.

```html
<vaadin-login-overlay opened></vaadin-login-overlay>
```

### Styling

The following shadow DOM parts are available for styling:

Part name                    | Description
-----------------------------|--------------------------------
`backdrop`                   | Backdrop of the overlay
`overlay`                    | The overlay container element
`content`                    | The overlay content element
`card`                       | Container for the brand and form wrapper
`brand`                      | Container for application title and description
`description`                | The application description
`form-wrapper`               | The login form wrapper element
`form`                       | The login form element
`form-title`                 | Title of the login form
`error-message`              | Container for error message
`error-message-title`        | Container for error message title
`error-message-description`  | Container for error message description
`footer`                     | Container for the footer element

The following custom CSS properties are available for styling:

Custom CSS property                                |
:--------------------------------------------------|
| `--vaadin-login-overlay-background`              |
| `--vaadin-login-overlay-border-color`            |
| `--vaadin-login-overlay-border-radius`           |
| `--vaadin-login-overlay-border-width`            |
| `--vaadin-login-overlay-brand-background`        |
| `--vaadin-login-overlay-brand-padding`           |
| `--vaadin-login-overlay-description-color`       |
| `--vaadin-login-overlay-description-font-size`   |
| `--vaadin-login-overlay-description-font-weight` |
| `--vaadin-login-overlay-description-line-height` |
| `--vaadin-login-overlay-shadow`                  |
| `--vaadin-login-overlay-text-color`              |
| `--vaadin-login-overlay-title-color`             |
| `--vaadin-login-overlay-title-font-size`         |
| `--vaadin-login-overlay-title-font-weight`       |
| `--vaadin-login-overlay-title-line-height`       |

See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
