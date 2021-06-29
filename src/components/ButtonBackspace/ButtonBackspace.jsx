import sprite from '../../sprite.svg';
import styles from './ButtonBackspace.module.scss';

const ButtonBackspace = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <svg className={styles.svg}>
        <use href={sprite + '#icon-arrow'} />
      </svg>

      <p className={styles.text}>{text}</p>
    </button>
  );
};
export default ButtonBackspace;
