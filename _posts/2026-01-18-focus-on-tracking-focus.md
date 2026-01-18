---
layout: post
title: Focus on tracking focus
categories: accessibility
description: There is a simple way to track focus in real time with Chromium browsers, which many developers are not aware of.
---

I haven't written a blog post in six years.

During those six years, I've helped a lot of development teams improve the accessibility of their web apps and sites. The most common issue that I come across by a long shot is a lack of testing for keyboard focus management. It seems to be the thing that most developers don't consider at all - things like headings not being marked up properly and images not having text alternatives are still prominent issues, but when I mention them to developers, they usually respond with something like, "Oh yeah, I forgot about that." When I mention keyboard focus and how it goes to the `<body>` element when a "Delete" button is activated and gets removed from the DOM or when a modal dialog is closed, the response is more along the lines of, "Oh, I didn't think about that."

My advice is always the same:

1. [Add a live expression in Chrome](https://developer.chrome.com/docs/devtools/accessibility/focus) that lets you track focus.
2. Keep the Console tab open in the Dev Inspector.
3. Track where focus is going in real time, all the time.

This is also what I recommend to prove that focus does not actually go to the correct place automatically, even though browsers do their best to choose a logical place to put it. Even though sighted keyboard users can usually continue tabbing through the page from a decent place, blind assistive technology users will know that focus was lost to the top of the page. If using a screen reader, for example, they will hear the page title announced to them instead of the name of the button that they last clicked to open the dialog that was just closed. Unexpected at the very least, and potentially quite confusing.

The live expression gives you the same result as going into the Dev Inspector console and typing `document.activeElement` every time you want to check the focus location. It speeds up the process and makes sure you can track focus even when there are no visible focus indicators.

So the TL;DR version of this already short post is: Always track keyboard focus, and use the live expression to make it easier.
