---
layout: content
title:  "Typography"
permalink: /contents/typography
---

In a project, the rules for typography should be pre-defined and systematic. By doing this it makes sure the overall look and feel is consistent and also prevents problems in the user experience.

## Font families

A project can have as many font families as you like, but each one of them must have a "reason to be". There should not be an extra font family for no reason, if there is no specific need or advantage for using it.

These font families should always be assigned to variables so they can be re-used in the project. The names of the variables should have a direct link with its "reason to be", as presented below.

**Right**

```scss
$font-family-body: "Tiempos Text", Georgia, Times, serif;
$font-family-headings: "Gotham", "Montserrat", Helvetica, serif;
$font-family-button: "FF DIN", "Roboto", sans-serif;
```

**Wrong**

```scss
$font-family-serif: "Tiempos Text", Georgia, Times, serif;
$font-family-gotham: "Gotham", "Montserrat", Helvetica, serif;
$button-font-family: "FF DIN", "Roboto", sans-serif;
```

Then, when assigning font families to selectors, you should assign it as few times as possible so the css code is easier to maintain.

**Right**

```scss
p {
  font-family: "Tiempos Text", Georgia, Times, serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Gotham", "Montserrat", Helvetica, serif;
}

.action-button {
  font-family: "FF DIN", "Roboto", sans-serif;
}
```

**Wrong**

```scss
.sidebar-component {
  > .description {
    font-family: "Tiempos Text", Georgia, Times, serif;
  }
}
```

## Font size & line height variables

For font size and line height values, the variables should be set using the metric prefixes. The variable names should refer to its size in relation to the "base size" (the size used in mst of the body text in the project). This way we understand how big or small the text is directly from reading the variable name.

> Harry Roberts suggests the greek alphabet notation (`alpha`, `beta`, `gama`, etc) for setting font sizes names, but we prefere a way that makes more explicit the size in relation to each other (also, his example differs from our due to our use of mixins). You can find more interesting content on font sizing in CSS reading his article ["Pragmatic, practical font sizing in CSS"](http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/).

**Right**

```scss
$font-size-mega: 4em;
$font-size-kilo: 3em;
$font-size-hecto: 2em;
$font-size-deca: 1.5em;
$font-size-base: 1em;
$font-size-deci: 0.75em;
$font-size-centi: 0.625em;

$line-height-mega: 3.5rem;
$line-height-kilo: 3rem;
$line-height-hecto: 2.5rem;
$line-height-deca: 2rem;
$line-height-base: 1.5rem;
$line-height-deci: 1rem;
$line-height-centi: .5rem;
```

**Wrong**

```scss
$font-size-extralarge: 4em;
$font-size-large: 3em;
$font-size-medium: 2em;
$font-size-small: 1em;
$font-size-extrasmall: 0.5em;
```

**Also Wrong**

```scss
$font-size-colossal: 4.5em;
$font-size-giant: 4em;
$font-size-huge: 3em;
$font-size-large: 2em;
$font-size-medium: 1em;
$font-size-small: 1em;
$font-size-tiny: .8em;
$font-size-minuscule: 0.6em;
```

Use the font size attribute on html tag selectors (h1, h2, p, etc) so you won't have to do so on specific situations unless it is an exception.

**Right**

```scss
p {
  font-size: $font-size-base;
  line-height: $line-height-base;
}

h1 {
  font-size: $font-size-mega;
  line-height: $line-height-mega;
}

h2 {
  font-size: $font-size-kilo;
  line-height: $line-height-kilo;
}

h3 {
  font-size: $font-size-hecto;
  line-height: $line-height-hecto;
}

h4 {
  font-size: $font-size-deca;
  line-height: $line-height-deca;
}

h5 {
  font-size: $font-size-centi;
  line-height: $line-height-centi;
}

h6 {
  font-size: $font-size-mili;
  line-height: $line-height-mili;
}

.news-item{
  > .caption {
    font-size: $font-size-centi;
    line-height: $line-height-centi;
  }
}
```

Avoid the need for repeating a font size variable in your code. Preferably, it should be set only twice: in the html tag selectors (e.g.: `h2`) or in a mixin (e.g.: `@mixin caption`).

**Right**

```scss
@mixin btn {
  font-size: $font-size-centi;
  // You would also want to add other "btn" styles here…
}

.action-button {
  @mixin btn;
}

.confirmation-popup {
  > .button {
    @mixin btn;
  }
}
```

**Wrong**

```scss
.action-button {
  font-size: $font-size-centi;
}

.confirmation-popup {
  > .button {
    font-size: $font-size-centi;
  }
}
```

## Font weight

The font weight value should be declared in numbers (e.g.: `100`), the only valid number ins CSS are multiples of 100, from 100 to 900.

**Right**

```scss
.title {
  font-weight: 700;
}
```

Each weight (hairline, thin, light, regular, medium, semibold, bold, heavy, black) should have its own number value (from 100 to 900). If there are any weights not mention before (such as “extra light”, “demibold” or “ultra black”) this modle can be adatped to fit them as log as thin is always 300, regular is always 400 and bold is always 700.

**Right**

```scss
@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-.wotf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-.wotf');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-Light.wotf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-Regular.wotf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-Medium.wotf');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-Semibold.wotf');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-Bold.wotf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-Heavy.wotf');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Greta Sans';
  src: url('fonts/GretaSans-Black.wotf');
  font-weight: 900;
  font-style: normal;
}
```
