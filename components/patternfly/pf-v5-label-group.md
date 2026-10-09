---
tagName: pf-v5-label-group
added: 2026-10-08
description: "Groups multiple labels with overflow, category, and close support."
category: Forms
builtWith: Lit
jsSize: 17359
library:
  name: PatternFly Elements
  url: https://patternflyelements.org/
package: "@patternfly/elements"
repository: https://github.com/patternfly/patternfly-elements
documentation: "https://github.com/patternfly/patternfly-elements#readme"
license: MIT
author: Red Hat
authorUrl: https://github.com/patternfly
attributes: [orientation, accessible-label, accessible-close-label, collapsed-text, expanded-text, num-labels, open, closeable]
slots: [category]
events: [expand, remove]
---

A **label group** is a collection of labels that can be grouped by category
and used to represent one or more values assigned to a single attribute.
When the number of labels exceeds `numLabels`, additional labels will be
hidden using an overflow label.
