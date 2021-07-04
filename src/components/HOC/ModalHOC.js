import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalToggler from '../Modal/ModalToggler';
import ModalProject from '../Modal/components/ModalProject';
import ModalSprint from '../Modal/components/ModalSprint';
import ModalAddPeople from '../Modal/components/ModalAddPeople';
import s from '../Modal/components/modal.module.scss';

const ModalHOC = ({
  people,
  sprint,
  project,
  onCloseModal,
  isOpen,
  nodeRref,
}) => {
  const [startDate, setStartDate] = useState('');
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const emailArr = ['test@gmail.com', 'test@gmail.com'];
  const message = 'You have not added any users yet';
  const ref = useRef(null);

  const onClickOutsideHandler = e => {
    if (ref.current) {
      if (isOpen && !ref.current.contains(e.target)) {
        onCloseModal();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);
    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    };
    // eslint-disable-next-line
  }, []);

  return ReactDOM.createPortal(
    <ModalToggler
      togglePeopleModal={people}
      toggleSprintModal={sprint}
      toggleProjectModal={project}
    >
      {({ toggleProjectModal, toggleSprintModal, togglePeopleModal }) => (
        <>
          <div className={`${s.backdrop} backdrop`}>
            {toggleProjectModal && (
              <ModalProject
                onCloseModal={onCloseModal}
                handleRef={ref}
                nodeRef={nodeRref}
              />
            )}
            {togglePeopleModal && (
              <ModalAddPeople
                emailList={emailArr}
                message={message}
                onCloseModal={onCloseModal}
                handleRef={ref}
                nodeRef={nodeRref}
              />
            )}
            {toggleSprintModal && (
              <ModalSprint
                onCloseModal={onCloseModal}
                handleRef={ref}
                chechBoxStatus={activeCheckbox}
                handleCheckBox={setActiveCheckbox}
                startDate={startDate}
                setStartDate={setStartDate}
                nodeRef={nodeRref}
              />
            )}
          </div>
        </>
      )}
    </ModalToggler>,
    document.getElementById('portal'),
  );
};

export default ModalHOC;

/* <CSSTransition
            in={showModalSprint}
            timeout={300}
            classNames="user__menu-modal"
            unmountOnExit
          >
            <ModalSprint />
          </CSSTransition>
          <CSSTransition
            in={showModalAddPeople}
            timeout={300}
            classNames="user__menu-modal"
            unmountOnExit
          >
            <ModalAddPeople listEmail={emailArr} mes={message} />
          </CSSTransition> */
