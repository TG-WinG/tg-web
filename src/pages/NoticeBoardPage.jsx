import React from 'react';
import imgfile from '../assets/tgmark.png'
import "../styles/NoticeBoard.css"

function NoticeBoardPage() {
  return (
    <div className="colored-box">
      <div className="white-square">
        <img
          src={imgfile}
          alt="티지윙마크이미지"
        />
        <div className="text-notice">공지사항</div>
      </div>
    </div>
  );
}

export default NoticeBoardPage;
