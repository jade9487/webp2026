// 隨機產生 n 個 a-z 小寫字母的字串
function randomChars(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        const char = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // a-z
        result += char;
    }
    return result;
}

function addNewChars() {
    const container = document.getElementById('container');
    const newCount = Math.floor(Math.random() * 3) + 1; // 1~3 個
    container.textContent += randomChars(newCount);
}

// 初始載入（符合 Page 45 要求）
window.onload = function () {
    const container = document.getElementById('container');
    
    // 1. 第一次產生 0～2 個字母
    const initialCount = Math.floor(Math.random() * 3); // 0, 1, 2
    container.textContent = randomChars(initialCount);
    
    // 如果一開始是空的，就先補一點
    if (container.textContent === '') {
        container.textContent = randomChars(2);
    }
    
    console.log('✅ 打字機初始化完成');
};

// 每次按鍵的處理（keyup）
window.addEventListener('keyup', function (e) {
    const container = document.getElementById('container');
    const typed = e.key.toLowerCase();   // 輸入的字母（轉小寫）
    
    // 只處理 a-z 單一字母（避免方向鍵、Enter 等干擾）
    if (typed.length === 1 && typed >= 'a' && typed <= 'z') {
        
        // 2. 如果輸入的字母和最左邊一樣 → 消除最左邊那個字
        if (container.textContent[0] === typed) {
            container.textContent = container.textContent.substring(1);
        }
        
        // 3. 每次按鍵後都補充 1～3 個新字母（Page 46 要求）
        addNewChars();
    }
});