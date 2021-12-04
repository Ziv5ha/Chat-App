import axios from 'axios';
import React, { useRef } from 'react';
import { useParams } from 'react-router';
import '../../styles/chat/sendMsg.css';

export default function SendMsg({ user }) {
  const msgRef = useRef(null);
  let params = useParams();
  const { chatRoom } = params;

  function sendMsg() {
    axios.post(`chat/${chatRoom}`, { msg: msgRef.current.value, sender: user });
    msgRef.current.value = '';
  }
  return (
    <div className='send-input'>
      <textarea ref={msgRef} placeholder='Send Message' />
      <button onClick={sendMsg}>Send</button>
    </div>
  );
}
