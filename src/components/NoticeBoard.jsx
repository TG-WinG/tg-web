import React, { useState, useEffect } from 'react';

function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 임시 데이터 - 백엔드 API가 아직 없을 때 사용
    const temporaryData = [
      {
        id: 1,
        title: '첫 번째 공지',
        views: 100,
        date: '2023-11-04',
      },
      {
        id: 2,
        title: '두 번째 공지',
        views: 75,
        date: '2023-11-03',
      },
      {
        id: 3,
        title: '세 번째 공지',
        views: 75,
        date: '2023-11-03',
      },
      {
        id: 1,
        title: '첫 번째 공지',
        views: 100,
        date: '2023-11-04',
      },
      {
        id: 2,
        title: '두 번째 공지',
        views: 75,
        date: '2023-11-03',
      },
      {
        id: 3,
        title: '세 번째 공지',
        views: 75,
        date: '2023-11-03',
      },
    ];

    setNotices(temporaryData);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notices.map(notice => (
            <li key={notice.id}>
              <div className='notice-info'>
                <p>{notice.title} </p> 
                <p> {notice.views} </p> 
                <p> {notice.date}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoticeBoard;
