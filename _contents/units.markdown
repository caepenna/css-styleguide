---
layout: content
title:  "Units"
permalink: /contents/units
---

## Units for `font-size`

The `font-size` property should also have a value in either `em` or `rem`. The default unit in this case should be `em`, but if there's need to used the font size in `rem` it is fine :)

**Right**

```scss
h1 {font-size: 2em;}

h2 {font-size: 1.6em;}

p {font-size: 1em;}
```

**Wrong**

```scss
h1 {font-size: 32px;}

h2 {font-size: 10vw;}

p {font-size: 16pt;}
```

## Units for `line-height`

If the project have a consistent vertical rhythm, the `line-height` property should have a value multiple of the _vertical grid module_ of the vertical grid module in the project.

More information on [Vertical grid](#vertical-grid).

**Project WITH consistent vertical rhythm**

```scss
html {font-size: 16px;}

h1 {line-height: 2rem;}

h2 {line-height: 1.5rem;}

p {line-height: 1rem;}
```

**Project WITHOUT consistent vertical rhythm**

```scss
h1 {line-height: 34px;}

h2 {line-height: 26px;}

p {line-height: 16px;}
```

## Units for vertical margins and paddings

In general, vertical margins and paddings (top and bottom) are used as typographical tools to organize, group and arrange text. In order to maintain the vertical rhythm they should follow the same rules of the [Units for `line-height`](#units-for-line-height).

This means those values should always be multiple of `0.5rem` (if the project have a consistent vertical rhythm).

More information on [Vertical grid](#vertical-grid).

**Project WITH consistent vertical rhythm**

```scss
h3 {margin-bottom: 2rem;}
```

**Project WITHOUT consistent vertical rhythm**

```scss
h3 {margin-bottom: 32px;}

.sidebar > h3 {margin-bottom: 30px;}

.article > h3 {margin-bottom: 34px;}
```
