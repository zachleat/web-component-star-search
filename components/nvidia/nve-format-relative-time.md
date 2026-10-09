---
tagName: nve-format-relative-time
stars: 88
description: Formats a date/time value as localized relative text using the Intl.RelativeTimeFormat API.
category: Data
builtWith: Lit
jsSize: 1657
library:
  name: NVIDIA Elements
  url: https://nvidia.github.io/elements/
package: "@nvidia-elements/core"
repository: https://github.com/NVIDIA/elements
documentation: https://nvidia.github.io/elements/docs/elements/format-relative-time/
license: Apache-2.0
author: NVIDIA
authorUrl: https://www.nvidia.com/
attributes: [date, locale, numeric, format-style, unit, sync]
---

Formats a date/time value as localized relative text using the Intl.RelativeTimeFormat API. Renders inside a semantic time element.
Options mirror the Intl.RelativeTimeFormat API. When unit is 'auto', the component selects the best unit based on the time difference.
