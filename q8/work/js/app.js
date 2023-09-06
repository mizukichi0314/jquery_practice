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
  // ページカウントの初期値1
  let pageCount = 1;
  //空の文字列をsearchLog変数に代入。searchLogは検索履歴や結果などを格納。
  let searchLog = "";
  // 検索ボタンをクリックした時
  $('.search-btn').on('click', function () {
    // 検索ワードに入力された値をsearchWord変数へ代入
    const searchWord = $('#search-input').val();
    // 初回の検索時にページカウントを１に設定
    if (searchWord !== searchLog) {
      // .listの要素を空にする
      $('.lists').empty();
      // ページカウントを初期値１に戻す
      pageCount = 1;
      // console.log(`ページカウント:` + pageCount);
      // searchLogに検索ワードに入力された値を格納
      searchLog = searchWord;
    // ここで新しい検索結果を取得し、表示件数を増やす処理
    } else {
      // ページカウント数を増やし、20件のデータを表示する
      pageCount ++;
      // console.log(`ページカウント:` + pageCount);
    }
    // API
    // settingsにajaxの設定を格納
    const settings = {
      // APIのURL。HTTPメソッドがGETであり、指定されたURLのデータ取得するためのリクエスト。
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      // "method": "GET";は、HTTPメソッドやAPIの呼び出し
      "method": 'GET',
    }
    // ajaxの実行
    // ajaxのリクエストを送信。.doneは通信成功した時の意味。
    $.ajax(settings).done(function (response) {
      // responseからgraphというプロパティの値を取得して、result変数に格納
      const result = response[ '@graph'];
      // displayResult関数(検索結果)を呼び出す
      displayResult(result)
      // リクエストが失敗した場合の処理
    }).fail(function (err) {
      // displayError関数を呼び出す
      displayError(err)
    })
  })
  // 通信成功した場合の処理
  function displayResult (searchData) {
    // messageクラスの削除
    $('.message').remove();
    // もし、検索結果が無かった場合
    // searchData[0].itemsがundefined,また配列の中身がない場合エラーメッセージを表示
    if (searchData[0].items == undefined || searchData[0].items.length == 0) {
      // .messageクラスをnoResultに格納
      const noResult = '<div class = "message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>';
      // .listsクラスの前にエラーメッセージを表示
      $('.lists').before(noResult);
      // 検索結果があった場合
    } else { 
      // index番号と配列の中の値を取得し、繰り返し処理をおこなう
      $.each(searchData[0].items, function (index) {
        // タイトル
        // 配列の中の値とindex番号をbookTitleに代入
        // またbookTitleの値にundefinedだった時、タイトル不明を代入
        const bookTitle = searchData[0].items[index].title || "タイトル不明";
        // 作者
        // 配列の中の値をcreatorに代入
        // またcreatorの値にundefindだった時、作者不明を代入
        const creator = searchData[0].items[index]["dc:creator"] || "作者不明";
        // 出版社
        // 配列の中の値をpublisherに代入
        // またpublisherの値にundefindだった時、出版社不明を代入
        const publisher = searchData[0].items[index]["dc:publisher"] || "出版社不明";
        // 書籍情報
        // 配列の中の値をbookLinkに代入
        const bookLink = searchData[0].items[index].link["@id"];
        // 変数listItemsにそれぞれのリスト一覧を表示させるHTMLを追加。
        const listItems = `<li class = "lists-item">
        <div class = "list-inner">
        <p>タイトル：${bookTitle}</p>
        <p>作者：${creator}</p>
        <p>出版社：${publisher}</p>
        <a href = "${bookLink}" target = "_blank">書籍情報</a>
        </div>
        </li>`;
        // .listsクラスに格納したHTMLを追加
        $('.lists').prepend(listItems);
      })
    } 
  }
  // 通信失敗した場合の処理
  function displayError (err) {
    // listsクラスを空にする
    $('.lists').empty();
    // messageクラスを削除
    $('.message').remove();
    // messageクラスをerrMessageに代入
    const errMessage = `<div class = "message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>`;
    // messageクラスをerrCommentに代入
    const errComment = `<div class = "message">検索ワードが有効ではありませんでした。<br>1文字以上で検索してください。</div>`;
    // messageクラスをerrMessageに代入
    const serverErr = `<div class = "message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>`;
    // エラーメッセージのステータスが0の場合
    if(err.status === 0 ) {
      // リクエストが許可されていない場合、errMessageを追加
      // 文字入力がない場合や通信環境がないときにエラーステータス０を表示
      $('.lists').before(errMessage);
      // エラーステータス0をコンソールに表示
      console.log("Error status",err.status);
      // エラーメッセージのステータスが400の場合
    } else if (err.status === 400) {
      // リクエストが不正だった場合のメッセージ
      $('.lists').before(errComment);
      // それ以外の場合
    } else {
      // serverErrを追加
      $('.lists').before(serverErr);
    }
  }
  // リセットボタンをクリックした時
  $('.reset-btn').on('click', function () {
    // ページカウントを初期値1に戻す
    pageCount = 1;
    // 空の文字列をsearchLog変数に代入
    searchLog = "";
    // listsクラスを削除
    $('.lists').empty();
    // messageクラスを削除
    $('.message').remove();
    // 検索ワードを空にする
    $('#search-input').val("");
  });
});

// HTMLの文字列内で変数を埋め込むためにはバッククォート（``）を使用して文字列を作成
// `${変数名}`の形式で変数を埋め込める
// テンプレートリテラル内では、複数行の文字列もそのまま再現できる
// テンプレートリテラルとは、シングルクォーテンション（''）ダブルクォーテンション（""）で
// 囲む方法とは異なり、バッククォートで囲む
