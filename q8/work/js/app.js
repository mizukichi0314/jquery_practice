// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

$(function () {
  //1という初期値をpageCount変数に代入
  let pageCount = 1;
  //空の文字列をsearchLog変数に代入。searchLogは検索履歴や結果などを格納。
  let searchLog = "";
  //検索ボタンをクリックした時
  $('.search-btn').on('click', function () {
    //入力した内容の値をsearchWord変数に代入
    const searchWord = $('#search-input').val();
    //検索された値が違う場合
    if (searchWord !== searchLog) {
      //ulの.list内の要素を空にする
      $('.lists').empty();
      //searchLogに検索されたワードの値を格納する
      searchLog = searchWord;
      //ページカウントを初期値１に戻す
      pageCount = 1;
    //検索された値が同じ場合
    } else {
      //ページカウント数を増やす
      pageCount++;
    };
    //settingsにajaxの設定を格納
    const settings = {
      //APIのURL。HTTPメソッドがGETであり、指定されたURLのデータ取得するためのリクエスト。
      url: 'https://ci.nii.ac.jp/books/opensearch/search?title=${searcWord}&format=json&p=${pageCount}&count=20',
      //"method": "GET";は、HTTPメソッドやAPIの呼び出し
      method: "GET",
    };
    //ajaxの実行
    //ajaxのリクエストを送信。.doneは通信成功した時の意味。
    $.ajax(settings).done(function (response) {
      //responseからgraphというプロパティの値を取得して、result変数に格納
      const result = response[ '@graph'];
      //displayResult関数(検索結果)を呼び出す
      displayResult(result)
      //リクエストが失敗した場合の処理
    }).fail(function (err) {
      //displayError関数を呼び出す
      displayError(err)
    });
  });
  //通信成功した場合の処理
  function displayResult (searchData) {
    //class属性"message"を削除
    $('.message').remove();
    //もし、検索結果があった場合
    if (searchData[0].items) {
      //index番号と値を取得し、繰り返し処理をおこなう
      $.each(searchData[0].items, function (index) {
        //検索結果の本のタイトルをbookTitleに代入
        const bookTitle = searchData[0].items[index].title ? searchData[0].items[index] : "(不明)";
        //検索結果の作者をcreatorに代入
        const creator = searchData[0].items[index]["dc:creator"] ? searchData[0].items[index]["dc:creator"] : "(不明)";
        //検索結果の出版社をpublisherに代入
        const publisher = searchData[0].items[index]["dc:publisher"] ? searchData[0].items[index]["dc:publisher"] : "(不明)";
        //検索結果の本のサイトリンクをbookLinkに代入
        const bookLink = searchData[0].items[index].link["@id"];
        //上記はyoutubeの「45分でBook検索アプリを作る」を参考
        //変数booksにHTMLを追加。検索結果に本のタイトルがなかった場合、タイトル：不明と表示
        const status = '<li class = "lists-item"><div class = "list-inner"><p>タイトル : ' + bookTitle +
        //検索結果に作者が無かった場合、作者:不明と表示
        '</p><p>作者 :' + creator +
        //出版社に検索結果が無かった場合、出版社：不明と表示
        '</p><p>出版社 :' + publisher +
        //書籍情報を別タブで開くように_blankで設定
        '</p><a href= "' + bookLink + '"target = "_blank">書籍情報</a></div></li>';
        //.listsにbooksに格納したHTMLを追加
        $('.lists').prepend(status);
      })
      //もし、検索結果がなかった場合
    } else {
      //class属性"message"をstatusに格納
      const status = '<div class = "message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>';
      //.listsの前にstatusに格納された内容を追加
      $('.lists').before(status);
    }
  }
  //通信失敗した場合の処理
  function displayError (err) {
    //class属性".lists"を削除
    $('.lists').empty();
    //class属性"message"を削除
    $('.message').remove();
    //class属性".message"をerrMessageに代入
    const errMessage = '<div class = "message">正常に通信できませんでした。<br></>インターネットの接続の確認をしてください。</div>';
    //class属性".message"をerrTextに代入
    const errText = '<div class = "message">検索ワードが有効ではありませんでした。<br>1文字以上で検索してください。</div>';
    //class属性"message"をerrMessageに代入サーバー
    const serverErr = '<div class = "message">予期せぬエラーが発生しました。<br>再度接続し直してください。</div>';
    //エラーメッセージのステータスが0の場合
    if(err.status === 0 ) {
      //リクエストが許可されていない場合、errMessageを追加
      $('.lists').before(errMessage);
      //エラーメッセージのステータスが400の場合
    } else if (err.status === 400) {
      //リクエストが不正だった場合のメッセージ
      //文字入力がない場合やURLが間違っている場合など、errTextを追加
      $('.lists').before(errText);
      //それ以外の場合
    } else {
      //surverErrを追加
      $('.lists').before(serverErr);
    }
  }
  //リセットボタンをクリックした時
  $('.reset-btn').on('click', function () {
    //ページカウントを初期値1に戻す
    pageCount = 1;
    //空の文字列をsearchLog変数に代入
    searchLog = "";
    //class属性".lists"を削除
    $('.lists').empty();
    //class属性".message"を削除
    $('.message').remove();
    //検索ワードを空にする
    $('#search-input').val("");
  });
});