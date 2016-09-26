---
layout: content
title:  "Grid"
permalink: /contents/grid
---

## Horizontal gird

**Why columns? When to use?**

We believe in consistency, but also in a content-fluid decision. So that's why we built our own column grid system which should be used only in cases that you have to organize elements in a pre-defined horizontal system.

Not all layouts will have a column system, threfore the use of columns are not mandatory.

**Our Solution**

What we aimed to do was create a framework that could work inside any container, regardless of its width. The variables we needed were: number of columns and gutter, and the column width would be adapted accoringly.

Our solution is a SCSS based system, and a _mixin_, _include_ and _calc_ structure that could be set in any layout/component (_Later discussion in stylesheets and folder architecture_) that relies in two variables at first: number of columns and gutter.

It also include custom settings for any other working screen you might be working with. It works by setting up a minimum screen size for tablet or mobile and later working out the columns, gutter variables for those screens.

**How to use?**

First things first: get to know your variables.

The code is really simple. And it will start as two variables only: number of columns and gutter.

```scss
$nOfColumns: 12; !default
$gutter: 1rem; !default
$columnWidth: ( 100%/#{$nOfColumns} - #{$gutter} );
```

You will notice that same variables happens for tablets and mobile.

```scss
$nOfColumnsTablet: 8; !default
$gutterTablet: .5rem; !default
$columnWidthTablet: ( 100%/#{$nOfColumnsTablet} - #{$gutterTablet} );
$nOfColumnsMobile: 4; !default
$gutterMobile: .5rem; !default
$columnWidthMobile: ( 100%/#{$nOfColumnsMobile} - #{$gutterMobile} );
```

And then, set up your maximum tablet and mobile width.

```scss
$tabletWidth: 640px; !default
$mobileWidth: 480px; !default
```

Second stuff comes right after: get to know the system.

There you'll see a bunch of _mixins_ for mobile and tablet. They will be setting up the grid the way it should be based on the variables you have set before. Apply it using **@include grid(number)**.


And also, there will be set some offset mixins in case you might wanna get off the grid for some reason. Apply it using **@include offSetRight(number)** or **@includeOffSetLeft(number)**.

Not all set, yet! Set up your container width too.

Mind that the grid works without setting a width, but it might be compromise the overall look of the application and it's certainly not the best approach for a multiple screen application.

```scss
.container {
  width: calc(60% + 240px);
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  overflow: auto;
}
```

All set! You're good to go!

You can always use our [Codepen](http://codepen.io/flama/pen/jARYpP).

## Vertical grid

In design, _vertical rhythm_ is the structure that guides a reader's eye through the content. Consistent vertical rhythm makes a layout more balanced and its content more readable.

In order to ensure a consistent vertical rythim, we use a vertical grid module which is half the size of the `html`'s `font-size`, set in `em`. This means every* vertical distance should be a multiple of `0.5em`.

It is important to understand that not all layouts will have a constistent vertical rhythm. You could opt to not have this consistency for project-specific reasons and, in this case, this don't have to be taken into consideration.

**Project WITH constistent vertical rhythm**

```scss
html {font-size: 16px;}

p {line-height: 1rem;}

.foo {height: 2.5rem;}
```

**Project WITHOUT constistent vertical rhythm**

```scss
p {line-height: 17px;}

.foo {height: 2.4rem;}
```

**Furhter reading on this subject** [4 Simple Steps to Vertical Rhythm](http://typecast.com/blog/4-simple-steps-to-vertical-rhythm) [Aesthetic Sass 3: Typography and Vertical Rhythm](https://scotch.io/tutorials/aesthetic-sass-3-typography-and-vertical-rhythm) [CSS Baseline: The Good, The Bad And The Ugly](https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/) [Using Sass & Compass Vertical Rhythm to set up typography defaults in a project.](https://medium.com/@amlinarev/using-sass-compass-vertical-rhythm-to-set-up-typography-defaults-in-a-project-34fe2f1d2c02#.4qrws1cww)
