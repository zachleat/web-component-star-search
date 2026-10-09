---
tagName: vaadin-map
added: 2026-10-08
description: "`vaadin-map` is a web component for displaying web maps."
category: Utilities
builtWith: Lit
jsSize: 56888
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/map"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/docs/latest/components/map
license: Vaadin Commercial License
commercial: true
authorUrl: https://vaadin.com/
attributes: [theme]
---

`vaadin-map` is a web component for displaying web maps.

The component is a light-weight wrapper around the OpenLayers mapping library.

### Basic Usage

Add a `<vaadin-map>` element to your HTML:

```html
<vaadin-map></vaadin-map>
```

Then use the exposed OpenLayers API to configure it:
```html
<script type="module">
  import "@vaadin/map";
  import TileLayer from "ol/layer/Tile";
  import OSM from "ol/source/OSM";
  import View from "ol/View";

  const map = document.querySelector("vaadin-map");
  customElements.whenDefined("vaadin-map").then(() => {
    map.configuration.addLayer(new TileLayer({
      source: new OSM()
    }));
    map.configuration.setView(new View({
      center: [0, 0],
      zoom: 3
    }));
  });
</script>
```
