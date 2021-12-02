import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatRoom from './components/chatRoom/ChatRoom';
import HomePage from './components/HomePage';
import LoginPage from './components/loginPage/LoginPage';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='Login' element={<LoginPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path={`:chatRoom`} element={<ChatRoom />} />
    </Routes>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
