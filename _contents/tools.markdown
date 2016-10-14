---
layout: content
title:  "Tools"
permalink: /contents/tools
---

## Sass
We recommend the use of SCSS rather than Sass.

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
1. Comparing the syntax of them, SCSS allows you write selectors and attributes on the same line. You can have a more compressed code but, at the same time, you need to be carefull to not write unreadable code.

2. When you use SCSS, integration with CSS is softer. You can copy a CSS code inside a SCSS file and you won't have any problem to compile. If you are using Sass, you need to make some changes in the code to make it work.

3. The syntax of SCSS is closer of the syntax of CSS. So it is easier for a person who knows how to write CSS, create or make changes in SCSS code and understand the differences between the languages.

