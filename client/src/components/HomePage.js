import React from 'react';
// import { Link } from 'react-router-dom';
import ChatNav from './chatRoom/ChatNav';
import '../styles/home-page.css';

export default function HomePage() {
  return (
    <div>
      <ChatNav />
      <div className='app'>
        This is a placeholder for a home page that showcases all the features of
        this chat app
      </div>
    </div>
  );
}
