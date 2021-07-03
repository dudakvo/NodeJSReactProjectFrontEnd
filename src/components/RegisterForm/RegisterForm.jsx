import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import {
  form,
  title,
  label,
  input,
  button,
  link,
} from './RegisterForm.module.scss';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const onRegister = user => dispatch(authOperations.register(user));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rptPassword, setRptPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'repeatPassword':
        setRptPassword(value);
        if (rptPassword !== password) {
          console.log('Passwords do not match');
        }
        break;
      default:
        alert('Enter correct data');
        break;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setRptPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister({ email, password });
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={form} autoComplete="off">
      <h1 className={title}>Registration</h1>
      <label className={label}>
        E-mail
        <input
          className={input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label className={label}>
        Password
        <input
          className={input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <label className={label}>
        Repeat password
        <input
          className={input}
          type="password"
          name="repeatPassword"
          value={rptPassword}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={button}>
        Register
      </button>
      <p>
        Do you have an account?
        <NavLink className={link} to={routes.login} exact>
          Log in
        </NavLink>
      </p>
    </form>
  );
}
