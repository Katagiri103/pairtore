<?php 
function add_files(){
    //リセットＣＳＳ
    wp_enqueue_style('reset-style', get_theme_file_uri('/css/destyle.css'));
    //Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
    //メインのCSS
    wp_enqueue_style('main-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'add_files');