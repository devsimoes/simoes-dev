<?php

function simoes_add_theme_support() {
  add_theme_support('custom-logo');
}

add_action('after_setup_theme', 'simoes_add_theme_support');

function simoes_register_nav_menu() {
  register_nav_menu('main-menu', 'Menu Principal');
}

add_action('init', 'simoes_register_nav_menu');