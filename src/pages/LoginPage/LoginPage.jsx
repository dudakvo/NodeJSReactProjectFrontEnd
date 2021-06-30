import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import {
  bgCircles,
  form,
  title,
  label,
  input,
  button,
  link,
} from './LoginPage.module.scss';

export default function LoginPage() {
  // const dispatch = useDispatch();
  // const onLogin = user => dispatch(authOperations.logIn(user));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = event => {
    const { name, value } = event.target;

    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    // onLogin({ email, password });

    reset();
  };

  return (
    <div className={bgCircles}>
      <form onSubmit={handleSubmit} className={form} autoComplete="off">
        <h1 className={title}>Enter</h1>
        <label className={label}>
          E-mail
          <input
            className={input}
            type="email"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </label>

        <label className={label}>
          Password
          <input
            className={input}
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </label>

        <button type="submit" className={button}>
          Enter
        </button>
        <p>
          No account?
          <NavLink className={link} to="/" exact>
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
}
