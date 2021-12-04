import React, { useRef } from 'react';
import LoginDiv from './loginSection';
import RegisterDiv from './registerSection';
import Toggle from './Toggle';
import '../../styles/login/page.css';

export default function LoginPage({ setUser }) {
  const toggleBtnRef = useRef(null);

  return (
    <div className='log-reg'>
      <LoginDiv setUser={setUser} />
      <RegisterDiv setUser={setUser} toggleBtnRef={toggleBtnRef} />
      <Toggle toggleBtnRef={toggleBtnRef} />
    </div>
  );
}
