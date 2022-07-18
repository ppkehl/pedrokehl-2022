---
postType: blog
title: An optimized way to include content blocks (components) in WordPress
date: 2019-03-04T13:52:17.621Z
author: Pedro Kehl
tags:
  - Dev
description: In this post I show a very flexible solution to get_template_part in Wordpress.
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1658153129/template_parts_h77ngc.png
---
O WordPress é bastante flexível quanto a forma de incluir parciais.

Pode-se usar funções nativas do PHP como [include()](http://php.net/manual/pt_BR/function.include.php) ou [include_once()](http://php.net/manual/pt_BR/function.include-once.php) ou mesmo [require()](http://php.net/manual/pt_BR/function.require.php) e [require_once()](http://php.net/manual/pt_BR/function.require-once.php), ou funções exclusivas do próprio WordPress como [get_template_part().](https://developer.wordpress.org/reference/functions/get_template_part/)

## Inclusão com get_template_part

A solução usando get_template_part é mais interessante, pois permite ao desenvolvedor mais flexibilidade para lidar com temas pai e temas filho. Se você por exemplo criar um tema filho e tentar chamar um bloco PHP pertencente ao tema pai, você precisaria inserir o caminho relativo completo do tema filho (onde por exemplo um pedaço do layout está sendo chamado) para o tema pai.

O get_template_part resolve isso de maneira inteligente e automática. Se você chamar alguma parcial usando essa função, ele primeiro checará se o tema filho a possui. Não encontrando, ele ira subir para o tema pai e tentar encontrar lá.

Se preciso incluir uma parcial chamada **loop.php** por exemplo, posso usar **get_template_part(loop.php)**. Se **loop.php** existir no tema filho, o WordPress sempre irá inseri-lo (pois essa é a premissa de ter temas pai e filhos), mas caso não encontre o **loop.php** será procurado no tema pai.

## Mas o get_template_part não resolve tudo

Mas digamos que a sua necessidade não seja apenas inserir uma parcial, mas parametrizá-la para poder mudar variáveis na inserção. Nesse caso, encontraríamos um problema. A única forma de passar parâmetros para o template herdado do pai seria usando variáveis globais.

Seu **loop.php** original poderia ser o seguinte:

```php
<?php
$the_query = new WP_Query(array(
        'post_type' => 'posts',
        'posts_per_page' => 10
    )
);
if ($the_query->have_posts()):
    while ($the_query->have_posts()):
        
        // Faça algo aqui

    endwhile;
endif;
wp_reset_postdata();
?>
```

Nesse exemplo o loop tem uma query onde procuro pelos 10 últimos posts  do tipo “posts”.

Mas digamos que no tema filho eu tenha um tipo de post customizado, chamado **livros.** Gostaria de usar o mesmo **loop.php** – pois a estrutura seria a mesma –  mas gostaria de substituir o post_type da minha query pelo post_type livros.

Poderia tentar algo assim:

```php
<?php
$post_type = 'livros'; 
get_template_part( 'loop.php' );
?>
```

E dentro do meu loop, chamaria a variável $post_type. Infelizmente essa solução não funcionaria. $post_type apareceria como não definida.

```php
<?php
$the_query = new WP_Query(array(
        'post_type' => $post_type, // Variável não definida
        'posts_per_page' => 10
    )
);
if ($the_query->have_posts()):
    while ($the_query->have_posts()):
        
        // Faça algo aqui

    endwhile;
endif;
wp_reset_postdata();
?>
```

Uma forma de resolver o problema é usar o include com outra função nativa do WordPress, a locate_template junto com o include nativo do PHP.

```php
<?php
$post_type = 'livros'; 
include( locate_template( 'loop.php', false, false ) ); 
?>
```

Nesse caso, a variável $post_type dentro do loop.php ficaria definida. Meu código funcionaria e teria um loop reutilizável.

## Uma solução ainda melhor

Mas é possível tornar o código ainda mais limpo, tornando todas as variáveis locais dentro da parcial, evitando variáveis “soltas” dentro do código.

Encontrei essa solução há algum tempo atrás, e ele ainda existe no gitHub em: <https://github.com/Smartik89/SMK-Theme-View/blob/master/functions.php>

A função seguinte usa o locate_template mas localiza as variáveis dentro do escopo da parcial. Eu preservei o nome da classe original, mas mudei o nome da função, por considerar mais simples:

```php
<?php
if (!class_exists('Smk_ThemeView')) {
    class Smk_ThemeView {
        private $args;
        private $file;
        public function __get($name) {
            return $this->args[$name];
        }
        public function __construct($file, $args = array()) {
            $this->file = $file;
            $this->args = $args;
        }
        public function __isset($name) {
            return isset($this->args[$name]);
        }
        public function render() {
            if (locate_template($this->file)) {
                include( locate_template($this->file) ); //Theme Check free. Child themes support.
            }
        }
    }
}
if (!function_exists('get_template_obj')) {
    function get_template_obj($file, $args = array()) {
        $template = new Smk_ThemeView($file, $args);
        $template->render();
    }
}
?>
```

O uso é muito simples. Para usar as variáveis com a parcial, faria o seguinte:

```php
<?php
get_template_obj('loop.php', array(
    'post_type'  => 'livros'
));
?>
```

Dentro do loop.php, teríamos a seguinte situação:

```phtml
<?php
$the_query = new WP_Query(array(
        'post_type' => $this->post_type, // Use o $this para acessar a variável
        'posts_per_page' => 10
    )
);
if ($the_query->have_posts()):
    while ($the_query->have_posts()):
        
        // Faça algo aqui

    endwhile;
endif;
wp_reset_postdata();
?>
```

Como no exemplo do uso da função nativa get_template_part, temos todas as vantagens do uso entre temas pai e filhos, inserção automática e ainda a opção de inserir parâmetros localizados!