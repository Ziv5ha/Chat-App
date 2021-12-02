import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <form>
      <input
        type='text'
        placeholder='Enter Username'
        className='login-u-input'
      ></input>
      <button className='login-btn'>Log in</button>
    </form>
  );
}
