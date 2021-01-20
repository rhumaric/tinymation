> This repository is now [hosted on Gitlab](https://gitlab.com/romaricpascal/tinymation). Please head there if you wish to contribute. Thanks 🙂

# tinymation
Animations through JavaScript functions

The aim of this library is to provide modular functions that you can compose to create JavaScript animations.
This would allow to embed only the features you need in the JS your users have to download. 
Which hopefully in turn would translate to smaller download size compared to libraries providing all their options
through an OOP api (to be verified once things get more stable).
 
---
**This library is currently in a really early stage. There's still a lot to define. 
Feel free to [comment on the issues/raise new ones][gh-issues] to help shape it, contribute code, 
or even point to existing art that would make it redundant ;)**

---

## General idea

The general concept is to break down the animation into two parts:
 - a function to use as source of `progress` (time as a base, but could also be scroll,...)
 - another that interpolates this `progress` into updates of the UI
 
```js
// Fades in the `.target` element over 1000ms
time(1000)(fadeIn(document.querySelector('.target')));
```

[More details about this this article][article-intro]

## Building through composition
 
Each bit could be expressed through compositions of functions, allowing to create complex animations
with calls like:

```js
var el = document.querySelector('.target');
// Fades in the element in between the scroll positions where its top reaches 33 and 66% of the viewport
between([0.33, 0.66],percentOf(viewportHeight, distance(topOf(el), bottomOfViewport)))(fadeIn(el));
// Simultaneously fades in and translate the element of `50vw` over 1000ms
time(1000)(parallel([
  fadeIn(el),
  translateX(50,'vw',el)
]);
```

[More details about the first call in this article][article-scroll] and [about the second in this one][article-composition]

[gh-issues]: https://github.com/rhumaric/tinymation/issues
[article-intro]: https://romaricpascal.is/writing-about/animations-with-javascript-functions/
[article-scroll]: https://romaricpascal.is/writing-about/expressive-scroll-animations/
[article-composition]: https://romaricpascal.is/writing-about/composing-animations-through-functions
