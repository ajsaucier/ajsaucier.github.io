---
layout: post
title: Voice Control and CSS Psuedo-elements
categories: blog
description: Pay attention to voice input methods like Voice Control on iOS when
  adding graphical elements like icons
---
iOS and Android both have methods for controlling your entire device with your voice. While screen readers are often the first thought people have when web accessibility is brought up, voice input is another important aspect that can be used by those with motor disabilities or anyone else who would rather use their voice than touch a screen with their dirty digits. 

It's a simple assistive technology to try out yourself. On iOS, go to the Settings, then Accessibility, then Voice Control. Once it's activated and you're on a website, you'll see tooltips that display the names of interactive elements on the page, like links and buttons. You might see the text that's visible in the link or button - in other words, the accessible name - with a funny little question mark inside a square next to it, shown in the screenshot below.

![A button with the text Go to Newsroom with a right-facing chevron. A tooltip shows above the button with the text Go to Newsroom and a question mark inside a square next to it](assets/images/voice-control-question.png)

Instead of adding a pseudo-element inside a link, button or other interactive element, instead use an SVG that can be properly hidden from assistive technologies. Pseudo-elements like FontAwesome icons aren't always understood by assistive technology, so a user won't be able to activate the element when it's part of the accessible name. Here's an example on how to do that without much more effort.