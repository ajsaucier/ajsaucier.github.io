---
layout: post
title: Voice Control and CSS Psuedo-elements
categories: blog
description: Pay attention to voice input methods like Voice Control on iOS when
  adding graphical elements like icons
---
Instead of adding a pseudo-element inside a link, button or other interactive element, instead use an SVG that can be properly hidden from assistive technologies. Pseudo-elements like FontAwesome icons aren't always understood by assistive technology, so a user won't be able to activate the element when it's part of the accessible name. Here's an example on how to do that without much more effort.