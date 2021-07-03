import Modal from '../HOC/ModalHOC';
import { modalSelectors, modalActions } from '../../redux/modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ModalHighComponent = () => {
  const isOpen = useSelector(modalSelectors.getIsOpenModal);
  const isOpenModalProject = useSelector(modalSelectors.getIsOpenModalProject);
  const isOpenModalSprint = useSelector(modalSelectors.getIsOpenModalSprint);
  const isOpenModalAddPeople = useSelector(
    modalSelectors.getIsOpenModalAddPeople,
  );

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(modalActions.isCloseModal());
    dispatch(modalActions.closeModalProject());
    dispatch(modalActions.closeModalSprint());
    dispatch(modalActions.closeModalAddPeople());
  };

  return (
    <>
      {isOpen && (
        <Modal
          project={isOpenModalProject}
          sprint={isOpenModalSprint}
          people={isOpenModalAddPeople}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default ModalHighComponent;
