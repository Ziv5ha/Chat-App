import React from 'react';
import { Link } from 'react-router-dom';
import ChatNav from './chatRoom/ChatNav';

export default function HomePage() {
  return (
    <div>
      <ChatNav chatRooms={['Global', 'Politics', 'Gosip']} />
      <div>
        This is a placeholder for a home page that showcases all the features of
        this chat app
      </div>
    </div>
  );
}
