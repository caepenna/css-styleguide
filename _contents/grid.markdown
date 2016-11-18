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

We aimed to create a framework that would work inside any container, regardless of its width. We just wanted to customize 3 variables: the width of the element container columns, the number of columns (`$nOfColumns`) and the gutter between columns (`$gutter`). Then the columns width would be adapted accordingly.

Our solution is a Sass based system that could be set in any layout/component.

It also includes custom settings for other sizes of screen you might be working with. It works by setting up a minimum screen size for tablet or mobile and later working out the columns, gutter variables for those screens.

**How to use?**

First things first: get to know your variables.

The code is really simple. And it will start as two variables only: number of columns and gutter.

```scss
$nOfColumns: 12;
$gutter: 1rem;
$columnWidth: ( 100%/#{$nOfColumns} - #{$gutter} );
```

You will notice that same variables applies for tablets and mobile.

```scss
$nOfColumnsTablet: 8;
$gutterTablet: .5rem;
$columnWidthTablet: ( 100%/#{$nOfColumnsTablet} - #{$gutterTablet} );
$nOfColumnsMobile: 4;
$gutterMobile: .5rem;
$columnWidthMobile: ( 100%/#{$nOfColumnsMobile} - #{$gutterMobile} );
```

And then, set up your maximum tablet and mobile width.

```scss
$tabletWidth: 640px;
$mobileWidth: 480px;
```

Second stuff comes right after: get to know the system.

There you'll see a bunch of _mixins_ for mobile and tablet. They will be setting up the grid the way it should be based on the variables you have set before. Apply it using `@include grid(number)`.


And also, there will be set some offset mixins in case you might wanna get off the grid for some reason. Apply it using `@include offSetRight(number)` or `@includeOffSetLeft(number)`.

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

_Need to talk about offest_

All set! You're good to go!

You can always use our [Codepen](http://codepen.io/flama/pen/jARYpP).

## Vertical grid

In design, _vertical rhythm_ is the structure that guides a reader's eye through the content. Consistent vertical rhythm makes a layout more balanced and a more readable content.

In order to ensure a consistent vertical rhythm, we use a vertical grid module which is half the size of the `html`'s `font-size`, set in `em`. This means every* vertical distance should be a multiple of `0.5em`.

It is important to understand that not all layouts will have a consistent vertical rhythm. You could opt to not have this consistency for project-specific reasons and, in this case, this don't have to be taken into consideration.

**Project WITH consistent vertical rhythm**

```scss
html { font-size: 16px; }

p { line-height: 1rem; }

.foo { height: 2.5rem; }
```

**Project WITHOUT consistent vertical rhythm**

```scss
p { line-height: 17px; }

.foo { height: 2.4rem; }
```

**Furhter reading on this subject** [4 Simple Steps to Vertical Rhythm](http://typecast.com/blog/4-simple-steps-to-vertical-rhythm) [Aesthetic Sass 3: Typography and Vertical Rhythm](https://scotch.io/tutorials/aesthetic-sass-3-typography-and-vertical-rhythm) [CSS Baseline: The Good, The Bad And The Ugly](https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/) [Using Sass & Compass Vertical Rhythm to set up typography defaults in a project.](https://medium.com/@amlinarev/using-sass-compass-vertical-rhythm-to-set-up-typography-defaults-in-a-project-34fe2f1d2c02#.4qrws1cww)
