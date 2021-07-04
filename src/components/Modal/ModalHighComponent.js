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
  const isOpenModalChart = useSelector(modalSelectors.getIsOpenModalChart);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(modalActions.isCloseModal());
    dispatch(modalActions.closeModalProject());
    dispatch(modalActions.closeModalSprint());
    dispatch(modalActions.closeModalAddPeople());
    dispatch(modalActions.closeModalChart());
  };

  return (
    <>
      {isOpen && (
        <Modal
          project={isOpenModalProject}
          sprint={isOpenModalSprint}
          people={isOpenModalAddPeople}
          chart={isOpenModalChart}
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default ModalHighComponent;
