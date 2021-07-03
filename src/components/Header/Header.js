import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import UserMenu from '../UserMenu';
import sprite from '../../sprite.svg';
import Container from '../Container';
import { authSelectors } from '../../redux/auth';

const Header = () => {
const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={styles.section}>
      <Container>
        <header className={styles.header}>
          <svg className={styles.logo}>
            <use href={sprite + '#icon-logo'}></use>
          </svg>
          {isAuthenticated && <UserMenu />}
        </header>
      </Container>
    </div>
  );
};

export default Header;
