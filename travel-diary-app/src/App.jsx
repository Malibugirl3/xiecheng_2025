import React from 'react';
import SearchBar from './components/SearchBar';
import BottomNav from './components/BottomNav';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <main className="main-content">
        {/* 主要内容区域 */}
        <div style={{ padding: '20px' }}>
          <h1>旅行日记</h1>
          {/* 其他内容组件将在这里渲染 */}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default App;