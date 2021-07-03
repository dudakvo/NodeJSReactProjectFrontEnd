const getIsOpenModalSprint = state => state.modal.isOpenModalSprint;
const getIsOpenModalAddPeople = state => state.modal.isOpenModalAddPeople;
const getIsOpenModalProject = state => state.modal.isOpenModalProject;
const getIsOpenModal = state => state.modal.isOpenModal;

const modalSelectors = {
  getIsOpenModalSprint,
  getIsOpenModalAddPeople,
  getIsOpenModalProject,
  getIsOpenModal,
};

export default modalSelectors;
