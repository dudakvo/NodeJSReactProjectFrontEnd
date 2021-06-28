import ModalToggler from '../Modal/ModalToggler';
import ModalProject from '../Modal/components/ModalProject';
// import ModalSprint from '../Modal/components/ModalSprint';
// import ModalAddPeople from '../Modal/components/ModalAddPeople';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import s from '../Modal/components/modal.module.scss';

const ModalHOC = () => {
  //   const emailArr = ['test@gmail.com', 'test@gmail.com'];
  //   const message = 'You have not added any users yet';
  const [showModalProject, setShowModalProject] = useState(false);
  const toggle = () => setShowModalProject(prev => !prev);
  const closeModal = () => setShowModalProject(false);

  return (
    <ModalToggler>
      {() => (
        <>
          <button
            style={{ width: '200px', height: '30px' }}
            onClick={toggle}
          ></button>
          <CSSTransition
            in={showModalProject}
            timeout={300}
            classNames={s.modalTransition}
            unmountOnExit
            closeModal={closeModal}
          >
            <ModalProject />
          </CSSTransition>
          {/* <CSSTransition
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
          </CSSTransition> */}
        </>
      )}
    </ModalToggler>
  );
};

export default ModalHOC;
