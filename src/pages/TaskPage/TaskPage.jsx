// import { useState, useEffect } from 'react';
import { useState } from 'react';

import sprite from '../../sprite.svg';
import TaskForm from '../../components/TaskForm/TaskForm';
import Header from '../../components/Header';

const TaskPage = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  const onCancel = () => setIsOpen(false);

  // useEffect(() => {
  //   setModalOpen(true);
  // }, []);

  const cssClasses = ['modalOverlay', isOpen ? 'ModalOpen' : 'ModalClosed'];
  return (
    <>
      {/* {modalOpen && ( */}
      <div className={cssClasses.join(' ')}>
        <div className="modalWindow">
          <div className="modalHeader">
            <Header />
          </div>
          <div className="iconCloseBlock">
            <svg className="iconClose" onClick={onCancel}>
              <use href={sprite + '#icon-close-cross'}></use>
            </svg>
          </div>
          <h2 className="modalTitle">Створення задачі</h2>
          {/* <TaskForm onCancel={handelCancel} /> */}
          <TaskForm onCancel={onCancel} />

          {/* <div className="modalBody"></div> */}
          {/* <div className="modalFooter"></div> */}
        </div>
      </div>
      {/* // )} */}
    </>
  );
};

export default TaskPage;
