import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css';
import ChatRoom from './components/chatRoom/ChatRoom';
import HomePage from './components/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Login' element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path={`:chatRoom`} element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
