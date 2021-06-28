import s from '../modal.module.scss';
import svg from '../../../../sprite.svg';

const ModalWrapper = ({ closeModal }) => {
  return (
    <div className={s.backdrop}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h2 className={s.title}>Сreating a project</h2>
        </div>
        <div className={s.body}>
          <form className={s.formWrapper}>
            <div className={s.inputWrapper}>
              <input type="text" id="name" placeholder=" " />
              <label htmlFor="name">Project name</label>
            </div>
            <div className={s.inputWrapper}>
              <input type="text" id="description" placeholder=" " />
              <label htmlFor="description">Description</label>
            </div>
          </form>
        </div>
        <div className={s.footer}>
          <button type="button">Ready</button>
          <button type="button">Cancel</button>
        </div>
        <span className={s.iconCloseWrapper} onClick={closeModal}>
          <svg>
            <use href={`${svg}#icon-close-cross`}></use>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ModalWrapper;
