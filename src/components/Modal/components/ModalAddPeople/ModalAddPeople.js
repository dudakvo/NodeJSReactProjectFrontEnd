import React from 'react';
import s from '../modal.module.scss';
import svg from '../../../../sprite.svg';

const ModalAddPeople = ({
  emailList,
  message,
  onCloseModal,
  handleRe,
  nodeRef,
  setPeopleEmail,
  value,
  handleAddPeople,
}) => {
  return (
    <div className={s.wrapper} ref={nodeRef}>
      <div className={s.header}>
        <h2 className={s.title}>Add people</h2>
      </div>
      <div className={s.body}>
        <form className={s.formWrapper}>
          <div className={s.inputWrapper}>
            <input
              type="text"
              id="name"
              placeholder=" "
              onChange={e => setPeopleEmail(e.target.value)}
              defaultValue={value}
            />
            <label htmlFor="name">Enter e-mail</label>
          </div>
        </form>
        <p>Added users:</p>

        {emailList.length !== 0 ? (
          <ul className={s.listEmail}>
            {emailList.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        ) : (
          <p>{message}</p>
        )}
      </div>
      <div className={s.footer}>
        <button type="button" onClick={handleAddPeople}>
          Ready
        </button>
        <button type="button" onClick={onCloseModal}>
          Cancel
        </button>
      </div>
      <span className={s.iconCloseWrapper} onClick={onCloseModal}>
        <svg>
          <use href={`${svg}#icon-close-cross`}></use>
        </svg>
      </span>
    </div>
  );
};

export default ModalAddPeople;
