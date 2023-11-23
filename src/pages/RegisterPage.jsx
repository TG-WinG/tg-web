import React from 'react';
import imgfile from '../assets/tgmark.png';
import "../styles/Register.css";
import Register from "../components/Register";

function RegisterPage() {
  return (
    <div className="outer-container">
      <div className="colored-box">
        <div className="login-box">
          <div className="login-logo">
            <img src={imgfile} alt="logo" />
          </div>
          <div className="login-title">
            <h1>Register</h1>
          </div>
          <Register />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
