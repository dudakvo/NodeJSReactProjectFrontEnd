import React from 'react';
import s from '../modal.module.scss';
import svg from '../../../../sprite.svg';

const ModalWrapper = ({
  onCloseModal,
  nodeRef,
  handleInputs,
  valueName,
  taskScheduledHours,
  onCreateProject,
  setTaskName,
  handleSubmitTask,
  setTaskInput,
}) => {
  return (
    <div className={s.wrapper} ref={nodeRef}>
      <div className={s.header}>
        <h2 className={s.title}>Сreating Task</h2>
      </div>
      <div className={s.body}>
        <form className={s.formWrapper}>
          <div className={s.inputWrapper}>
            <input
              type="text"
              id="name"
              placeholder=" "
              name="project"
              onChange={e => setTaskInput(e)}
              defaultValue={valueName}
            />
            <label htmlFor="name">Task name</label>
          </div>
          <div className={s.inputWrapper}>
            <input
              type="text"
              id="description"
              placeholder=" "
              name="description"
              onChange={e => setTaskInput(e)}
              defaultValue={taskScheduledHours}
            />
            <label htmlFor="description">Description</label>
          </div>
        </form>
      </div>
      <div className={s.footer}>
        <button type="button" onClick={handleSubmitTask}>
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
