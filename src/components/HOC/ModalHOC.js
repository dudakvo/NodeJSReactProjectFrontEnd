import React from 'react';
import ReactDOM from 'react-dom';
import ModalToggler from '../Modal/ModalToggler';
import ModalProject from '../Modal/components/ModalProject';
import ModalSprint from '../Modal/components/ModalSprint';
import ModalAddPeople from '../Modal/components/ModalAddPeople';
// import { CSSTransition } from 'react-transition-group';
import s from '../Modal/components/modal.module.scss';

const ModalHOC = ({ people, sprint, project, onCloseModal, isOpen }) => {
  const emailArr = ['test@gmail.com', 'test@gmail.com'];
  const message = 'You have not added any users yet';
  // const [sprintContainer, setSprintContainer] = useState('');

  // let container = '';

  const getRef = ref => {
    // container = ref;
  };

  // const sprintRef = document.getElementById('modal-sprint-wrapper');

  const onClickOutsideHandler = e => {
    // console.dir(container);
    // if (container.current) {
    //   if (
    //     (isOpen && !container.current.contains(e.target)) ||
    //     (isOpen && sprintRef.contains(e.target))
    //   ) {
    //     onCloseModal();
    //     window.removeEventListener('click', onClickOutsideHandler);
    //   }
    // }
  };

  window.addEventListener('click', onClickOutsideHandler);

  //eslint-disable-next-line

  return ReactDOM.createPortal(
    <ModalToggler
      togglePeopleModal={people}
      toggleSprintModal={sprint}
      toggleProjectModal={project}
    >
      {({ toggleProjectModal, toggleSprintModal, togglePeopleModal }) => (
        <>
          <div className={s.backdrop}>
            {toggleProjectModal && (
              <ModalProject onCloseModal={onCloseModal} handleRef={getRef} />
            )}
            {toggleSprintModal && (
              <ModalSprint onCloseModal={onCloseModal} handleRef={getRef} />
            )}
            {togglePeopleModal && (
              <ModalAddPeople
                emailList={emailArr}
                message={message}
                onCloseModal={onCloseModal}
                handleRef={getRef}
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
