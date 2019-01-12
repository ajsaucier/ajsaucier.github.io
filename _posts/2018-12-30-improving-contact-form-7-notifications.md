---
layout: post
title: Improving Required Field Notifications in Wordpress Plugin
categories: accessibility
description: JavaScript code that gives more information on what the required field is missing in the Contact Form 7 Wordpress plugin.
---
The [Contact Form 7 plugin](https://wordpress.org/plugins/contact-form-7/) is a great option for your Wordpress site if you're into contact forms, and while it does have some decent accessibility features built in - like ARIA properties and roles - it doesn't give you a way to add details to notifications that appear below required fields when they aren't filled out. 

If a visitor to your site tries to submit a form and doesn't fill out the required First Name field, for example, all they'll see (and hear from a screen reader) is "Please fill the required field." For visually impaired users navigating through the form using a screen reader, this isn't the most helpul - especially when the number of required fields adds up.

They won't find out that they missed a required field until getting to the end of the form, so they'll most likely backtrack through each field using Shift+Tab keys. Once they get to the required field notification, this JavaScript snippet will let them know the name of the field they missed and prepare them to fill it out. 

It finds the closest `<label>` tag to the field that the required notification is referring to and extracts the textContent property from it. It then plugs that label name into the notification, making sure the user knows the correct name of the field they're missing without having to jump around hoping to connect the correct label and field. So instead of just "Please fill the required field", the notification might say "Please fill out the required field First Name".

This code can be added to whatever file you use in your theme for custom JavaScript functions. Ideally this file is being pulled into the footer of your site, right before the closing `</body>` tag of your page templates. 


```
var requiredSpans = document.getElementsByClassName('wpcf7-not-valid-tip');

var wpcf7Elm = document.querySelector('.wpcf7');

if (wpcf7Elm) {
    wpcf7Elm.addEventListener('wpcf7invalid', function(event) {
        for (var d = 0; d < requiredSpans.length; d++) {
            requiredSpans[d].textContent = "Please fill out the required field " + requiredSpans[d].parentNode.previousElementSibling.textContent;
        }
    }, false);
}
```
For this to work correctly you'll need a label, which the plugin doesn't generate automatically. It should be straight HTML above the required field. It should be created like this, in the plugin dashboard where you build your contact forms:

```
<label for="fist-name">First Name (required)</label>
[text* first-name id:first-name]
```