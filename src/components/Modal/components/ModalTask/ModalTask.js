import React from 'react';
import s from '../modal.module.scss';
import svg from '../../../../sprite.svg';

const ModalWrapper = ({
  onCloseModal,
  nodeRef,
  valueName,
  taskScheduledHours,
  handleSubmitTask,
  setTaskInput,
  emptyInputs,
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
              type="number"
              id="description"
              placeholder=" "
              name="description"
              onChange={e => setTaskInput(e)}
              defaultValue={taskScheduledHours}
            />
            <label htmlFor="description">Sheduled hours</label>
          </div>
        </form>
      </div>
      {emptyInputs && (
        <span className={s.emptyInput}>
          You have empty field. Please input something.
        </span>
      )}
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
