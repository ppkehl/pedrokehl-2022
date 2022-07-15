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

Vindo do WordPress como eu vim, onde tentava sempre criar módulos simples em meus templates, é muito interessante notar a sintaxe do Astro.

No código abaixo, que corresponde ao `index.astro` do meu portfolio, vemos 2 imports de layouts (ou partes de). O Astro usa nomes em maiúsculas para pontuar layouts ou componentes (a distinção é um tanto vaga, semântica, mas pode-se imaginar que um componente é uma parte da página - um hero, um anúncio, um carroussel - enquanto o layout descreve um conjunto de componentes). O terceiro import é de módulos JS (no caso Typescript, que pode ser usado nativamente) que usei para criar um sistema simples de suporte a traduções. Em seguida, uso o `Astro.glob` para buscar o arquivo Markdown que carrega o conteúdo da home, busco as opções de tradução de acordo com meu script, e por fim apresento a constante `page` para ser consumida pelo front.

```javascript
---
// Partes de layouts
import Base from '../layouts/Base.astro'
import Home from '../layouts/Home.astro'
// Imports de módulos
import {getTranslations, getDefaultLocale} from '../lib/translations';

// Buscar dados
const pages = await Astro.glob('../../_data/content/pages/home.md')
const pageData = await getTranslations({
  "posts": posts,
  "locale": getDefaultLocale()
})
const page = postData[0].content[0]
---

<Base translationsURL={post.translations}>
  <Home post={post} />
</Base>
```

Não entrarei em grandes detalhes nesse post, pois vou criar uma série exclusivamente falando da minha experiência com o Astro para criar meu portfolio. A parte importante é que o código de um arquivo `.astro` é dividido entre 2 setores bem distintos: a parte superior ou *frontmatter* (fazendo referência aos arquivos markdown que a inspiram) e separada por 3 hífens em cima e embaixo do bloco de código `---` é tudo aquilo que será usado para compor a página, porém nada desse código será incluído na produção. A parte abaixo do *frontmatter* é aquela que será usada na composição da página final que chegará ao usuário. No meu caso, `Base` é a estrutura praticamente completa da página em HTML, que esta sendo importada no frontmatter. De especial, meu Base tem uma marcação especial, o `<slot />` que é onde o restante do conteúdo do meu index será renderizado.

O Astro usa o [Vite JS](https://vitejs.dev/) como module bundler, que além de extremamente rápido, permite o uso de uma variedade de ferramentas sem instalações adicionais. Como citei, Typescript pode ser usado, identificando-o apenas com `lang="ts"`. Pode-se usar também Scss nativamente , identificando-o como `lang="scss"`.