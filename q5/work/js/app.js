$(function () {
  //ドロップダウンメニューにホバーすると
  $(".dropdwn li").hover(function () {
    //スライドが下がってくる
    $(this).children("ul").stop().slideDown()
  },
  function () {
    //ドロップダウンメニューから離すとスライドが上がる
    $(this).children("ul").stop().slideUp()
  });
});