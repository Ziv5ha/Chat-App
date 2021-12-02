import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatNav({ chatRooms }) {
  const navUl = chatRooms.map((room) => (
    <li key={room}>
      <Link to={`/${room.toLowerCase()}`}>{room}</Link>
    </li>
  ));
  return (
    <div>
      <ul>{navUl}</ul>
    </div>
  );
}
