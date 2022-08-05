---
title: "Desenvolvendo um site com Astro: Frameworks e Serviços"
date: 2022-08-04T22:39:18.959Z
author: Pedro Kehl
tags:
  - Dev
description: "Neste primeiro post sobre a criação do meu portfólio usando o
  Astro, vou começar comentando sobre o meu processo de escolha das partes que o
  compõem. "
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1659661486/blog/Frame_36_rygkma.png
---
## Backend

[Como disse antes](https://pedrokehl.net/pt/blog/wordpress-no-meu-passado-presente-e-futuro/), minha experiência primária em desenvolvimento sempre foi com o WordPress e PHP. O WP é uma plataforma monolítica, back e frontend totalmente integrados. Já o Jamstack, que era o paradigma que eu queria estudar, apresenta mais diversidade, e ao mesmo tempo maior complexidade. Há dezenas de escolhas para se fazer no backend, pelo menos 4 ou 5 delas bastante interessantes para se usar como CMS. Testei algumas delas, primeiramente o próprio WP, que pode ser usado de modo headless, consumindo o conteúdo via [REST](https://developer.wordpress.org/rest-api/), ou com o plugin [WPgraphQL](https://www.wpgraphql.com/), que funciona muito bem. 

Como o intuito era aprender coisas novas, fugi da tentação de usá-lo. Em seguida, testei outras opções como o [Cosmic CMS](https://www.cosmicjs.com/) - uma solução baseada em nuvem bastante flexível. Em seguida, testei o [Strapi](https://strapi.io/), que possui versões pagas e gratuitas, e é bastante poderoso. Em termos de facilidade de configuração, o Strapi me lembrou um pouco o [Craft](https://craftcms.com/), CMS baseado em PHP. Por mais que tenha gostado de ambas opções, para meu escopo de projeto as duas pareciam mais complexas do que o necessário.

Foi então que cruzei, por acaso, com a solução que acabei adotando: o [Netlify CMS](https://www.netlifycms.org/). O Netlify foi criado pela empresa de mesmo nome que ajudou a dar forma ao conceito de [Jamstack](https://jamstack.org/). Já tinha a intenção de hospedar o meu novo portfólio lá, resolvi explorá-lo, e acabei optando por ele.

## O escolhido: Netlify CMS

A proposta do CMS é muito interessante. Ao invés de usar um banco de dados acoplado a um serviço que organiza e distribui os dados, o Netlify funciona editando diretamente arquivos hospedados em uma plataforma GIT, tais como [GitHub](https://github.com/), [Bitbucket](https://bitbucket.org/), [Gitlab](https://about.gitlab.com/), etc. 

Usando um arquivo yml de configuração, pode-se especificar diferentes "coleções" como posts, páginas e arquivos de configuração. Para tipos "textuais" como posts e páginas, a saída padrão é em arquivos markdown, que são facilmente consumidos por fronts Jamstack. Para arquivos de configuração (digamos, a estrutura de um menu ou a paleta de cores do site), é possível exportar os arquivos como JSON, yml, entre outros.

Cada tipo de campo é considerado um [widget](https://www.netlifycms.org/docs/widgets/), cada um aceitando diferentes parâmetros. O processo de configuração é extremamente simples. Como mais um (grande!) ponto a favor, o CMS vem pronto para [internacionalização](https://www.netlifycms.org/docs/configuration-options/#locale): basta configurar as linguagens globais e depois especificar campo a campo como será o processo.

Abaixo você pode ver um exemplo do arquivo de configuração do Netlify CMS. No arquivo yml, configuro cada campo, exatamente como como aparecerá no admin. Você pode encontrar mais informações sobre as opções [aqui](https://www.netlifycms.org/docs/configuration-options/).

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

Quando você salva um post no Netlify CMS, o sistema cria um pull request no seu provedor Git. Se o projeto está numa plataforma como [Netlify ](https://www.netlify.com/)ou [Vercel](https://vercel.com/), elas detectam o pull e desencadeiam um novo build do projeto com o novo conteúdo. É magicamente automático.

## Frontend: Astro e Svelte

Aqui também não faltam escolhas. A maioria dos frameworks ou "meta frameworks" se baseia em [React](https://pt-br.reactjs.org/). Eu compreendo a importância e o tamanho do React, mas queria explorar outras opções. Em termos de filosofia, acho muito interessante a abordagem do [Svelte](https://svelte.dev/). São alguns pontos que acho particularmente atraentes, e o primeiro é a familiaridade da sintaxe. O Svelte usa 3 blocos em seus componentes: uma parte de script, uma de HTML e uma de CSS. Mesmo as estruturas reativas, os loops e condicionais são muito simples de entender. Outro ponto: o Svelte é um compilador. O código que vai para produção é pré-compilado para JS nativo para ser rodado no browser. Há poucas "sobras" da parte que, por exemplo, seria o código do framework do React, e que em muitos casos ficaria ocioso. 

O caminho mais curto para usar o Svelte no front seria optar pelo [SvelteKit](https://kit.svelte.dev/). Mas eu por acaso cruzei com um vídeo que me fez mudar de ideia: uma conversa [entre Theo e Fred Schott, CEO do Astro](https://www.youtube.com/watch?v=fp3mYVoMN7w).

Basicamente, o Astro poderia se tornar um playground para testar diferentes frameworks, e com a vantagem de ser extremamente rápido e leve, como expliquei [em mais detalhes aqui](https://pedrokehl.net/pt/blog/astronomicamente-divertido/).

Com a escolha do Astro, optei por tentar delegar o máximo possível os componentes reutilizáveis para o Svelte. Assim ia aprendendo as duas coisas ao mesmo tempo.

Para completar o pacote, escolhi usar o [Tailwind](https://tailwindcss.com/) para o CSS. Também era uma ferramenta que queria testar, depois de muitos anos que tinha experimentado classes de utilidades. Expliquei um pouco sobre a minha experiência [aqui](https://pedrokehl.net/pt/blog/pensamentos-sobre-o-tailwind-e-classes-de-utilidades/).

## Hospedagem "Serverless": Netlify

Fiquei entre a Netlify e a Vercel para hospedar o site. A Netlify tinha a facilidade do gateway de autenticação do CMS, que funciona sem nenhuma configuração adicional. A Vercel tem uma parte de analytics que queria explorar. Acabei optando pela Netfly pela comodidade. Ela também oferece uma forma bastante simples de criar formulários de contato num ambiente JAMstack (apesar de ter optado no final por uma solução mais agnóstica usando o [Web3Forms](https://web3forms.com/)). 

Para as imagens, escolhi a [Cloudinary](https://cloudinary.com/), um serviço que gerencia, formata e entrega os objetos via CDN, e se integra magistralmente com o Netlify CMS.

O repositório do projeto ficou no GitHub.

## Conclusões

Por mais que o processo de seleção de todos os componentes deste quebra cabeças tenha sido trabalhoso, ele me deu uma boa ideia do panorama do JAMstack, da maturidade da ideia, e me fez avançar uns bons anos em experiências e aprendizados. No próximo post vou comentar um pouco sobre um dos maiores desafios do projeto, que foi torná-lo multilingue. Os problemas que enfrentei e as soluções que encontrei. Até lá!