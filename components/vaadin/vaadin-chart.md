---
tagName: vaadin-chart
added: 2026-10-08
description: "`<vaadin-chart>` is a Web Component for creating high quality charts."
category: Data
builtWith: Lit
jsSize: 313555
library:
  name: Vaadin
  url: https://vaadin.com/docs/latest/components
package: "@vaadin/charts"
author: Vaadin
repository: https://github.com/vaadin/web-components
documentation: https://vaadin.com/charts
license: Vaadin Commercial License
commercial: true
authorUrl: https://vaadin.com/
attributes: [additional-options, categories, category-max, category-min, category-position, chart3d, configuration, empty-text, no-legend, polar, stacking, subtitle, theme, timeline, title, tooltip, type]
events: [chart-add-series, chart-after-export, chart-after-print, chart-before-export, chart-before-print, chart-click, chart-drilldown, chart-drillup, chart-drillupall, chart-end-resize, chart-load, chart-redraw, chart-selection, point-click, point-drag, point-drag-start, point-drop, point-legend-item-click, point-mouse-out, point-mouse-over, point-remove, point-select, point-unselect, point-update, series-after-animate, series-checkbox-click, series-click, series-hide, series-legend-item-click, series-mouse-out, series-mouse-over, series-show, xaxes-extremes-set, yaxes-extremes-set]
---

`<vaadin-chart>` is a Web Component for creating high quality charts.

### Basic use

There are two ways of configuring your `<vaadin-chart>` element: **HTML API**, **JS API** and **JSON API**.
Note that you can make use of all APIs in your element.

#### Using HTML API

`vaadin-chart` has a set of attributes to make it easier for you to customize your chart.

```html
<vaadin-chart title="The chart title" subtitle="The chart subtitle">
  <vaadin-chart-series
    type="column"
    title="The series title"
    values="[10, 20, 30]"
  ></vaadin-chart-series>
</vaadin-chart>
```

> Note that while you can set type for each series individually, for some types, such as `'bar'`, `'gauge'` and `'solidgauge'`, you
> have to set it as the default series type on `<vaadin-chart>` in order to work properly.

#### Using JS API

Use [`configuration`](#/elements/vaadin-chart#property-configuration) property to set chart title, categories and data:

```js
const chart = document.querySelector('vaadin-chart');

// Wait for default configuration to be ready
requestAnimationFrame(() => {
  const configuration = chart.configuration;
  configuration.setTitle({ text: 'The chart title' });
  // By default there is one X axis, it is referenced by configuration.xAxis[0].
  configuration.xAxis[0].setCategories(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
  configuration.addSeries({
    type: 'column',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  });
});
```

#### Using JS JSON API

Use [`updateConfiguration`](#/elements/vaadin-chart#method-updateConfiguration) method to set chart title, categories and data:

```js
const chart = document.querySelector('vaadin-chart');
chart.updateConfiguration({
  title: {
    text: 'The chart title'
  },
  subtitle: {
    text: 'Subtitle'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    type: 'column',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
});
```

**Note:** chart style customization cannot be done via the JS or JSON API.
Styling properties in the JSON configuration will be ignored. The following section discusses chart styling.

### CSS Styling

Chart appearance is primarily controlled by CSS style rules.
A comprehensive list of the supported style classes can be found at
https://www.highcharts.com/docs/chart-design-and-style/style-by-css

See also the [Chart Styling](https://vaadin.com/docs/latest/components/charts/css-styling) documentation.

### RTL support

`vaadin-charts` as well as [Highcharts](https://www.highcharts.com/) by itself are not adjusting the layout
based on the `dir` attribute. In order to make `vaadin-charts` display RTL content properly additional
JSON configuration should be used.
Each chart should be updated based on the specific needs, but general recommendations are:

 1. Set `reversed` to true for xAxis (https://api.highcharts.com/highcharts/xAxis.reversed).
 2. Set `useHTML` to true for text elements, i.e. `tooltip` (https://api.highcharts.com/highcharts/tooltip.useHTML).
 3. Set `rtl` to true for `legend` (https://api.highcharts.com/highcharts/legend.rtl).

### Setting colors

Although charts can be styled as described above, there is a simpler way for setting colors.
Colors can be set using CSS custom properties `--vaadin-charts-color-{n}` (where `n` goes from `0 - 9`).

For example `--vaadin-charts-color-0` sets the color of the first series on a chart.
