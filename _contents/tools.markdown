---
layout: content
title:  "Tools"
permalink: /contents/tools
---

## Sass
We recommend the use of SCSS syntax when using Sass.

**SCSS (Sassy CSS)**

```scss
h1 {font-size: $font-size-h1}

h2 {font-size: $font-size-h2}

.foo {
  height: 100px;
  width: 100px;
}

.item {
  box-shadow: 0 2px 0px #dcffa6,
              0 2px 5px #000;
}
```

**Sass**

```sass
h1
  font-size: $font-size-h1

h2
  font-size: $font-size-h2

.foo
  height: 100px
  width: 100px

.item
  box-shadow: 0 2px 0px #dcffa6, 0 2px 5px #000
```
Comparing both syntaxes, SCSS allows you to write selectors and attributes on the same line so you can simplify your code. At the same time you need to be careful not to code in a way it's hard to read and understand.

You can write plain CSS in SCSS (or reuse CSS code from elsewhere). Also, for the same reason, the learning curve is smoother for people who already know CSS.

