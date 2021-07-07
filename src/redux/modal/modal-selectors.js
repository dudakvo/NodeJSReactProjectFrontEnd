const getIsOpenModalSprint = state => state.modal.isOpenModalSprint;
const getIsOpenModalAddPeople = state => state.modal.isOpenModalAddPeople;
const getIsOpenModalProject = state => state.modal.isOpenModalProject;
const getIsOpenModalTask = state => state.modal.isOpenModalTask;
const getIsOpenModal = state => state.modal.isOpenModal;

const modalSelectors = {
  getIsOpenModalSprint,
  getIsOpenModalAddPeople,
  getIsOpenModalProject,
  getIsOpenModal,
  getIsOpenModalTask,
};

export default modalSelectors;
