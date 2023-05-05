$(function () {
  //モーダルウィンドウボタンをクリックすると
  $(".modal_open_button").click(function () {
    //modal_winをフェードインで表示
    $(".modal_win").fadeIn()
  }),
  //モーダルウィンドウの閉じるボタンをクリックすると
  $(".modal_close_button").click(function () {
    //modal_winをフェードアウトして非表示
    $(".modal_win").fadeOut()
  });
});