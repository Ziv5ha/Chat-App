import axios from 'axios';
import React, { useRef } from 'react';
import '../../styles/login/inputSection.css';

export default function RegisterDiv({ setUser, toggleBtnRef }) {
  const username = useRef(null);
  const password = useRef(null);

  async function registerRequest() {
    console.log({
      password: password.current.value,
      username: username.current.value,
    });
    try {
      await axios.post('/user/register', {
        password: password.current.value,
        username: username.current.value,
      });
      toggleBtnRef.current.click();
      console.log('User created');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='user-input-div register'>
      <input
        ref={username}
        type='text'
        placeholder='Enter Username'
        className='register-input'
      ></input>
      <input
        ref={password}
        type='text'
        placeholder='Enter Password'
        className='register-input'
      ></input>
      <button className='register-btn' onClick={registerRequest}>
        Register
      </button>
    </div>
  );
}
