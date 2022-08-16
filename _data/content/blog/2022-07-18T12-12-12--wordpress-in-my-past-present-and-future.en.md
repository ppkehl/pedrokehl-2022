---
postType: blog
title: WordPress in my past, present and future
date: 2022-07-15T13:03:47.037Z
author: Pedro Kehl
tags:
  - Dev
  - Misc
description: "WordPress is a monster: it powers more than 40% of the world's
  internet, it's versatile, easy to use and has great support. Over time,
  however, some of his qualities became sources of trouble. Here I discuss some
  of the pros and cons of the platform, which in my opinion has lost its
  universal appeal for developers."
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1658149831/blog/WordPress-logotype-wmark_fhqj1c.jpg
---
I spent a lot of time neglecting this blog, but I intend to revive it with news in web development and also with random thoughts when I feel like it.

In this first post, I will talk a little about my 15 years of experience developing almost exclusively with WordPress and why, in recent years, I have started to look for alternatives to the platform.

I'm not abandoning Wordpress for good: for many cases it continues to provide a healthy balance between ease of development, usability for the client (most of whom are well acquainted with the WP admin) and even performance (one of the Achilles heels of any platform). website).

## A brief history

I started using WP in 2007, when I was hired to develop a blog. At the time, blogs were relevant and WP already stood out as “The” solution for them. After all, this is WP's DNA: the source of some of its great virtues as well as some of its limitations.

The project came out exactly as expected. WP did its job wonderfully, and I realized (as many do) the potential to use it beyond the strict function it was originally conceived for (blogging): a quick and efficient solution for the backend in various types of projects.

In some situations, it was necessary to improvise: clearly, not all scenarios were foreseen by the platform developers. Over time, things became simpler: the variety of plugins solved most of the Edge cases, and the creation of custom post types in conjunction with the wonderful Advanced Custom Fields started to handle most situations.

WP became an increasingly flexible platform with a strong appeal: each new version was always nearly 100% backwards compatible and updates rarely broke anything on the site. The admin has barely changed in all these years, so customers are already familiar with the usability.

From the beginning, however, he noticed some weaknesses that over time became more pronounced. It is about them that I will speak next.

## It's not all roses

The legacy of WP, and the almost obsessive care with backwards compatibility, began to bring a series of limitations and problems, which over time accumulated.

I list some of them, in no particular order, since the size and weight of each point varies according to the needs of the site to be developed:

* Lack of a native engine to create multilingual websites. There are "good" plugins for this, but they are expensive and the free versions leave something to be desired. Also, other plugins need to extend their functionality to handle the different translation plugins. Making a multilingual website on WP is usually not a pleasant experience.
* WP is only as powerful and flexible as the possibilities to extend its default fields. However, there is no native tool to create custom fields. The Advanced Custom Fields Pro paid plugin has become fundamental in any project I do with WP. Tools like Craft CMS, or even new headless CMS's like Strapi understand and solve this need without needing third-party plugins.
* The weight of legacy: The WP admin carries a number of assumptions that made sense in the "blog" era, but don't make sense today. "Posts" and "Pages" are always nailed to the menu, even if they are not the best description for the site's data structures.
* Performance: It is possible to create a fast and lightweight WP site, but it is not automatic. It is necessary to fine-tune each theme developed so that the final result is optimized.
* Since I mentioned them: thinking about "themes" seems to me an outdated development paradigm. It made sense (again) when WP was a blogging platform, and from time to time you could easily change the look of the site using a common data structure. In most cases, it doesn't work that way anymore.
* Search. Native search is very poor and practically nothing has changed in 20 years.
* Finally, the Gutenberg editor. But that's worth a thread of its own.

## Gutenberg, the block editor

Gutenberg was the platform's biggest revolution, probably from conception. In a way it's the answer to many of the problems I raised: flexibility, data structures, custom fields. All of a sudden, WP Core can handle all these issues, and still face the advancement of platforms like Squarespace and Wix, which were very precarious at first, but have become much more competent in recent years.

But Gutenberg creates new problems. Many websites, especially corporate ones, have very customized structures. Sometimes, a home has components that are not supported by Gutenberg, requiring the creation of custom components. Fortunately, Advanced Custom Fields once again helps with this task, but without the same kind of WYSIWYG experience as standard components. It is possible to achieve the same results, but from there the learning curve and development time increases proportionately.

Still, there is another challenge. Gutemberg creates customization capabilities in the admin that many corporate customers simply don't want. Often the mission of updating the site is left to non-technical people, where the chance to "break" the site or at least create unpleasant aesthetic experiences makes the process impractical.

"Stunting" the admin is often a benefit and not a problem (a feature, not a bug). But WP doesn't seem very interested in solving this issue. Developers and lay users today compete for the same platform (which also justifies the success of plugins like Elementor, for example) and Automattic (the maintainer of WP) clearly sees the future of WP inseparable from Gutemberg.

As I said, I still use and will probably continue to use WordPress for some time to come. Despite this, I start to study situations where I no longer see myself using the platform in the future.

In the next post I will try to specify the use cases where I see that WP still makes sense, and where it would be more convenient to use other solutions, be it a more robust CMS or other paradigms like [JAMstack](https://jamstack.org/).