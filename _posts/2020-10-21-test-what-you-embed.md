---
layout: post
title: Test What You Embed
categories: accessibility
description: Even if you're embedding something onto your site that don't have
  control of, test it for accessibility
---
At my day job, I was recently told to embed job listings from a third-party company onto our Human Resources page. After testing out the job search widget that gets embedded with JavaScript, it was easy to notice some glaring accessibility problems. For example:

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

In this code block, the labels are neither implicitly or explicitly associated with their input fields. Assistive technology won't be able to tell a user what to enter in the field when it receives focus - a clear failure of [WCAG 2.1 Success Criteria 1.3.1, Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) and just bad practice.