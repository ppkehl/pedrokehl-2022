---
postType: blog
title: An optimized way to include content blocks in WordPress
date: 2019-03-04T13:52:17.621Z
author: Pedro Kehl
tags:
  - Dev
description: In this post I show a very flexible solution to get_template_part in Wordpress.
featuredImage: https://res.cloudinary.com/ppkehl/image/upload/v1658153129/template_parts_h77ngc.png
---
WordPress is very flexible about how to include partials.

You can use native PHP functions like [include()](https://www.php.net/manual/en/function.include.php) or [include_once()](https://www.php.net/manual/en/function.include-once.php) or even [require()](https://www.php.net/manual/en/function.require.php) and [require_once()](https://www.php.net/manual/en/function.require-once.php), or functions unique to WordPress itself such as [get_template_part().](https://developer.wordpress.org/reference/functions/get_template_part/)

## Inclusion with get_template_part

The solution using `get_template_part` is more interesting as it allows the developer more flexibility in dealing with parent themes and child themes. If you for example create a child theme and try to call a PHP block belonging to the parent theme, you would need to insert the full relative path of the child theme (where for example a piece of the layout is being called) to the parent theme.

`get_template_part` intelligently and automatically solves this. If you call any partial using this function, it will first check if the child theme has it. Not finding it, it will go up to the parent theme and try to find it there.

If I need to include a partial called **`loop.php`** for example, I can use **`get_template_part(loop.php)`**. If **`loop.php`** exists in the child theme, WordPress will always insert it (as this is the premise of having parent and child themes), but if it doesn't find the **`loop.php`** it will be searched for in the theme dad.

## But get_template_part doesn't solve everything

But let's say that your need is not just to insert a partial, but to parameterize it to be able to change variables in the insertion. In that case, we would encounter a problem. The only way to pass parameters to the template inherited from the parent would be using global variables.

Your **`loop.php`** original could look like this:

```php
<?php
$the_query = new WP_Query(array(
        'post_type' => 'posts',
        'posts_per_page' => 10
    )
);
if ($the_query->have_posts()):
    while ($the_query->have_posts()):
        
        // Do something here

    endwhile;
endif;
wp_reset_postdata();
?>
```

In this example, the loop has a query where I look for the last 10 posts of the “posts” type.

But let's say that in the child theme I have a custom post type, called books**.** I would like to use the same **`loop.php`** – because the structure would be the same – but I would like to replace the `post_type` of my query by `post_type` books.

I could try something like this:

```php
<?php
$post_type = 'books'; 
get_template_part( 'loop.php' );
?>
```

And inside my loop, I would call the `$post_type` variable. Unfortunately this solution would not work. `$post_type` would appear as undefined.

```php
<?php
$the_query = new WP_Query(array(
        'post_type' => $post_type, // Undefined variable
        'posts_per_page' => 10
    )
);
if ($the_query->have_posts()):
    while ($the_query->have_posts()):
        
        // Do something here

    endwhile;
endif;
wp_reset_postdata();
?>
```

One way to solve the problem is to use the include with another native WordPress function, the `locate_template` together with the native PHP include.

```php
<?php
$post_type = 'books'; 
include( locate_template( 'loop.php', false, false ) ); 
?>
```

In that case, the `$post_type` variable inside the `loop.php` would be set. My code would work and have a reusable loop.

## An even better solution

But it is possible to make the code even cleaner, making all the variables local inside the partial, avoiding “loose” variables inside the code.

I found this solution some time ago, and it still exists on gitHub at: [https://github.com/Smartik89/SMK-Theme-View/blob/master/functions.php](https://github.com/Smartik89/SMK-Theme-View/blob/master/functions.php)

The following function uses the `locate_template` but locates variables within the scope of the partial. I preserved the name of the original class, but I changed the name of the function, considering it simpler:

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
                include( locate_template($this->file) );
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

Usage is very simple. To use the variables with the partial, you would do the following:

```php
<?php
get_template_obj('loop.php', array(
    'post_type'  => 'books'
));
?>
```

Inside the `loop.php`, we would have the following situation:

```php
<?php
$the_query = new WP_Query(array(
        'post_type' => $this->post_type, // Use $this to access the variable
        'posts_per_page' => 10
    )
);
if ($the_query->have_posts()):
    while ($the_query->have_posts()):
        
        // Do something here

    endwhile;
endif;
wp_reset_postdata();
?>
```

As in the example of using the `get_template_part` native function, we have all the advantages of using parent and child themes, automatic insertion and even the option to insert localized parameters!