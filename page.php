<?php get_header(); ?>
<!-- 上記が追記するコード -->
<section id="content">
    <div id="content-wrap" class="container-col">
        <div>
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post();
            ?>
                    <h1><?php the_title(); ?></h1>
                    <section class="contact-form">
                        <?php the_content(); ?>
                    </section>
            <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
    <div class="back-home">
        <a href="<?php echo esc_url(home_url('/')); ?>">トップ画面へ戻る</a>
    </div>
</section>
<script type="text/javascript">
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '<?php echo get_template_directory_uri(); ?>/pageStyle.css';
    css.type = 'text/css';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(css);
</script>
<!-- 下記が追記するコード -->