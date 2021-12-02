import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ChatRoom from './components/chatRoom/ChatRoom';
import HomePage from './components/HomePage';
import LoginPage from './components/loginPage/LoginPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path={`/:chatRoom`} element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
