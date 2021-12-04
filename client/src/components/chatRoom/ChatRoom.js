import React, { useState } from 'react';
import SendMsg from './SendMsg';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ChatRoom() {
  const [msgs, setMsgs] = useState(null);
  let params = useParams();
  const { chatRoom } = params;

  let response = new EventSource(`http://localhost:8080/chat/${chatRoom}`);
  response.onmessage = ({ data }) => {
    const rawMsgs = JSON.parse(data);
    const msgsList = rawMsgs.map((msg, i) => {
      const user = 'admin';
      return (
        <div
          key={i}
          className={msg.sender.includes(user) ? 'msg' : 'msg sentByUser'}
        >
          <div className='sender'>{msg.sender}</div>
          <div className='msg'>{msg.msg}</div>
        </div>
      );
    });
    setMsgs(msgsList);
  };

  return (
    <div>
      <div>{msgs}</div>
      <SendMsg />
    </div>
  );
}
