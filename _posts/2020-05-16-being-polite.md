---
layout: post
title: Be Polite
categories: accessibility
description: WAI-ARIA recommendations for an accessible content slider are being
  followed by the Animal Crossing website.
---
After finding a [WAI-ARIA recommendation for a more accessible content slider](https://www.w3.org/TR/wai-aria-practices/#carousel), I came across one on the [Animal Crossing website](https://www.animal-crossing.com) that happens to use the same technique. 

Here's the code snippet from that slider:

```
<div class="birthday__copy" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
  <h3 class="p birthday__text" aria-live="polite"><span class="birthday__label">Today is</span><span class="birthday__name">Ike's Birthday</span></h3>
  <nav class="birthday__nav" aria-label="Character birthdays">
    <button class="prev"><span class="visually-hidden">Go to previous day's birthday character.</span></button>
    <button class="next is-disabled" disabled="true"><span class="visually-hidden">Go to next day's birthday character.</span></button>
  </nav>
</div>
```

Notice the `aria-live: polite` property on the heading level 3. When the text slider is moved with the next and previous buttons (which also have some very distinct visual focus indicators), the content inside that heading changes, which sets off the `aria-live` property. The W3C recommendation states that the property should be applied on the "element wrapping the set of slide elements," but since the content changes inside the heading itself, the approach works the same way here.

Since it's set to `polite`, the screen reader doesn't interrupt anything else being said - it waits until the previous statement is finished first. If `aria-live` is set to `assertive`, it will cut off anything the screen reader is currently saying and immediately read the alert. This is clearly not the approach you'd want to use for something as inconsequential as an Animal Crossing character's fictional birthday.

This might seem straightforward, but it's amazing how few text sliders I've come across use this technique (this is the only time I've come across it). Of all the Wordpress carousel and text slider plugins out there, none of them that I've seen implement this technique. It works well - when a button is pressed and content changes, the screen reader user is notified and the content is read to them. If the content updated is too long - more than one or two sentences, according to accessibility professional Leonie Watson - another technique would be to use a live region that simply lets the user know that new text loaded, giving the user the choice if they want to read it or not instead of automatically speaking to them. Nothing is worse than giving a screen reader user silence after an interaction updates content.

The most important thing to consider when using this technique is whether or not the slider moves automatically. First of all, it just shouldn't. But if it has to, the `aria-live` property MUST NOT be set to `polite` or `assertive`. This would make the page completely inaccessible, as it would start reading content to the user unexpectedly every time the slider moves. So yeah, don't do that. Also, maybe just don't use a text slider at all!

By the way, I ended up on the Animal Crossing site when reading a [blog post by Val Head about the prefers-reduced-motion query](https://valhead.com/2020/05/09/reduced-motion-in-the-wild/). It seems that Nintendo has at least slightly improved the accessibility of its websites recently (within the last year, according to the Web Archive backups from May 2019, where the focus styles were barely distinguishable and the option to reduce motion wasn't there). It has a noticeable focus style on focusable elements, similar to that used on the Microsoft site - a dark two-pixel wide dashed outline.