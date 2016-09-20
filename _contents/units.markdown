---
layout: page
title:  "Units"
permalink: /contents/class-naming-convention
---

### Units for `font-size`

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

### Units for `line-height`

The `line-height` property should also have a value multiple of the _vertical grid module_ of the vertical grid module in the project.

By default, we use 8 pixels as our _vertical grid module_, which is half the value of the `html`'s `font-size`, this means the line height should be multiples of `0.5rem`.

**Right**

```scss
html {font-size: 16px;}

h1 {line-height: 2rem;}

h2 {line-height: 1.5rem;}

p {line-height: 1rem;}
```

**Wrong**

```scss
h1 {line-height: 2em;}

h2 {line-height: 1.6rem;}

p {line-height: 16px;}
```

### Units vertical margins and paddings

In general, vertical margins and paddings (top and bottom) are used as typographical tools to organize, group and arrange text. In order to maintain the vertical rhythm they should follow the same rules of the [Units for `line-height`](#units-for-line-height).

This means those values should always be multiple of `0.5rem`.

**Right**

```scss
h3 {margin-bottom: 2rem;}
```

**Wrong**

```scss
h3 {margin-bottom: 2em;}

h3 {margin-bottom: 1.9rem;}

h3 {margin-bottom: 32px;}
```