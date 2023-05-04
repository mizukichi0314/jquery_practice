$(function () {
  //Q1-1
  //文字の色をグリーンに変更
  $("#q1").css("color", "green");
  
  //Q1-2
  //q2のボタンをクリックすると
  $("#q2").on("click", function() {
    //ボタンの色をピンクに変更
    $(this).css("background-color", "pink")
  });
  
  //Q1-3
  //q3のボタンをクリックすると
  $("#q3").on("click", function() {
    //3秒かけてフェードアウト
    $(this).fadeOut(3000)
  });
  
  //Q1-4
  //q4のボタンをクリックすると
  $("#q4").on("click", function() {
    //ボタンのサイズが変更
    $(this).addClass("large")
  });
  
  //Q1-5
  //q5のボタンをクリックすると
  $("#q5").on("click", function() {
    //Q5の前後にDOMの挿入
    $(this).before("DOMの前").prepend("DOMの中の前").append("DOMの中の後").after("DOMの後")
  });
  
  //Q1-6
  //q6のボタンをクリックすると
  $("#q6").on("click", function () {
    //2秒かけてmargin-topとmargin-leftを100pxずつ移動
    $(this).animate({"margin-top": 100, "margin-left": 100}, 2000)
  });
  
  //Q1-7
  //q7のボタンをクリックすると
  $("#q7").on("click", function() {
    //idのノードをコンソールに表示
    console.log(this)
  });
  
  //Q1-8
  //q8のボタンにマウスを乗せた時に
  $("#q8").on({ mouseenter: function() {
    //ボタンのサイズが変更
    $(this).addClass("large")
    },
    //ボタンからマウスが離れると
    mouseleave: function () {
      //サイズが戻る
      $(this).removeClass("large")
    }
  });
  
  //Q1-9
  //q9のボタンをクリックすると
  $("#q9 li").on("click", function () {
    //インデックス番号を取得
    var index = $(this).index();
    //アラートを表示
    alert(index);
  });
  
  //Q1-10
  //q10のボタンをクリックすると
  $("#q10 li").on("click", function () {
    //インデックス番号を取得
    var index = $(this).index();
    //クリックされたタブと同じインデックス番号を文字を大きくして表示
    $("#q11 li").eq(index).addClass("large-text")
  });
  
  });