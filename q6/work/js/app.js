$(function () {
  //select-boxの要素選択時にchangeイベントが発生
  $(".select-box").on("change", function () {
    //selectの変数に、選択されたselect-box内の値を取得
    const select = $(this).val();
    //変数の値がallだった場合
    if (select === "all") {
      //リストの値を全て表示
      $(".food-list li").show();
      //food-list内の項目を表示
        $(this).show();
      //上記以外の場合
    } else {
      //select-boxの要素選択時にfood-list内でループ処理を加える
      $(".food-list li").each(function () {
        //food-list内の値と、data-category-typeの値が一致した時の処理
        if ($(this).data("category-type") === select) {
          //food-list内の項目表示
          $(this).show();
          //上記以外の場合
        } else {
          //food-list内の項目非表示
          $(this).hide();
        };
      });
    };
  });
});