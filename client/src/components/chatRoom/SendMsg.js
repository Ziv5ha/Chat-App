import axios from 'axios';
import React, { useRef } from 'react';
import { useParams } from 'react-router';

export default function SendMsg() {
  const msgRef = useRef(null);
  let params = useParams();
  const { chatRoom } = params;
  const user = 'admin';

  function sendMsg() {
    axios.post(`chat/${chatRoom}`, { msg: msgRef.current.value, sender: user });
    msgRef.current.value = '';
  }
  return (
    <div>
      <textarea ref={msgRef} placeholder='Send Message' />
      <button onClick={sendMsg}>Send</button>
    </div>
  );
}
