import React from 'react';
import imgfile from '../assets/tgmark.png';
import "../styles/NoticeBoard.css";
import SearchBar from '../components/SearchBar';

function NoticeBoardPage() {
  return (
    <div className="colored-box">
      <div className="white-square">
        <img src={imgfile} alt="티지윙마크이미지" />
        <div className="text-notice">공지사항</div>
        <div className='searchbar-location'> <SearchBar /> </div>
        <div className="info">
          <p>제목</p>
          <p>조회수</p>
          <p>작성일</p>
        </div>
        
      </div>
    </div>
  );
}

export default NoticeBoardPage;
