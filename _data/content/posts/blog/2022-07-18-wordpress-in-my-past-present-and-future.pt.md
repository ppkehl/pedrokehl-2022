---
postType: blog
title: "WordPress no meu passado, presente e futuro "
date: 2022-07-15T13:03:47.037Z
author: Pedro Kehl
tags:
  - Dev
description: "O WordPress é um monstro: movimenta mais de 40% da internet
  mundial, é versátil, fácil de utilizar e possui grande suporte. Com o tempo,
  no entanto, algumas de suas qualidades se tornaram fontes de problemas.
  Discuto aqui alguns dos prós e contras da plataforma, que na minha opinião
  deixou de ter apelo universal para desenvolvedores."
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/b_rgb:ffffff/v1658149831/WordPress-logotype-wmark_fhqj1c.png
---
Passei um bom tempo negligenciando esse blog, mas pretendo reativá-lo com novidades em desenvolvimento web e também com pensamentos aleatórios quando der vontade.

Nesse primeiro post, vou falar um pouco sobre minha experiência de 15 anos desenvolvendo quase exclusivamente com o WordPress e porque, nos últimos anos, tenho começado a buscar alternativas à plataforma.

Não estou abandonando o Wordpress de vez: para muitos casos ele continua propiciando um equilíbrio saudável entre facilidade de desenvolvimento, usabilidade para o cliente (a maioria bem familiarizada com o admin do WP) e até mesmo performance (um dos calcanhares de Aquiles de qualquer plataforma web).

## Uma breve história

Comecei a usar WP em 2007, quando fui contratado para o desenvolvimento de um blog. Na época, blogs eram relevantes e o WP já se destacava como “A” solução para eles. Afinal, esse é o DNA do WP: a fonte de algumas das suas grandes virtudes e também de suas limitações.

O projeto saiu exatamente como esperado. O WP cumpriu seu papel maravilhosamente, e percebi (como muitos) o potencial de usá-lo para além da função estrita para a qual foi concebido originalmente (criação de blogs):uma solução rápida e eficiente para backend em diversos tipos de projetos.

Em algumas situações, era preciso improvisar: claramente, nem todos cenários eram previstos pelos desenvolvedores da plataforma. Com  o tempo, as coisas foram se tornando mais simples: a variedade de plugins resolvia a maior parte dos Edge cases, e a criação dos custom post types em união com o maravilhoso Advanced Custom Fields passou a dar conta da maioria das situações.

O WP se tornou uma plataforma cada vez mais flexível, com um forte apelo: cada nova versão era sempre quase 100% retrocompatível e atualizações raramente quebravam algo no site. O admin praticamente não mudou em todos esses anos, de modo que os clientes já tinham familiaridade com a usabilidade.

Desde o princípio, porém, percebia algumas fragilidades que com o tempo se tornaram mais pronunciadas. É sobre elas que falarei a seguir.

## Nem tudo são rosas

O legado do WP, e o quase obsessivo cuidado com a retrocompatibilidade começou a trazer uma série de limitações e problemas, que com o tempo se acumularam.

Listo algumas delas, sem ordem particular, já que o tamanho e o peso de cada ponto varia de acordo com a necessidade do site a ser desenvolvido: 

* Falta de um mecanismo nativo para criar sites multilíngues. Há "bons" plugins para isso, mas são caros e as versões gratuitas deixam a desejar. Além disso, outros plugins precisam estender suas funcionalidades para darem conta dos diferentes plugins de tradução. Fazer um site multilingues em WP geralmente não é uma experiência agradável.
* O WP só é tão poderoso e flexível quanto às possibilidades de estender seus campos padrão. No entanto, não há ferramenta nativa para criar custom fields. O plugin pago Advanced Custom Fields Pro se tornou fundamental em qualquer projeto que faço com WP. Ferramentas como Craft CMS, ou mesmo CMS's novos headless como Strapi entendem e resolvem essa necessidade sem precisar de plugins de terceiros. 
* O peso do legado: o admin do WP carrega uma série de pressupostos que faziam sentido na era "blog", mas não fazem sentido hoje. "Posts" e "Páginas" estão sempre pregados no menu, mesmo que eles não sejam a melhor descrição para as estruturas de dados do site. 
* Performance: É possível criar um site WP rápido e leve, mas isso não é automático. É preciso afinar cada tema desenvolvido para que o resultado final seja otimizado.
* Já que citei eles: pensar em "temas" me parece um paradigma de desenvolvimento ultrapassado. Fazia sentido (mais uma vez) quando o WP era uma plataforma de blogs, e de tempos em tempos podia-se facilmente alternar o visual do site, usando uma estrutura de dados comum. Na maioria dos casos, isso não funciona mais assim. 
* Busca. A busca nativa é muito deficiente e praticamente nada mudou em 20 anos.
* Finalmente, o editor Gutemberg. Mas isso vale um tópico só dele.

## Gutemberg, o editor de blocos

Gutemberg foi a maior revolução da plataforma, provavelmente desde a concepção. De certa forma é a resposta a muitos dos problemas que levantei: flexibilidade, estruturas de dados, custom fields. De uma hora para a outra, o WP Core pode lidar com todas essas questões, e ainda fazer frente para o avanço de plataformas como Squarespace e Wix, que eram muito precárias a princípio, mas se tornaram bem mais competentes nos últimos anos.

Mas o Gutemberg cria novos problemas. Muitos sites, especialmente corporativos, têm estruturas muito customizadas. Por vezes, uma home comporta componentes que não são atendidos pelos do Gutemberg, exigindo a criação de componentes customizados. Felizmente, o Advanced Custom Fields mais uma vez ajuda nessa tarefa, mas sem o mesmo tipo de experiência WYSIWYG dos componentes padrão. É possível chegar aos mesmos resultados, mas daí a curva de aprendizado e o tempo de desenvolvimento aumenta proporcionalmente.

Ainda assim, existe outro desafio. O Gutemberg cria potencialidades de customização no admin que muitos clientes corporativos simplesmente não desejam. Muitas vezes a missão de atualizar o site fica a cargo de pessoas não técnicas, onde a chance de "quebrar" o site ou pelo menos criar experiências estéticas desagradáveis torna o processo impraticável.

"Engessar" o admin muitas vezes é um benefício e não um problema (a feature, not a bug). Mas o WP não parece muito interessado em resolver essa questão. Desenvolvedores e usuários leigos hoje concorrem por uma mesma plataforma (o que também justifica o sucesso de plugins como o elementor, por exemplo) e a Automattic (a mantenedora do WP) claramente vê o futuro do WP indissociável do Gutemberg.

Como disse, continuo usando e provavelmente continuarei usando o WordPress por algum tempo. Apesar disso, começo a estudar situações onde não me vejo mais usando a plataforma no futuro. 

No próximo post vou tentar especificar os casos de uso onde vejo que o WP ainda faz sentido, e onde seria mais conveniente usar outras soluções, seja um CMS mais robusto ou outros paradigmas como o JAMstack.