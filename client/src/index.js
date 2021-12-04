import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatRoom from './components/chatRoom/ChatRoom';
import HomePage from './components/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
