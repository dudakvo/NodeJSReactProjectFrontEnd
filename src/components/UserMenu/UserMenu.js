import { useSelector, useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';
import sprite from '../../sprite.svg';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <span className={styles.email}>{email}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <svg className={styles.icon}>
          <use href={sprite + '#icon-log-out'}></use>
        </svg>
        <span className={styles.text}>Log Out</span>
      </button>
    </div>
  );
};

export default UserMenu;
