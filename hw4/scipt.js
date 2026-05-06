// ex#8 使用的 API
const openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

// 1. 建立 XMLHttpRequest 物件
const xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const dataset = JSON.parse(this.responseText);
        addNewData(dataset);
        console.log('✅ Ajax 成功載入 ' + dataset.length + ' 筆真實展覽資料');
    }
};

// ========== 初始假資料（5 筆）==========



// 新增資料到表格
function addNewData(dataset) {
    const myTable = document.getElementById("csie");
    
    dataset.forEach(function (data) {
        const row = myTable.insertRow(-1);
        
        row.insertCell(0).innerHTML = data['title'] || '（無標題）';
        
        const location = data['showInfo'] && data['showInfo'][0] 
                         ? data['showInfo'][0]['location'] 
                         : '（無地點資訊）';
        row.insertCell(1).innerHTML = location;
        
        const price = data['showInfo'] && data['showInfo'][0] 
                      ? (data['showInfo'][0]['price'] || '免費 / 未標示')
                      : '免費 / 未標示';
        row.insertCell(2).innerHTML = price;
    });
}

// ========== 修改重點：只刪除最後一筆 ==========
function delOldData() {
    const myTable = document.getElementById("csie");
    
    if (myTable.rows.length > 1) {
        myTable.deleteRow(-1);        // ← 刪除最後一列
        console.log('🗑️ 已刪除最後一筆資料');
    } else {
        console.log('⚠️ 表格已經沒有資料可以刪除了');
    }
}

// 頁面載入時執行
window.onload = function () {
    addSampleData();        // 先加入假資料
};