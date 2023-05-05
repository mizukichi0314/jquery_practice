$(function () {
  //ドロップダウンメニューにホバーすると
  $(".dropdwn li").hover(function () {
    //スライドが下がってくる
    $(this).children("ul").slideDown()
  },
  function () {
    //ドロップダウンメニューから離すとスライドが上がる
    $(this).children("ul").slideUp()
  });
});