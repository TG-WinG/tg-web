import React, { useState } from "react";
import "../styles/Register.css";

function Login({ title }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (id === "" || password === "") {
      setErrorMessage("아이디와 비밀번호를 입력해주세요.");
    } else {
      // 여기에 로그인 로직을 추가하세요.
      console.log("로그인 성공!");
      // 성공 시 리다이렉트 또는 다음 단계로 이동할 수 있습니다.
    }
  };

  return (
    <div className={`frame`}>
      <h1 className="text-wrapper">{title}</h1>
      <form onSubmit={handleLogin}>

        <div className="input-bar">
          <input
            type="text"
            placeholder="아이디"
            className="search-input"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="input-bar">
          <input
            type="password"
            placeholder="비밀번호"
            className="search-input"
            name="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">로그인</button>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
      <a href="/find_id">아이디 찾기</a>
      <span> | </span>
      <a href="/find_pw">비밀번호 찾기</a>
    </div>
  );
};

export default Login;
