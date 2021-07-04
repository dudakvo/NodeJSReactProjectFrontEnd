const getIsOpenModalSprint = state => state.modal.isOpenModalSprint;
const getIsOpenModalAddPeople = state => state.modal.isOpenModalAddPeople;
const getIsOpenModalProject = state => state.modal.isOpenModalProject;
const getIsOpenModal = state => state.modal.isOpenModal;
const getIsOpenModalChart = state => state.modal.isOpenModalChart;

const modalSelectors = {
  getIsOpenModalSprint,
  getIsOpenModalAddPeople,
  getIsOpenModalProject,
  getIsOpenModal,
  getIsOpenModalChart,
};

export default modalSelectors;
