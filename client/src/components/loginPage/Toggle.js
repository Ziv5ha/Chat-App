import React, { useRef } from 'react';
import '../../styles/login/toggle.css';
export default function Toggle({ toggleBtnRef }) {
  const toggleDivRef = useRef(null);
  function toggleFunc() {
    if (toggleDivRef.current.classList.contains('show-register')) {
      toggleDivRef.current.classList.remove('show-register');
      toggleBtnRef.current.textContent = 'Register';
    } else {
      toggleDivRef.current.classList.add('show-register');
      toggleBtnRef.current.textContent = 'Log-in';
    }
  }
  return (
    <div ref={toggleDivRef} className='register-login-toggle'>
      <button ref={toggleBtnRef} onClick={toggleFunc}>
        Register
      </button>
    </div>
  );
}
