---
postType: blog
title: Astronomicamente Divertido
date: 2022-07-15T20:49:00.816Z
author: Pedro Kehl
tags:
  - Dev
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1657918513/2864e840-2df2-11ec-b5e8-73b095e03049-astro_upwfwm.jpg
---
Na minha busca por novos frameworks para experimentar o conceito de [JAMstack](https://jamstack.org/), comecei a me deparar com várias citações a um novo queridinho dos desenvolvedores: o [Astro](https://astro.build/).

Pensei em testar o [Gatsby](https://www.gatsbyjs.com/), o [Hugo ](https://gohugo.io/)e o [Next](https://nextjs.org/), mas o Astro tinha um conjunto de características que me fez escolhê-lo, mesmo estando ainda em beta. Primeiro, a facilidade da sintaxe: tudo nos templates do Astro é praticamente HTML, CSS e JS puros. Segundo, que ao contrário dos outros frameworks que citei, o Astro te propícia a usar componentes de outros frameworks JS como [React](https://pt-br.reactjs.org/), [Svelte](https://svelte.dev/), [Vue](https://vuejs.org/) e [Solid](https://www.solidjs.com/). Eu já queria há algum tempo testar o Svelte (num próximo post explico o porquê do Svelte) mas não me sentia confortável em colocar todas as minhas fichas nele usando o [SvelteKit](https://kit.svelte.dev/) por exemplo. Por último e não menos importante, o Astro tem uma concepção que considero especialmente interessante: a ideia de "hidratação parcial". 

Por padrão, o Astro entrega 0kb de JavaScript. Isso pode parecer um contrassenso, especialmente numa ferramenta que é totalmente baseada em JS, mas a ideia é que todo código em JavaScript possa ser pré-compilado gerando páginas estáticas. Para aquilo em que o JS é realmente necessário, como por exemplo interações no front, queries em uma API externa, etc, o Astro apenas “hidrata”, ou seja entrega o código sob demanda naquilo que é necessário, como o programador quiser definir. O Astro pode carregar os scripts de cada “[ilha](https://jasonformat.com/islands-architecture/)” (bloco de conteúdo) assim que o site carregar, quando o browser estiver sem tarefas, ou quando o elemento dinâmico entrar no viewport do usuário, da mesma forma que um lazyload para imagens.