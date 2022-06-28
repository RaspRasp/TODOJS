import "./styles.css";

//テキストボックスに入力された内容を変数に格納
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  //追加が押されたらテキストボックスの中を空にする
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
//未完了リストから指定の要素を削除するメソッド
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了のリストを作成する関数
const createIncompleteList = (text) => {
  //div生成
  //document.createElement("タグ名")でHTMLのDOMを作成
  const div = document.createElement("div");
  //クラスを付与
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //機能を設定
  completeButton.addEventListener("click", () => {
    //要素を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // const deleteTerget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTerget);

    //完了リストに要素を追加
    //targetの内容を設定
    const addTarget = completeButton.parentNode;
    //target内のTODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //関数化したので以下の処理は必要ない
    //まず削除したいターゲットを変数に格納
    // const deleteTerget = deleteButton.parentNode;
    // //子要素を削除するremoceChildの引数にターゲットを入れる
    // document.getElementById("incomplete-list").removeChild(deleteTerget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//idでhtmlのどの機能か指定
//addEventListenerでクリックを検知したら処理を実行
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
