---
postType: blog
title: Astronomically Fun
date: 2022-07-18T17:51:11.979Z
author: Pedro Kehl
tags:
  - Dev
description: Astro is a new static website builder with a mission to minimize
  the code delivered to the end user. It is build upon the ideas of "islands",
  "partial hydration" and makes it possible to use other frameworks such as
  React, Svelte, Vue and Solid under one roof.
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1657918513/blog/2864e840-2df2-11ec-b5e8-73b095e03049-astro_upwfwm.jpg
---
In my search for new frameworks to experiment with the concept of [JAMstack](https://jamstack.org/), I started to come across several mentions to [Astro](https://astro.build/). Astro is a static site generator at its core, but it also has SSR (*Server Side Rendering*).

I spent a good amount of time considering testing [Gatsby](https://www.gatsbyjs.com/), [Hugo](https://gohugo.io/) and [Next](https://nextjs.org/), but Astro has a set of features that made me choose it, even though it's still in beta. Firstly, the ease of syntax: everything in Astro's templates is pretty much pure HTML, CSS, and JS. Second, that unlike the other frameworks* I mentioned, Astro allows you to use components from other JS frameworks such as [React](https://pt-br.reactjs.org/), [Svelte](https://svelte.dev/), [Vue](https://vuejs.org/) and [Solid](https://www.solidjs.com/). I've wanted to test Svelte for some time (in a next post I'll explain why Svelte) but I didn't feel comfortable putting all my chips in it using [SvelteKit](https://kit.svelte.dev/). Last but not least, Astro has a concept that I find especially interesting: the idea of ​​"partial hydration".

By default, Astro delivers 0kb of JavaScript. This may seem counterintuitive, especially in a tool that is entirely JS-based, but the idea is that all JavaScript code can be precompiled to generate static pages. For what JS is really necessary for, such as interactions on the front, queries in an external API, etc., Astro just “hydrates”, that is, it delivers the code on demand in what is needed, as the programmer wants to define. Astro can load the scripts for each “[island](https://jasonformat.com/islands-architecture/)” (content block) as soon as the site loads, when the browser is out of tasks, or when the dynamic element enter the user's viewport, just like a lazyload for images, [among other triggers](https://docs.astro.build/en/reference/directives-reference/#client-directives).

In the code below, we can see a typical Astro page, coming from one of the developers' examples. At the top partial layout imports. The rest of the file is pretty much pure HTML.

```javascript
---
import Layout from "../layouts/Layout.astro";
import Card from "../components/Card.astro";
---

<Layout title="Welcome to Astro.">
	<main>
		<h1>Welcome to <span class="text-gradient">Astro</span></h1>
		<p class="instructions">
			Check out the <code>src/pages</code> directory to get started.<br />
			<strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		<ul role="list" class="link-card-grid">
			<Card
				href="https://docs.astro.build/"
				title="Documentation"
				body="Learn how Astro works and explore the official API docs."
			/>
			<Card
				href="https://astro.build/integrations/"
				title="Integrations"
				body="Supercharge your project with new frameworks and libraries."
			/>
			<Card
				href="https://astro.build/themes/"
				title="Themes"
				body="Explore a galaxy of community-built starter themes."
			/>
			<Card
				href="https://astro.build/chat/"
				title="Chat"
				body="Come say hi to our amazing Discord community. ❤️"
			/>
		</ul>
	</main>
</Layout>

<style>
	:root {
		--astro-gradient: linear-gradient(0deg, #4f39fa, #da62c4);
	}

	h1 {
		margin: 2rem 0;
	}

	main {
		margin: auto;
		padding: 1em;
		max-width: 60ch;
	}

	.text-gradient {
		font-weight: 900;
		background-image: var(--astro-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 100% 200%;
		background-position-y: 100%;
		border-radius: 0.4rem;
		animation: pulse 4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			background-position-y: 0%;
		}
		50% {
			background-position-y: 80%;
		}
	}

	.instructions {
		line-height: 1.6;
		margin: 1rem 0;
		background: #4f39fa;
		padding: 1rem;
		border-radius: 0.4rem;
		color: var(--color-bg);
	}

	.instructions code {
		font-size: 0.875em;
		border: 0.1em solid var(--color-border);
		border-radius: 4px;
		padding: 0.15em 0.25em;
	}
	.link-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		gap: 1rem;
		padding: 0;
	}
</style>
```

The most interesting part here is that the code of a `.astro` file is divided between 2 very distinct sectors: the top or *frontmatter* (referring to the markdown files that inspire it) and separated by 3 hyphens at the top and bottom of the code block `---` is everything that will be used to compose the page, but none of that code will be included in production. The part below the *frontmatter* is the one that will be used in the composition of the final page that will reach the user. In the case of the code above, `Layout` is the practically complete structure of the HTML page, which is being imported into frontmatter. In particular, it has a special markup, the `<slot />` which is where the rest of my index content will be rendered.

Astro uses [Vite JS](https://vitejs.dev/) as a module bundler, which in addition to being extremely fast, allows the use of a variety of tools without additional installations. As I mentioned, Typescript can be used, just identifying it with `lang="ts"`. You can also use Scss natively by identifying it as `lang="scss"`.

The simplest way to use Astro is with Markdown files: organizing them into folders. Astro automatically assembles the routes, creates the pages and everything else. It is also possible to load content from a variety of other sources, including consuming external APIs. In one of the tests I did, I used Astro to consume content generated by a WordPress through its Rest API. So it is possible to generate a completely static website, but powered by a *Headless* CMS that works behind the scenes (this makes room for a huge variety of content management systems, I recently tested Strapi and Netlify CMS with great results).

Overall, it was quite interesting to use Astro. Having started my tests with the platform still in beta, I understand that the documentation and community support is still insufficient. However, it is possible to test it in a good *playground* offered on the developers website, where there are several useful examples: [astro.new](https://astro.new/).

Next time I'll dive into my portfolio's code, explain some doubts and problems I had, as well as some solutions that could possibly help a new AstroNaut. To the next.

\*There is a semantic issue here: the people at Astro don't call the creation itself a framework. Some people started calling it a "metaframework" because it can embed other frameworks into it, which I think is appropriate.