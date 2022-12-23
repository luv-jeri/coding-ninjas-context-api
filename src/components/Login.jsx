import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import { useUserContext } from '../context/UserContext';

function Login() {
  const { login } = useUserContext();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Login</h1>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log('hell');
            login(email, password);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
