---
title: " Building a website with Astro: Frameworks and Services"
date: 2022-08-04T22:39:18.959Z
author: Pedro Kehl
tags:
  - Dev
description: In this first post about creating my portfolio using Astro, I'll
  start by commenting on my process of choosing the parts that make it up.
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1659661486/blog/Frame_36_rygkma.png
---
## Backend

[As I said before](https://pedrokehl.net/en/blog/wordpress-in-my-past-present-and-future/), my primary development experience has always been with WordPress and PHP. WP is a monolithic platform, with fully integrated back and frontend. Jamstack, which was the paradigm I wanted to study, has more diversity and, at the same time, greater complexity. There are dozens of choices to make in the backend, at least 4 or 5 of them quite interesting to use as a CMS. I tested some of them, first the WP itself, which can be used headless, consuming the content via [REST](https://developer.wordpress.org/rest-api/), or with the plugin [WPgraphQL](<https ://www.wpgraphql.com/>), which works great.

As the purpose was to learn new things, I avoided the temptation to use it. Then I tested other options like [Cosmic CMS](https://www.cosmicjs.com/) - a very flexible cloud based solution. Next, I tested [Strapi](https://strapi.io/), which has both paid and free versions, and is quite powerful. In terms of ease of setup, Strapi reminded me a bit of [Craft](https://craftcms.com/), a PHP-based CMS. As much as I liked both options, for my project scope they seemed overkill.

It was then that I came across, by chance, with the solution I ended up adopting: [Netlify CMS](https://www.netlifycms.org/). Netlify was created by the company of the same name that helped shape the concept of [Jamstack](https://jamstack.org/). I already intended to host my new portfolio there, so I decided to explore it, and ended up opting for it.

## The Chosen One: Netlify CMS

The CMS proposal is very interesting. Rather than using a database coupling to a service and organizing data, Netlify works by directly editing files hosted on a GIT platform, such as [GitHub](https://github.com/), [Bitbucket](https://bitbucket.org/), [Gitlab](https://about.gitlab.com/), etc.

Using a config yml file you can specify different "collections" like posts, pages and config files. For "textual" types like posts and pages, the standard output is in markdown files, which are easily consumed by Jamstack fronts. For configuration files (say, a menu structure or a website's color palette), you can export the files as JSON, yml, and so on.

Each field type is considered a different [widget](https://www.netlifycms.org/docs/widgets/), each accepting parameters. The setup process is extremely simple. As another (big) point in its favor, the CMS comes ready for the [internationalization](https://www.netlifycms.org/docs/configuration-options/#locale): just define the global definitions and then define field by field how the process will be.

Bellow you can see an example of how the configuration file for Netlify CMS works: In the yml file I can configure each field exactly as it will appear in the admin. You can find more info [here](https://www.netlifycms.org/docs/configuration-options/).

```yaml
- name: "blog"
    label: "Blog"
    i18n:
      structure: multiple_files
      locales: [en, pt]
    folder: '_data/content/blog'
    create: true
    slug: "{{year}}-{{month}}-{{day}}T{{hour}}-{{minute}}-{{second}}--{{slug}}{{locale}}"
    fields:
      # Title
      - {label: "Title", name: "title", widget: "string", i18n: true}
      # Date
      - {label: "Publish Date", name: "date", widget: "datetime", i18n: duplicate}
      # Author
      - {label: "Author", name: "author", widget: "string", default: "Pedro Kehl", i18n: duplicate}
      # Tags
      - label: "Tags"
        name: "tags"
        widget: "select"
        i18n: duplicate
        multiple: true
        min: 1
        max: 12
        options: ["Design", "Visual Arts", "Random Thoughts", "Dev"]
      # Description  
      - {label: "Description", name: "description", widget: "text", i18n: true}
      # Body
      - {label: "Post", name: "body", widget: "markdown", i18n: true}  
      # Featured Image  
      - label: "Featured Image"
        name: "featuredImage"
        widget: "image"
        i18n: duplicate
        allow_multiple: false
        media_library:
          config:
            multiple: false  
```

When you save a post to Netlify CMS, the system creates a pull request in your Git provider. If the project is on a platform like [Netlify ](https://www.netlify.com/)or [Vercel](https://vercel.com/), they detect the pull and trigger a new build of the project with the new content. It's magically automatic.

## Frontend: Astro and Svelte

Here, too, there is no shortage of choices. Most frameworks or "meta frameworks" are based on [React](https://reactjs.org/). I understand the importance of React, but I wanted to explore other options. In terms of philosophy, I find the approach of [Svelte](https://svelte.dev/) very interesting. There are a few points that I find particularly attractive, and the first is the familiarity of the syntax. Svelte uses 3 blocks in its components: a script part, an HTML part and a CSS part. Even reactive structures, loops and conditionals are very simple to understand. Another point: Svelte is a compiler. The code going into production is precompiled to native JS to run in the browser. There are few "leftovers" from the part that, for example, would be the React framework code, and which in many cases would be unused.

The shortest way to use Svelte on the front would be to opt for [SvelteKit](https://kit.svelte.dev/). But I happened to come across a video that made me change my mind: a conversation [between Theo and Fred Schott, Astro CEO](https://www.youtube.com/watch?v=fp3mYVoMN7w).

Basically, Astro could become a playground for testing different frameworks, and with the advantage of being extremely fast and light, as [I explained in more detail here](https://pedrokehl.net/en/blog/astronomically-fun/).

With the choice of Astro, I chose to try to delegate as many reusable components to Svelte as possible. So I was learning both things at the same time.

To complete the package, I chose to use [Tailwind](https://tailwindcss.com/) for the CSS. It was also a tool I wanted to test, after many years of experimenting with utility classes. I explained a little about my experience [here](https://pedrokehl.net/en/blog/thoughts-on-tailwind-and-utility-classes/).

## "Serverless" Hosting: Netlify

I stayed between Netlify and Vercel to host the site. Netlify had the CMS authentication gateway facility, which works without any additional configuration. Vercel has an analytics part that it wanted to explore. I ended up opting for Netfly for the convenience. It also offers a very simple way to create contact forms in a Jamstack environment (although I eventually opted for a more agnostic solution using [Web3Forms](https://web3forms.com/)).

For the images, I chose [Cloudinary](https://cloudinary.com/), a service that manages, formats and delivers objects via CDN, and integrates masterfully with Netlify CMS.

The project repository is on GitHub.

## Conclusions

As much as the process of selecting all the components of this puzzle was laborious, it gave me a good idea of ​​the Jamstack landscape, the maturity of the idea, and made me move forward a good few years in experiences and learning. In the next post I will comment a little bit more about one of the biggest challenges of the project, which was to make it multilingual. The problems I faced and the solutions I found. See you then!