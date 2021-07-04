import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import {
  form,
  title,
  field,
  label,
  input,
  wrongPwd,
  button,
  link,
} from './LoginForm.module.scss';

export default function LoginForm() {
  const dispatch = useDispatch();
  const onLogin = user => dispatch(authOperations.logIn(user));

  let wrongPassword = false;

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

    onLogin({ email, password });

    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={form} autoComplete="off">
      <h1 className={title}>Enter</h1>

      <div className={field}>
        <input
          className={input}
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          id="email"
          placeholder=" "
        />
        <label className={label} htmlFor="email">
          E-mail
        </label>
      </div>

      <div className={field}>
        <input
          className={input}
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          id="password"
          placeholder=" "
        />
        <label className={label} htmlFor="password">
          Password
        </label>
      </div>

      {wrongPassword ? (
        <p className={wrongPwd}>Wrong password</p>
      ) : (
        <p className={wrongPwd}> </p>
      )}

      <button type="submit" className={button}>
        Enter
      </button>
      <p>
        No account?
        <NavLink className={link} to={routes.register} exact>
          Register
        </NavLink>
      </p>
    </form>
  );
}
