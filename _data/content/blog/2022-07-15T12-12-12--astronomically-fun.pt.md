---
postType: blog
title: Astronomicamente Divertido
date: 2022-07-18T17:51:11.979Z
author: Pedro Kehl
tags:
  - Dev
description: Astro é um novo criador de sites estáticos com a missão de
  minimizar o código entregue ao usuário final. Conta com as ideias de "ilhas",
  "hidratação parcial" e possibilita usar outros frameworks tais como React,
  Svelte, Vue e Solid sob um mesmo teto.
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1657918513/blog/2864e840-2df2-11ec-b5e8-73b095e03049-astro_upwfwm.jpg
---
Na minha busca por novos frameworks para experimentar o conceito de [JAMstack](https://jamstack.org/), comecei a me deparar com várias citações ao [Astro](https://astro.build/). O Astro é um gerador de sites estáticos em sua essência, mas conta também com SSR (*Server Side Rendering*, ou Renderização no servidor).

Passei um bom tempo considerando testar o [Gatsby](https://www.gatsbyjs.com/), o [Hugo](https://gohugo.io/) e o [Next](https://nextjs.org/), mas o Astro possui um conjunto de características que me fez escolhê-lo, mesmo estando ainda em beta. Primeiro, a facilidade da sintaxe: tudo nos templates do Astro é praticamente HTML, CSS e JS puros. Segundo, que ao contrário dos outros frameworks* que citei, o Astro te propícia a usar componentes de outros frameworks JS como [React](https://pt-br.reactjs.org/), [Svelte](https://svelte.dev/), [Vue](https://vuejs.org/) e [Solid](https://www.solidjs.com/). Eu já queria há algum tempo testar o Svelte (num próximo post explico o porquê do Svelte) mas não me sentia confortável em colocar todas as minhas fichas nele usando o [SvelteKit](https://kit.svelte.dev/). Por último e não menos importante, o Astro tem uma concepção que considero especialmente interessante: a ideia de "hidratação parcial". 

Por padrão, o Astro entrega 0kb de JavaScript. Isso pode parecer um contrassenso, especialmente numa ferramenta que é totalmente baseada em JS, mas a ideia é que todo código em JavaScript possa ser pré-compilado gerando páginas estáticas. Para aquilo em que o JS é realmente necessário, como por exemplo interações no front, queries em uma API externa, etc, o Astro apenas “hidrata”, ou seja entrega o código sob demanda naquilo que é necessário, como o programador quiser definir. O Astro pode carregar os scripts de cada “[ilha](https://jasonformat.com/islands-architecture/)” (bloco de conteúdo) assim que o site carregar, quando o browser estiver sem tarefas, ou quando o elemento dinâmico entrar no viewport do usuário, da mesma forma que um lazyload para imagens, [entre outros gatilhos](https://docs.astro.build/pt-br/reference/directives-reference/#diretivas-de-cliente).

No código abaixo, podemos ver uma página típica do Astro, vinda de um dos exemplos dos desenvolvedores. Na parte superior imports de parciais de layout. O resto do arquivo é um HTML praticamente puro.

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

A parte mais interessante aqui é que o código de um arquivo `.astro` é dividido entre 2 setores bem distintos: a parte superior ou *frontmatter* (fazendo referência aos arquivos markdown que a inspiram) e separada por 3 hífens em cima e embaixo do bloco de código `---` é tudo aquilo que será usado para compor a página, porém nada desse código será incluído na produção. A parte abaixo do *frontmatter* é aquela que será usada na composição da página final que chegará ao usuário. No caso do código acima, `Layout` é a estrutura praticamente completa da página em HTML, que esta sendo importada no frontmatter. De especial, ele possui uma marcação especial, o `<slot />` que é onde o restante do conteúdo do meu index será renderizado.

O Astro usa o [Vite JS](https://vitejs.dev/) como module bundler, que além de extremamente rápido, permite o uso de uma variedade de ferramentas sem instalações adicionais. Como citei, Typescript pode ser usado, identificando-o apenas com `lang="ts"`. Pode-se usar também Scss nativamente , identificando-o como `lang="scss"`. 

A forma mais simples de usar o Astro é com arquivos Markdown: organizando-os em pastas. O Astro automaticamente monta as rotas, cria as páginas e tudo mais. É possível também carregar o conteúdo de uma variedade de outras fontes, inclusive consumindo API's externas. Em um dos testes que fiz, usei o Astro para consumir conteúdo gerado por um WordPress através do seu API Rest. Assim é possível gerar um site completamente estático, mas alimentado por um CMS *Headless* que atua nos bastidores (isso abre espaço para uma variedade enorme de sistemas de manejo de conteúdo, testei recentemente o Strapi e o Netlify CMS com ótimos resultados).

No final das contas, foi bastante interessante usar o Astro. Por ter iniciado meus testes com a plataforma ainda em beta, entendo que a documentação e o suporte da comunidade ainda é insuficiente. Porém, é possível testá-lo num bom *playground* oferecido no site dos desenvolvedores, onde há varios exemplos úteis: [astro.new](https://astro.new/).

Numa próxima oportunidade vou mergulhar no código do meu portfolio, explicitar algumas dúvidas e problemas que tive, bem como algumas soluções que podem eventualmente ajudar um novo AstroNauta. Até a próxima.

\*Há uma questão semântica aqui: o pessoal do Astro não chama a própria criação de framework. Algumas pessoas começaram a chamá-lo de "metaframework" por ele conseguir embarcar outros frameworks dentro dele, termo que acho apropriado.