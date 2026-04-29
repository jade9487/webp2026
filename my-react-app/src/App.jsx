import React, { useState } from 'react';
import './App.css';

function App() {
  // 建立 state 來儲存點擊後要顯示的文字字串
  const [text, setText] = useState("hello CGU!!");

  // 點擊後就在原本的文字後面加上「被點了」
  const handleClick = () => {
    setText(prevText => prevText + "被點了");
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1 
        onClick={handleClick} 
        style={{ 
          color: 'red', 
          cursor: 'pointer', 
          fontSize: '80px',      // 調大字體以符合 Page 54 效果
          wordBreak: 'break-all', // 確保中英文混合時也會在邊界換行
          lineHeight: '1.2',
          textAlign: 'left'      // 根據圖片，文字是靠左填滿的
        }}
      >
        {text}
      </h1>
    </div>
  );
}

export default App;