// 動きのきっかけとなるアニメーションの名前を定義
// function fadeAnime() {
//   // ふわっ
//   $('.fadeUpTrigger').each(function () { // fadeUpTriggerというクラス名が
//     const elemPos = $(this).offset().top - 50;// 要素より、50px上の
//     const scroll = $(window).scrollTop();
//     const windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight) {
//       $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
//     } else {
//       $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
//     }
//   });

//   $('.fadeUpTriggerApplication').each(function () { // fadeUpTriggerというクラス名が
//     const elemPos = $(this).offset().top;// 要素より、50px上の
//     const scroll = $(window).scrollTop();
//     const windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight) {
//       $('.application-wrap').animate({'marginRight':'250px'},500);// 画面内に入ったらfadeUpというクラス名を追記
//     } else {
//       $('.application-wrap').animate({'marginRight':'0'},500);// 画面外に出たらfadeUpというクラス名を外す
//     }
//   });
// }
/* global wp, jQuery */

(function ($) {
  $(document).ready(function () {
      function fadeUpAnime() {
          function show() {
            const elemPos = $('.fadeShowTriggerApplication').offset().top + 50; //要素より、50px上の
            const elemPos2 = $('.fadeHideTriggerApplication').offset().top; //要素より、50px上の
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            const margin = parseInt($('.application-wrap').css('marginRight'));
            if (scroll >= windowHeight && elemPos2 - windowHeight > scroll) {
              if (0 > margin) {
                // 画面内に入ったらfadeInというクラス名を追記
                $('.application-wrap').animate({'marginRight':'0'},500);
              }
            }
          };
          show();

      }
      fadeUpAnime();

      // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function () {
          fadeUpAnime();
      });
  });
})(jQuery);
