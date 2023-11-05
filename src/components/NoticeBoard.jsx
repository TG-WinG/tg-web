import React, { useState, useEffect } from 'react';

function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    // 임시 데이터 - 백엔드 API가 아직 없을 때 사용
    const temporaryData = [
      {
        id: 1,
        title: '첫 번째 공지',
        views: 100,
        date: '2023-11-04',
        content: '종강총회합니다. 장소는 어디어디읻 종강총회 합니다 라라라랄 종강조악ㅇ 종강총회합니다. 장소는 어디어디읻 종강총회 합니다 라라라랄 종강조악종강총회합니다. 장소는 어디어디읻 종강총회 합니다 라라라랄 종강조악ㅇ 종종강총회합니다. 장소는 어디어디읻 종강총회 합니다 라라라랄 종강조악ㅇ 종강총회합니다. 장소는 어디어디읻 종강총회 합니다 라라라랄 종강조악종강총회합니다. 장소는 어디어디읻 종강총회 합니다 라라라랄'
      },
      {
        id: 2,
        title: '두 번째 공지',
        views: 75,
        date: '2023-11-03',
        content: '종강총회합니다. 장소는 어디어디읻 종강총회 합니다 라라라'
      },
      {
        id: 3,
        title: '세 번째 공지',
        views: 75,
        date: '2023-11-03',
      },
      {
        id: 4,
        title: '첫 번째 공지',
        views: 100,
        date: '2023-11-04',
      },
      {
        id: 5,
        title: '두 번째 공지',
        views: 75,
        date: '2023-11-03',
      },
      {
        id: 6,
        title: '세 번째 공지',
        views: 75,
        date: '2023-11-03',
      },
    ];

    setNotices(temporaryData);
    setLoading(false);
  }, []);

  const openNotice = (notice) => {
    setSelectedNotice(notice);
    const modal = document.querySelector('.modal');
    modal.classList.add('opened'); // .opened 클래스를 추가하여 모달이 나타남
  };

  const closeNotice = () => {
    setSelectedNotice(null);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notices.map(notice => (
            <li key={notice.id} onClick={() => openNotice(notice)}>
              <div className='notice-info'>
                <p>{notice.title} </p> 
                <p> {notice.views} </p> 
                <p> {notice.date}</p>
              </div>
              {selectedNotice && selectedNotice.id === notice.id && (
                <div className='modal'>
                  <div className='modal-content'>
                    <h2>{selectedNotice.title}</h2>
                    <div className='modal-noticeinfo'>
                    <p>조회수: {selectedNotice.views}</p>
                    <p>작성: 티지윙</p>
                    <p>작성일: {selectedNotice.date}</p>
                    </div>

                    <div className='modal-noticecontent'>
                    <p>{selectedNotice.content}</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoticeBoard;
