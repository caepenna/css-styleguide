---
layout: content
title:  "Print"
permalink: /contents/print
---

It's important for some pages to have a specific layout for print, especially pages with lots of text.

We recommend that print properties be declared in the same component file. But instead of component's properties to be in a separated media query:

**Right**

```scss
.example-component{
  width: 100%;
}

@media print {
  .example-component {
    width: 80%;
  }
}
```

**Wrong**

```scss
.example-component{
  width: 100%;
  @media print {
    width: 80%;
  }
}
```

Just like we follow RSCSS on CSS organization and class naming, we based our instructions in this post below.

We strongly recommend reading it: [I totally forgot about print style sheets](https://uxdesign.cc/i-totally-forgot-about-print-style-sheets-f1e6604cfd6#.702e2vrhq)
