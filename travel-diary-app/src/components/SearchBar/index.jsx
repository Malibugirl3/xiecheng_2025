import React from 'react';
import './index.scss';

const SearchBar = () => {
  const handleSearch = (e) => {
    // 在这里实现搜索逻辑
    console.log('Search:', e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="搜索旅行日记"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;