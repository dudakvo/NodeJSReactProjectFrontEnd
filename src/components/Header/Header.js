import React from 'react';
import styles from './Header.module.css';
import logo from '../Header/Logo.png';
import UserMenu from '../UserMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <UserMenu />
    </header>
  );
};

export default Header;
