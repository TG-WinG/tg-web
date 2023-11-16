import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoticeBoardPage from './pages/NoticeBoardPage';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <RegisterPage />
      <NoticeBoardPage />
    </div>
  );
}

export default App;
