import React from 'react';
import { Link } from 'react-router-dom';
import ChatNav from './chatRoom/ChatNav';
import '../styles/home-page.css';
import LoginPage from './loginPage/LoginPage';

export default function HomePage({ user, setUser }) {
  return (
    <div>
      <Link to='login'>Log In</Link>
      <ChatNav user={user} />
      <div className='app'>
        This is a placeholder for a home page that showcases all the features of
        this chat app
      </div>
    </div>
  );
}
