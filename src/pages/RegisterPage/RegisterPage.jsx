import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { form, label, input, button } from './RegisterPage.module.scss';

export default function RegisterPage() {
  // const dispatch = useDispatch();
  // const onRegister = user => dispatch(authOperations.register(user));

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
          alert('Passwords do not match');
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

    // onRegister({ email, password });
    reset();
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit} className={form} autoComplete="off">
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
        <p>Do you have an account?</p>
        <NavLink to="/login" exact>
          Log in
        </NavLink>
      </form>
    </div>
  );
}
