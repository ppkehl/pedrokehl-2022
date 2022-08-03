---
postType: blog
title: Thoughts on Tailwind and utility classes
date: 2022-07-26T14:14:19.792Z
author: Pedro Kehl
tags:
  - Dev
description: "Tailwind is a utility CSS framework. It is also one of the most
  polarizing topics in frontend discussions. I see passionate articles defending
  and attacking the concept with equal intensity. I will try here to analyze my
  experience with it and comment on whether or not I intend to use it in the
  future (spoiler: yes)."
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1658845856/blog/tailwind_uvkxhj.png
---
I remember the first time I tested a utility framework (maybe in 2017?), at the time also called *“monolithic”* or *“immutable”*. I chose Tachyons, which in the beginning didn't even have basic configuration possibilities. Classes were predetermined, there was no post-processing like a “purge” to rid the frontend of unused classes. The total CSS file weighed around 70k.

My interest in Tachyons started when I happened upon a long [article](<https://hackernoon.com/full-re-write-with-tachyons-and-functional-css-a-case-study-part-1- 635ccb5fb00b>) which recounted the experience of rewriting a website with it. The article apparently gained some traction, even generating some debates on the net. It took me to a few other texts, [among them by the toolkit mentor himself](http://mrmrs.github.io/writing/scalable-css/), Adam Morse, radically strong critics [against the approach](<https ://www.zeldman.com/2017/01/03/kiss-my-classname/>) and also to some [more nuanced arguments](<https://johnpolacek.medium.com/kiss-my-classname-a -counterpoint-3ca41f0aed1a>).

It was truly an adventure to develop my first website with Tachyons. I was traveling when I had to develop a website in a maximum of two weeks. In retrospect, I realize how crazy it was to bet on the framework under those circumstances, but I was younger and fearless.

Despite the initial learning curve - like remembering the name of the classes - I managed to master it quickly, delivered the site ahead of schedule and was happy to discover a new tool. Still, I didn't think Tachyons was mature enough, and I dropped it after the experience. The idea of ​​using utility classes, however, remained with me.

I've always tried to write my CSS in an organized way and take advantage of cascading inheritance to my advantage. I've adopted [BEM](http://getbem.com/introduction/) (Block Element Modifier), and I've always been on the lookout for new ways of thinking about CSS. I read a lot about the idea of ​​"[atomic CSS](https://atomicdesign.bradfrost.com/)" created by Brad Frost. One of the most interesting I've found lately is [CUBE CSS](https://cube.fyi/), acronym for Composition, Utility, Block and Exception. I want to write about it in the future, which I consider an interesting “halfway” between semantic and utility classes.

The problem with CSS is that it is **HARD**. Much more than most of us admit. At the same time, it is simple enough to allow it to be used “wrongly”. I put it wrong in quotes, as there is no rigid framework for how CSS should be written. There are good practices, there are methodologies, but there is no “gold standard”. BEM is great, it organizes the code clearly, but it doesn't solve everything by itself. When taking third-party projects to do maintenance, it is not immediately clear what the reasoning was, how inheritances were thought, etc. CSS pre-processors like Sass and Less came to help a lot, but they created new difficulties, such as the use of m*ixins* in the project: they can make it immensely easier, but when they come from third parties, they need to be understood. You see, none of these are unsolvable problems. They are setbacks. They take hours of development, attention and neurons. Part of how you decide to organize CSS also depends on subjective decisions. In a way, each one writes their styles in a personal way.

Aside from design decisions and methodologies, there's another issue: customers change their minds. A series of "cards" can become slides. Or items in a list. Or content whose semantics of the classes we define in our *BEM* schema will no longer make sense. Morse's article stuck in my head. More than the Tachyons framework itself.

In works developed in teams, the generating logic of the CSS is often lost or ends up being filtered by conflicting views of how the code should be written. In an ideal world, teams are organized, rules are clear and everyone speaks the same language. In reality, CSS tends to grow haphazardly, piling up classes and exceptions.

This is precisely where, in my view, utility classes come to help a lot. HTML with Tailwind classes is, without a doubt, ugly (it seems to me that this is an unambiguous question). But it translates, in a simple way, all the logic of that block or component. More than that, it becomes portable and can be injected into other projects easily. No issues with inheritance, no hidden mixins. Tailwind is the “*[WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)*” expression in CSS. Used with modern IDE's like VS Code, it is possible to use code hints for all classes, in addition to being able to visualize the code of each one of them with a simple hover.

More than that: web development has increasingly moved away from the notion of separation of concepts from the past. One of the most important factors of this change is JavaScript frameworks such as React, Vue, Solid etc. In general, componentization has broken down CSS blocks into portable units, but without necessarily decreasing the verbosity of the code. Same properties in different components keep generating duplicate properties in the CSS delivered to the browser.

HTML pages no longer work like the old inspirational [CSS Zen Garden](http://www.csszengarden.com/). The content of the modern internet is much more in structured data delivered via API's - whether [REST](https://developer.mozilla.org/pt-BR/docs/Glossary/REST), [GraphQL](<https://graphql .org/>) or [tRPC](https://trpc.io/) - than in HTML with semantic content.

Within this logic, Tailwind and the like seem to me to be a clearer expression of reality. Instead of trying to standardize a methodology capable of giving consistency to increasingly complex projects, utility frameworks are more pragmatic. They embrace the difficulty of writing CSS by delivering unique and unambiguous micro classes. They are also [easily adaptable](https://www.michaelmang.dev/blog/integrating-design-tokens-with-tailwind) to host design tokens, creating consistency and scalability.