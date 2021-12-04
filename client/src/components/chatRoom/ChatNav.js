import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/chat-nav.css';

export default function ChatNav() {
  const [rooms, setRooms] = useState(null);
  (async () => {
    try {
      const response = await axios.get('http://localhost:8080/chat/rooms', {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjM4NTYwMjU3fQ.qStAH1AQwiA4m8PAeXFk99hFm5aLcF0f6Yt5NV6wyUs',
      });
      const navUl = response.data.map((room) => (
        <li key={room} className='chat-link'>
          <Link to={`/${room.toLowerCase()}`}>{room}</Link>
        </li>
      ));
      setRooms(navUl);
    } catch (error) {
      const msg = 'sorry, there was an error';
      const seperatedErrorMsgs = msg.split(' ').map((word) => (
        <li key={word} className='chat-link'>
          {word}
        </li>
      ));
      setRooms(seperatedErrorMsgs);
    }
  })();
  return <ul className='nav'>{rooms}</ul>;
}
