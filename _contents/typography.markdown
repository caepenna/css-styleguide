---
layout: content
title:  "Typography"
permalink: /contents/typography
---

In a project, the rules for typography should be pre-defined and systematic. By doing this it makes sure the overall look and feel is consistent and also prevents problems in the user experience.

### Font families

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

### Font size & line height variables

For font size and line height values, the variables should be set the way exemplified below. The variable names should also refer to its use, whether it's a body text (`$font-size-body` for `p`) or a heading (`$font-size-h2` for `h2`). This way we understand the use and necessity of the variable directly from reading its name.

> Harry Roberts suggests the greek alphabet notation (`alpha`, `beta`, `gama`, etc) for setting font sizes names, but we prefere the `hN` for our use case (also, his example differs from our due to our use of mixins). You can find more interesting content on font sizing in CSS reading his article ["Pragmatic, practical font sizing in CSS"](http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/).

**Right**

```scss
$font-size-body: 1em;
$font-size-h1: 4em;
$font-size-h2: 3em;
$font-size-h3: 2em;
$font-size-h4: 1.5em;
$font-size-h5: 0.75em;
$font-size-h6: 0.625em;

$line-height-body: 1.5rem;
$line-height-h1: 3.5rem;
$line-height-h2: 3rem;
$line-height-h3: 2.5rem;
$line-height-h4: 2rem;
$line-height-h5: 1rem;
$line-height-h6: .5rem;
```

Avoid using size adjectives for font size variable names.

Size adjectives do not express the usage of the font, but the value of it (which is not the goal of a variable).

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
  font-size: $font-size-body;
  line-height: $line-height-body;
}

h1 {
  font-size: $font-size-h1;
  line-height: $line-height-h1;
}

h2 {
  font-size: $font-size-h2;
  line-height: $line-height-h2;
}

h3 {
  font-size: $font-size-h3;
  line-height: $line-height-h3;
}

h4 {
  font-size: $font-size-h4;
  line-height: $line-height-h4;
}

h5 {
  font-size: $font-size-h5;
  line-height: $line-height-h5;
}

h6 {
  font-size: $font-size-h6;
  line-height: $line-height-h6;
}

.news-item{
  > .caption {
    font-size: $font-size-h5;
    line-height: $line-height-h5;
  }
}
```

Avoid the need for repeating a font size variable in your code. Preferably, it should be set only twice: in the html tag selectors (e.g.: `h2`) or in a mixin (e.g.: `@mixin caption`).

**Right**

```scss
@mixin btn {
  font-size: $font-size-h5;
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
  font-size: $font-size-h5;
}

.confirmation-popup {
  > .button {
    font-size: $font-size-h5;
  }
}
```

### Font weight

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
  font-family: 'Greta SansHairline';
  src: url('fonts/GretaSans-.wotf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Greta SansThin';
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