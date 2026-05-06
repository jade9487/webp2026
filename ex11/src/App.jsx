import './App.css';
import HelloCGU from './cgu_hello';
import MultiButton from './cgu_multiButton';

function App() {
  return (
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
        {MultiButton(3)}   {/* 改成 3 就好，顯示 3 個圖示按鈕 */}
      </div>
    </div>
  );
}

export default App;