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
    <nav class="back-home">
        <a href="<?php echo esc_url(home_url('/')); ?>">トップ画面へ戻る</a>
        <a href="<?php echo esc_url(home_url('/privacy')); ?>" target="_blank">プライバシーポリシー</a>
    </nav>
</section>
<div class="copyright">copyright ©️ FreeAL CO, Ltd. All rights reserved.</div>
<!-- 下記が追記するコード -->