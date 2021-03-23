import React from 'react';
import './App.css';
import ImportConponent from './R001_ImportConponent' // 코드 뭉치 - 이식, 재사용

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ImportConponent></ImportConponent> {/* 이식 */}
    </div>
  );
}

export default App;