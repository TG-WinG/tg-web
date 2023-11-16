import React from 'react';
import imgfile from '../assets/tgmark.png';
import "../styles/Register.css";
import Register from "../components/Register";

function RegisterPage() {
  return (
    <div className="colored-box">
      <div className="white-square">
        <div className="register-page">
          <div className="register-page__header">
            <h1>Regi
              <img src={imgfile} alt="티지윙마크이미지" />
              ster
            </h1>
          </div>
          <Register title="register"/>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
