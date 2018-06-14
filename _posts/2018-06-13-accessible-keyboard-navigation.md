---
layout: post
title: Accessible Keyboard Navigation
categories: accessibility
description: An example of an accessible navigation using pure JavaScript, HTML and CSS.
---
There are as many different types of website navigations as there are different websites, though not a whole lot can be accessed fully without having to use the mouse. Many users either can't (or just would rather not) use a mouse, so they'd have no way of seeing all the pages available on the site. This isn't ideal, or even fair.

With inspiration from a [CSS-Tricks article by Una Kravets](https://css-tricks.com/solved-with-css-dropdown-menus/) and an associated comment by Marcy Sutton for improvement, I forked that Codepen and took it down a different path.

You can check out this [accessible keyboard nav example on Codepen](https://codepen.io/ajsaucier/pen/OZOQox). It's currently built for a one-level dropdown.

<p data-height="265" data-theme-id="0" data-slug-hash="OZOQox" data-default-tab="js,result" data-user="ajsaucier" data-embed-version="2" data-pen-title="Simple CSS Dropdown Menu with Enter, arrow keys and ARIA" class="codepen">See the Pen <a href="https://codepen.io/ajsaucier/pen/OZOQox/">Simple CSS Dropdown Menu with Enter, arrow keys and ARIA</a> by Adam (<a href="https://codepen.io/ajsaucier">@ajsaucier</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Background

Here's the quote from [Marcy Sutton](https://twitter.com/marcysutton) on how to make a navigation more accessible: 

>Thanks for including accessibility support! One thing that’s a pain as a keyboard user, however, is being forced through all the sub-menu items when tabbing. Typically for larger mega-menus you need to do a little more work for proper UX: either treat the whole thing as a single tab stop and use the arrow keys, or only make the top-level items tabbable. The sub items can then be skipped over with TAB but accessed with an enter key to enable a sub-menu, and arrow keys to reach each one when open (Target.com does this). It helps keyboard productivity not to be forced through all of the sub items.

Definitely a good plan, especially for sites with a lot of pages. The top level pages need to be well organized so a user can tell where the child page they're looking for is. If not, it would defeat the whole purpose and force users to open every dropdown and search through every level.

## JavaScript

As always, my JavaScript can be improved, shortened, optimized, etc. by a better developer than me. But this is what it allows for:
- Tab key goes forward on top level nav items, Shift+Tab goes backwards
- Enter key opens submenu and automatically brings focus to first item
- Up and Down keys traverse submenu items
- Esc key closes submenu currently being navigated
- Changes the `aria-expanded` attribute between "true" and "false" when the submenus are opened or closed

There's a commented out code block at the bottom of the JS section that copies Target's idea of adding a Close list item when the end of the submenu is reached by keyboard. Feel free to check that out if you're interested. 

The nav can also be used with a mouse by clicking on each top level item to open and close it.

## HTML and CSS

I left the colors the same as the original Codepen example, but added `<role="menu">` to the main `<ul>` of each menu and `<role="menuitem">` to each menu item `<li>`. I also added a simple `<span aria-hidden="true">&#x25be;</span>` as a downward arrow.

## Thanks

Thanks for reading! I hope this can at least be a starting point for those building an accessible navigation. And a huge thanks goes out to [Heydon Pickering](https://twitter.com/heydonworks) for his help and advice on this.