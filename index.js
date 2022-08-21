// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
  // ふわっ
  $('.fadeUpTrigger').each(function () { // fadeUpTriggerというクラス名が
    const elemPos = $(this).offset().top - 50;// 要素より、50px上の
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(() => {
  fadeAnime();/* アニメーション用の関数を呼ぶ */
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', () => {
  fadeAnime();/* アニメーション用の関数を呼ぶ */
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

$('.wpcf7-form').find('.wpcf7-form-control-wrap').each(function () {
  const targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      top: '10px',
      fontSize: '14px',
    });
  }
});
// input要素がフォーカスされたらラベルを小さくして左上に
$('.wpcf7-form').find('.wpcf7-form-control').focus(function () {
  $(this).parents('.input-block').addClass('focus');
  $(this).parents('.input-block').find('label').animate({
    top: '10px',
    fontSize: '14px',
  }, 300);
});
// input要素からフォーカス外れた、且つ、input要素に文字が入っていないとき
// ラベルを元の大きさに戻して、class foucsを外す
$('.wpcf7-form').find('.wpcf7-form-control').blur(function () {
  if ($(this).val().length == 0) {
    $(this).parents('.input-block').removeClass('focus');
    $(this).parents('.input-block').find('label').animate({
      top: '25px',
      fontSize: '18px',
    }, 300);
  }
});
