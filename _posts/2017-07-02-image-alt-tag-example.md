---
layout: post
title: A Thought on Image Alt Tags
categories: accessibility
description: Drawing inspiration from a book's image captions, this post looks at an approach to image alt captions using the context of the page's content.
---
After a shift in focus from the "new and cool" to the "usable by more people than those with perfect vision, hearing, motor skills, reading ability, brand new web browsers and massive screens", I find myself doing almost everything with an eye toward accessibility.

One of the most basic but overlooked aspects of web accessibility (including PDFs) is the art of writing useful descriptions in the `alt` attribute of images. From experience, they're often either ignored entirely or written in a way that has no benefit to a person using a screen reader or with images turned off (for example, `alt="Image of a dog"`).

While reading a biography recently - on a NOOK e-reader, which has no text-to-speech or audiobook functionality (*tisk tisk, Barnes and Noble*) -  I came across the obligatory middle section with images from the subject’s life from childhood onward (it's Cory MacClauchlin's biography of the prodigious yet tragic life of New Orleans author John Kennedy Toole). The images and their captions exemplified an excellent approach to writing `alt` tags - especially this one:

![Alt text example describing good practices for using context to describe images]({{ site.url }}/assets/images/alt-text-example.jpg)
(Credit: Cory MacClauchlin from his book *Butterly in the Typewriter: The Tragic Life of John Kennedy Toole and the Remarkable Story of
A Confederacy of Dunces*)

The image caption - which would be the value of the image's `alt` attribute in HTML - is "The English instructors enjoyed access to the officers' club where they would drink and socialize. With laughter in this eyes, Toole looks to Bob Young, Walter Carreiro prepares a smoke, and Toole's close friend Dave Kubach, whose typewriter he borrowed to begin *Confederacy*, digs into Christmas dinner."

This particular scene is incredibly important in the overall context of Toole's life and the subject of this biography. Imagine this image on a web page describing Toole's days as an English instructor in the military, before his mental illness took hold and started his descent. While [this description might be a little long](https://www.washington.edu/accessit/print.html?ID=1257), it vividly describes the scene and has a specific purpose - to explain a snapshot of Toole's demeanor at a certain point in his short life.

While [this article](http://webaim.org/techniques/alttext/) detailing best practices around image `alt` tags is required reading, I'd like to add a few tips of my own based on MacClauchlin's caption.

Alt text recommendations
-----

1. Is the image vital to understanding the page's content, or is it the focus of the page? If not, make it known with `alt=""`. No matter what, always have that `alt`.
2. Focus on the most important aspect of the image, not the entire thing. For example, the expression on a particular face or the importance of a particular person or certain people.
3. Set the scene with descriptive phrases like "with laughter in his eyes" or "confidently looking into the distance".
4. Avoid using phrases like "Image of", "Picture of" and "Photo of". This is pretty obvious and a waste of precious characters.
