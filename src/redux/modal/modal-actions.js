import { createAction } from '@reduxjs/toolkit';

const isOpenModal = createAction('modal/open');
const isCloseModal = createAction('modal/close');

const openModalSprint = createAction('modal/OpenSprint');
const closeModalSprint = createAction('modal/closeSprint');

const openModalAddPeople = createAction('modal/openAddPeople');
const closeModalAddPeople = createAction('modal/closeAddPeople');

const openModalProject = createAction('modal/openProject');
const closeModalProject = createAction('modal/closeProject');

const openModalChart = createAction('modal/openChart');
const closeModalChart = createAction('modal/closeChart');
const openModalTask = createAction('modal/openTask');
const closeModalTask = createAction('modal/closeTask');

const modalActions = {
  openModalSprint,
  closeModalSprint,
  openModalAddPeople,
  closeModalAddPeople,
  openModalProject,
  closeModalProject,
  isOpenModal,
  isCloseModal,
  openModalChart,
  closeModalChart,
  openModalTask,
  closeModalTask,
};

export default modalActions;
