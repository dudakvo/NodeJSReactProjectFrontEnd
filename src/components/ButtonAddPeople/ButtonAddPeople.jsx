import { modalActions } from '../../redux/modal';
import { useDispatch } from 'react-redux';
import styles from './ButtonAddPeople.module.scss';
import sprite from '../../sprite.svg';

const ButtonAddPeople = () => {
  const dispatch = useDispatch();
  const handleAddPeople = () => {
    dispatch(modalActions.isOpenModal());
    dispatch(modalActions.openModalAddPeople());
    document.querySelector('body').classList.add('overflow__body');
  };
  return (
    <button
      onClick={handleAddPeople}
      className={styles.button_add_people}
      type="button"
    >
      <svg className={styles.svg}>
        <use href={sprite + '#icon-add-people'} />
      </svg>
      <p className={styles.text}>add people</p>
    </button>
  );
};

export default ButtonAddPeople;
