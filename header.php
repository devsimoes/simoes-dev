<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php bloginfo('name'); ?></title>
  <link href="<?= get_template_directory_uri() . '/style.css'; ?>" rel="stylesheet"/>
  <?php wp_head(); ?>
</head>
<body class="<?php body_class(); ?>">
<?php

the_custom_logo();

wp_nav_menu(['menu' => 'main-menu']);