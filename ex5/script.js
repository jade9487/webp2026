// 計數器，從 1 開始
let count = 1;

function addfunction() {
    // 1. 建立新的 <button> 元素
    const btn = document.createElement("BUTTON");
    
    // 2. 設定文字、id、class（跟講義 Page 28 一模一樣）
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id", `btn_${count}`);
    btn.setAttribute("class", "btn btn-outline-danger");
    
    // 3. 最重要的：讓新按鈕「點下去有反應」（解決 Page 31 的問題）
    btn.addEventListener("click", function (e) {
        this.innerHTML = `${this.id} CLICKED !`;   // 改變自己文字
        console.log("onclick!");                   // 方便除錯
    });
    
    // 4. 把新按鈕加到頁面最下面
    document.body.appendChild(btn);
    
    // 5. 計數器 +1
    count++;
}

function delfunction() {
    // 取得頁面上「所有」button
    const btn_list = document.getElementsByTagName("BUTTON");
    
    // 只刪「動態產生的」按鈕（避免把 Add it / Del it 也刪掉）
    if (btn_list.length > 2) {
        document.body.removeChild(btn_list[btn_list.length - 1]);
    } else {
        console.log("已經沒有可以刪除的按鈕了！");
    }
}