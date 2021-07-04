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
} from './RegisterForm.module.scss';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const onRegister = user => dispatch(authOperations.register(user));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rptPassword, setRptPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState(true);

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

    if (password !== rptPassword) {
      setMatchPassword(false);
      console.log(matchPassword);
    } else {
      onRegister({ email, password });
      setMatchPassword(true);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={form} autoComplete="off">
      <h1 className={title}>Registration</h1>

      <div className={field}>
        <input
          className={input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
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
          onChange={handleChange}
          id="password"
          placeholder=" "
        />
        <label className={label} htmlFor="password">
          Password
        </label>
      </div>

      <div className={field}>
        <input
          className={input}
          type="password"
          name="repeatPassword"
          value={rptPassword}
          onChange={handleChange}
          id="rptPassword"
          placeholder=" "
        />
        <label className={label} htmlFor="rptPassword">
          Repeat password
        </label>
      </div>

      {!matchPassword ? (
        <p className={wrongPwd}>Passwords do not match</p>
      ) : (
        <p className={wrongPwd}> </p>
      )}

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
