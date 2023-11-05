import React from 'react';
import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
