import React from 'react';
import SendMsg from './SendMsg';
import { useParams } from 'react-router-dom';

export default function ChatRoom() {
  let params = useParams();
  const room = params.room;
  //   const room = params.room.replaceAll('-', ' ');
  //   request msgs and users from server
  const msgs = ['wow', 'cool', 'awesome'];
  const msgsElem = msgs.map((msg) => (
    <div>
      <div>sender</div>
      <div>{msg}</div>
      <div>time</div>
      <div>recievedByServer</div>
    </div>
  ));
  return (
    <div>
      <div>{msgsElem}</div>
      <SendMsg />
    </div>
  );
}
