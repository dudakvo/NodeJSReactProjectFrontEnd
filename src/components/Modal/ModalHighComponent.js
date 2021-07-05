import React, { useRef } from 'react';
import Modal from '../HOC/ModalHOC';
import { modalSelectors, modalActions } from '../../redux/modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './modal-animation.scss';

const ModalHighComponent = () => {
  const isOpen = useSelector(modalSelectors.getIsOpenModal);
  const isOpenModalProject = useSelector(modalSelectors.getIsOpenModalProject);
  const isOpenModalSprint = useSelector(modalSelectors.getIsOpenModalSprint);
  const isOpenModalAddPeople = useSelector(
    modalSelectors.getIsOpenModalAddPeople,
  );
  const nodeRef = useRef(null);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(modalActions.isCloseModal());
    dispatch(modalActions.closeModalProject());
    dispatch(modalActions.closeModalSprint());
    dispatch(modalActions.closeModalAddPeople());
    document.querySelector('body').classList.remove('overflow__body');
  };

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen}
        timeout={300}
        classNames="menu-modal"
        unmountOnExit
      >
        <Modal
          project={isOpenModalProject}
          sprint={isOpenModalSprint}
          people={isOpenModalAddPeople}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
          nodeRref={nodeRef}
        />
      </CSSTransition>
      {/* {isOpen && (
        <Modal
          project={isOpenModalProject}
          sprint={isOpenModalSprint}
          people={isOpenModalAddPeople}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
      )} */}
    </>
  );
};

export default ModalHighComponent;
