import sprite from '../../sprite.svg';
import styles from './ButtonAdd.module.scss';

const ButtonAdd = ({ onClick, text, style }) => {
  return (
    <button
      type="button"
      className={[styles.button_add, style].join('')}
      onClick={onClick}
    >
      <div className={styles.button_plus}>
        <svg className={styles.plus}>
          <use href={sprite + '#icon-plus'} />
        </svg>
      </div>

      <p className={styles.button_text}>{text}</p>
    </button>
  );
};

export default ButtonAdd;
