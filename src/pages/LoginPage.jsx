import React from 'react';
import imgfile from '../assets/tgmark.png';
import "../styles/Register.css";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div className="colored-box">
      <div className="login-box">
        <Login title="Login" />
      </div>
    </div>
  );
}

export default LoginPage;
