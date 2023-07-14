$(function () {
  //drawer_buttonをクリックすると
  $(".drawer_button").on("click", function () {
    //ボタンにactiveクラスを付与
    $(this).toggleClass("active");
    //ナビにopenクラスを付与
    $("nav").toggleClass("open");
    //.drawer_bgをフェードインして表示
    $(".drawer_bg").fadeToggle()
  });
  //drawer_bgをクリックすると
  $(".drawer_bg").on("click", function () {
    //.drawer-bgの要素を非表示
    $(this).hide();
    //ボタンに付与していたactiveクラスを解除
    $(".drawer_button").removeClass("active");
    //ナビに付与していたopenクラスを解除
    $("nav").removeClass("open")
  });
});