$(function () {
  //ナビをクリックすると
  $("nav li").on("click", function () {
    //何番目のメニューがクリックされたのか、インデックス番号を取得
    var index = $("nav li").index(this);
    //description liに、is-hiddenクラスを追加
    $(".description li").addClass("is-hidden");
    //選択されたタブと同じインデックスを表示
    $(".description li").eq(index).removeClass("is-hidden")
  });
});