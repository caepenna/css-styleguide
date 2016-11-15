---
layout: content
title:  "CSS for JavaScript"
permalink: /contents/css-for-javascript
---

## Controlling DOM elements with Javascript

Don't use CSS classes to query for DOM elements on JavaScript.

Set `role` attribute to your components and leave CSS classes for styling purposes only because it isn't obvious which class names are for styles and which have JS behaviors bound to them.

_Need to include a study about perfomance when querying through role attribute._

_Need to include a reference on not using classes to query from DOM elements._

**Wrong**

```html
<div class='user-info'>...</div>
```

```javascript
$('.user-info').on('hover', function() { ... });
```

**Right**

```html
<div class='user-info' role='avatar-popup'>...</div>
```

```javascript
$('[role~="avatar-popup"]').on('hover', function() { ... });
```

## Add or remove classes for styling components

Use `role` attributes only to query elements. If your Javascript needs to change a style add/remove classes. Don't set/unset other element attributes.