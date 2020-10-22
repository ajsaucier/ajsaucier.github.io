---
layout: post
title: Test What You Embed
categories: accessibility
description: Even if you're embedding something onto your site that don't
  control, test it for accessibility before making a decision
---
At my day job, I was recently told to embed job listings from a third-party company onto our Human Resources page. After testing out the job search widget that gets embedded with JavaScript, it was easy to notice some glaring accessibility problems. 

## The Problems

Right away, I noticed that `outline: 0` is given to the focus state of all the focusable elements in the embedded widget. That should never be done. After a bunch of attempts to click on the correct link that shows advanced search filters, the state of the widget changes into a form (without any indication of this update given to assistive technologies) with some fields for narrowing down search results. Are any of these fields required? Nobody knows. Here's an example of the HTML from two of those form fields:

```
<div class="search_job_title">
	<label>Job title</label>
	<input type="text" name="s_title" id="s_title" maxlength="255" class="field" value="">					
</div>

<div class="search_city">
	<label>City or town</label>
	<input type="text" name="s_city" id="s_city" maxlength="255" class="field" value="">					
</div>
```

In this code block, the labels are neither implicitly or explicitly associated with their input fields. Assistive technology won't be able to tell a user what to enter in the field when it receives focus - a clear failure of [WCAG 2.1 Success Criteria 1.3.1, Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) and just bad practice in general.

But the point of this post isn't to call out every WCAG failure and bad usability decision in this particular widget. It's to share my solution after quickly deciding that something inaccessible should not be embedded on a website, even though the powers that be might require it.

## The Solution

The third-party company that manages these job listings and provides the inaccessible job search tool also keeps the same information on their own web pages with a subdomain for each school region. While it doesn't have the advanced search features of the embedded widget, each job is listed as a standard anchor tag with visible focus indicators, and clicking on a job title brings you to an application form that has the basics of accessibility done correctly - labels explicitly associated with their input fields, for example. Since this is clearly the more accessible way for everyone to get this information and apply for the jobs - at least until the third-party company gets around to rebuilding their embeddable tools with accessibility in mind - I decided to link off to the job listing page instead of embedding anything.

So my advice would be this when it comes to embedding something onto your site:

Embed the widget/page/video/whatever it is onto your page and test it for accessibility with automatic tools and manual testing with a keyboard and assistive technology, just like you would test anything else you're working on. If the `<iframe>` is only being used to embed some JavaScript on the page (for some reason) or is purely decorative, it should have an `aria-hidden="true"` attribute on it; if its content is meant to add to the page, try to make sure its heading hierarchy makes sense with the rest of the page if you have control of the embedded content.

If it's a simple `<iframe>` that displays content from another accessible website, start off by at least making sure that it has a meaningful and unique `title` attribute that describes what's inside the frame. If it doesn't, you could add the attribute and its value by targeting the `<iframe>` element and using the `setAttribute` function.

If it has bigger problems than just missing a `title` attribute - like throwing an entirely inaccessible custom widget onto the page - try to find a more accessible alternative from the company. Or reach out to that company and point out the problems that need to be fixed. That would also benefit the users of other websites that use the widget or plan to use it in the future.