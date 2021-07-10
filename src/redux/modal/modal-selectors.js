const getIsOpenModalSprint = state => state.modal.isOpenModalSprint;
const getIsOpenModalAddPeople = state => state.modal.isOpenModalAddPeople;
const getIsOpenModalProject = state => state.modal.isOpenModalProject;
const getIsOpenModalTask = state => state.modal.isOpenModalTask;
const getIsOpenModal = state => state.modal.isOpenModal;
const getIsOpenModalChart = state => state.modal.isOpenModalChart;

const modalSelectors = {
  getIsOpenModalSprint,
  getIsOpenModalAddPeople,
  getIsOpenModalProject,
  getIsOpenModal,
  getIsOpenModalChart,
  getIsOpenModalTask,
};

export default modalSelectors;
