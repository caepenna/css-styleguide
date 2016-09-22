---
layout: content
title:  "Designing for different sized plataforms"
permalink: /contents/designing-for-different-sized-plataforms
---

Responsive web design is not only the adaptation of the user experience to mobile devices, but designing and developing for every possible resolution and ratio of screen.

Therefore, one very useful strategy to responsive design and development is use a fluid structure to your layout. Container dimensions with values set in percentage or relative units (`vw`, `vh`) are often useful to make sure the sizes will adapt according to available space.

However, breakpoints are useful for adapting specificities and they should be used to better adapt the layout in specific circumstances. Also, break points should be set in variables so it is easier to change them when needed.

> The example below is base on [Foundation](http://foundation.zurb.com/sites/docs/media-queries.html), adapted to better suit our needs.

**Right**

```scss
// Defining values
$small-range:   (0em, 40em);       /* 0, 640px */
$medium-range:  (40.063em, 64em);  /* 641px, 1024px */
$large-range:   (64.063em, 90em);  /* 1025px, 1440px */
$xlarge-range:  (90.063em, 120em); /* 1441px, 1920px */
$xxlarge-range: (120.063em);       /* 1921px */

// Defining media queries
$small-only:   "only screen and (max-width: #{upper-bound($small-range)})" !default;
$medium-up:    "only screen and (min-width:#{lower-bound($medium-range)})" !default;
$medium-only:  "only screen and (min-width:#{lower-bound($medium-range)}) and (max-width:#{upper-bound($medium-range)})" !default;
$large-up:     "only screen and (min-width:#{lower-bound($large-range)})" !default;
$large-only:   "only screen and (min-width:#{lower-bound($large-range)}) and (max-width:#{upper-bound($large-range)})" !default;
$xlarge-up:    "only screen and (min-width:#{lower-bound($xlarge-range)})" !default;
$xlarge-only:  "only screen and (min-width:#{lower-bound($xlarge-range)}) and (max-width:#{upper-bound($xlarge-range)})" !default;
$xxlarge-up:   "only screen and (min-width:#{lower-bound($xxlarge-range)})" !default;

// Usage
@media #{$small-only}   { … }
@media #{$medium-up}    { … }
@media #{$medium-only}  { … }
@media #{$large-up}     { … }
@media #{$large-only}   { … }
@media #{$xlarge-up}    { … }
@media #{$xlarge-only}  { … }
@media #{$xxlarge-up}   { … }
```

Also, when setting dimensions for containers and main structural components, try using both fixed values and relative values so you can control how much it will vary according to the viewport, for example:

**Right**

```scss
.container {
  width: calc(50% + 20em);
  max-width: calc(100% - 2em);
}
```

**Wrong**

```scss
.container {
  width: 960px;
  max-width: 90%;
}
```