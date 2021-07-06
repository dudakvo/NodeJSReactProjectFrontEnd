// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { modalSelectors, modalActions } from '../../redux/modal';

import sprite from '../../sprite.svg';
import TaskForm from '../../components/TaskForm/TaskForm';
import Header from '../../components/Header';

const TaskPage = ({ onSubmit }) => {
  const isOpen = useSelector(modalSelectors.getIsOpenModalTask);

  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(modalActions.closeModalTask());
  };
  // const [modalOpen, setModalOpen] = useState(false);

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
            <button type="button" onClick={onCancel}>
              <svg className="iconClose">
                <use href={sprite + '#icon-close-cross'}></use>
              </svg>
            </button>
          </div>
          <h2 className="modalTitle">Creating a task</h2>
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
