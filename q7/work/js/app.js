$(function () {
  //btn__submitをクリックすると動作
  $(".btn__submit").on("click", function () {
    //コンソールに名字を表示
    console.log ("名字");
    //コンソールに入力された#family__nameの値を表示
    console.log ($("#family__name").val());

    //コンソールに名前を表示
    console.log ("名前");
    //コンソールに入力された#given__nameの値を表示
    console.log ($("#given__name").val());

    //コンソールに生年月日を表示
    console.log ("生年月日");
    //コンソールに選択された生年月日の値を表示
    console.log ($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");

    //コンソールに性別を表示
    console.log ("性別");
    //コンソールに選択された性別の値を表示
    console.log ($('[name="gender"]:checked').val());

    //コンソールに職業を表示
    console.log ("職業");
    //コンソールに選択された職業の値を表示
    console.log ($(".occupation").val());

    //コンソールにアカウント名を表示
    console.log ("アカウント名");
    //コンソールに入力されたを表示
    console.log ($("#account__name").val());

    //コンソールにメールアドレスを表示
    console.log ("メールアドレス");
    //コンソールに入力されたメールアドレスを表示
    console.log ($("#email").val());

    //コンソールにパスワードを表示
    console.log ("パスワード");
    //コンソールに入力されたパスワードを表示
    console.log ($("#password").val());

    //コンソールに確認用パスワードを表示
    console.log ("確認用パスワード");
    //コンソールに入力された確認用パスワードを表示
    console.log ($("#duplication__password").val());

    //コンソールに住所を表示
    console.log ("住所");
    //コンソールに入力された住所の値を表示
    console.log ($("#address").val());

    //コンソールに電話番号を表示
    console.log ("電話番号");
    //コンソールに入力されたtelの値を表示
    console.log ($("#tel").val());

    //コンソールに購買情報を表示
    console.log ("購買情報");
    //コンソールに選択されたsubscriptionの値を表示
    console.log ($('[name="subscription"]:checked').val());
  });
})