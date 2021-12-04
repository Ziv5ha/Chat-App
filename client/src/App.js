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
        <Route path='login' element={<LoginPage setUser={setUser} />} />
        <Route path='/' element={<HomePage user={user} />} />
        <Route path={`:chatRoom`} element={<ChatRoom user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
