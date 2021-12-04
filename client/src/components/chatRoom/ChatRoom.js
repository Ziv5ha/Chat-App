import React, { useState } from 'react';
import SendMsg from './SendMsg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ChatNav from './ChatNav';
import '../../styles/chat/room.css';

export default function ChatRoom({ user }) {
  const [msgs, setMsgs] = useState(null);
  let params = useParams();
  const { chatRoom } = params;

  let response = new EventSource(`http://localhost:8080/chat/${chatRoom}`);
  response.onmessage = ({ data }) => {
    const rawMsgs = JSON.parse(data);
    const msgsList = rawMsgs.map((msg, i) => {
      return (
        <div
          key={i}
          className={
            msg.sender.includes(user)
              ? 'msg-container sentByUser'
              : 'msg-container'
          }
        >
          <div className='sender'>{msg.sender}</div>
          <div className='msg'>{msg.msg}</div>
        </div>
      );
    });
    setMsgs(msgsList);
  };

  return (
    <div className='app'>
      <ChatNav user={user} />
      <div className='chat'>{msgs}</div>
      <SendMsg user={user} />
    </div>
  );
}
