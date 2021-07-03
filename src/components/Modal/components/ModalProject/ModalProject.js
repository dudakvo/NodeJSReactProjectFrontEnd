import React, { useRef, useEffect } from 'react';
import s from '../modal.module.scss';
import svg from '../../../../sprite.svg';

const ModalWrapper = ({ onCloseModal, handleRef }) => {
  let toggleContainer = useRef(null);
  useEffect(() => {
    handleRef(toggleContainer);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.wrapper} ref={toggleContainer}>
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

export default ModalWrapper;
