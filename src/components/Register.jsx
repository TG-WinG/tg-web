import React, { useState } from "react";
import "../styles/Register.css"

function Frame1({ title }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    if (id === "" || password === "" || passwordCheck === "") {
      setErrorMessage("모든 항목을 입력해주세요.");
    } else if (password !== passwordCheck) {
      setErrorMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else {
      // 여기에 회원가입 로직을 추가하세요.
      console.log("회원가입 성공!");
      // 성공 시 리다이렉트 또는 다음 단계로 이동할 수 있습니다.
    }
  };

  return (
    <div className="frame1">
      <div className={`frame`}>
        <h1 className="text-wrapper">Register</h1>
        <form onSubmit={handleSignup}>
          <li className="input-bar">
            <input
              type="text"
              placeholder="아이디"
              className="search-input"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </li>
          <li className="input-bar">
            <input
              type="text"
              placeholder="비밀번호"
              className="search-input"
              name="pw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li className="input-bar">
            <input
              type="text"
              placeholder="비밀번호 확인"
              className="search-input"
              name="pw_confirm"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </li>
          <li>
            <button className="login-button" type="submit">회원가입</button>
          </li>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        <div>
          <a href="/find_id">아이디 찾기</a>
          <span> | </span>
          <a href="/find_pw">비밀번호 찾기</a>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
