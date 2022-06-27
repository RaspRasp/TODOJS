import "./styles.css";

const onClickAdd = () => {
  alert();
};

//idでhtmlのどの機能か指定
//addEventListenerでクリックを検知したら処理を実行
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
