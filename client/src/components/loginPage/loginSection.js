import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login/inputSection.css';

export default function LoginDiv({ setUser }) {
  let navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);

  async function LoginRequest() {
    console.log({
      password: password.current.value,
      username: username.current.value,
    });
    try {
      await axios.post('/user/login', {
        password: password.current.value,
        username: username.current.value,
      });
      setUser(username.current.value);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='user-input-div login'>
      <input
        ref={username}
        type='text'
        placeholder='Enter Username'
        className='login-input'
      ></input>
      <input
        ref={password}
        type='text'
        placeholder='Enter Password'
        className='login-input'
      ></input>
      <button className='login-btn' onClick={LoginRequest}>
        Log in
      </button>
    </div>
  );
}
