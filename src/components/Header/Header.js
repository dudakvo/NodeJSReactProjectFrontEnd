import React from 'react';
import styles from './Header.module.css';
import UserMenu from '../UserMenu';
import sprite from '../../sprite.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <svg className={styles.logo}>
        <use href={sprite + '#icon-logo'}></use>
      </svg>
      <UserMenu />
    </header>
  );
};

export default Header;
