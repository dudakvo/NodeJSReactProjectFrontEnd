import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { form, label, input, button } from './LoginPage.module.scss';

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
    <div>
      <h1>Enter</h1>

      <form onSubmit={handleSubmit} className={form} autoComplete="off">
        <label className={label}>
          Почта
          <input
            className={input}
            type="email"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </label>

        <label className={label}>
          Пароль
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
        <p>No account?</p>
        <NavLink to="/register" exact>
          Register
        </NavLink>
      </form>
    </div>
  );
}
