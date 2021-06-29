import styles from './UserMenu.module.css';
import sprite from '../../sprite.svg';

const UserMenu = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>Username</span>
      <button type="button" className={styles.button}>
        <svg className={styles.icon}>
          <use href={sprite + '#icon-log-out'}></use>
        </svg>
        <span className={styles.text}>Log Out</span>
      </button>
    </div>
  );
};

export default UserMenu;
