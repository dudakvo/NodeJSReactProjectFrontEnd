import React from 'react';
import s from '../modal.module.scss';
import svg from '../../../../sprite.svg';

const ModalWrapper = ({
  onCloseModal,
  handleRef,
  nodeRef,
  handleInputs,
  valueName,
  valueDescription,
  onCreateProject,
}) => {
  return (
    <div className={s.wrapper} ref={nodeRef}>
      <div className={s.header}>
        <h2 className={s.title}>Сreating a project</h2>
      </div>
      <div className={s.body}>
        <form className={s.formWrapper}>
          <div className={s.inputWrapper}>
            <input
              type="text"
              id="name"
              placeholder=" "
              name="project"
              onChange={handleInputs}
              defaultValue={valueName}
            />
            <label htmlFor="name">Project name</label>
          </div>
          <div className={s.inputWrapper}>
            <input
              type="text"
              id="description"
              placeholder=" "
              name="description"
              onChange={handleInputs}
              value={valueDescription}
            />
            <label htmlFor="description">Description</label>
          </div>
        </form>
      </div>
      <div className={s.footer}>
        <button type="button" onClick={onCreateProject}>
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

export default ModalWrapper;
