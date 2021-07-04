import { createAction } from '@reduxjs/toolkit';

const isOpenModal = createAction('modal/open');
const isCloseModal = createAction('modal/close');

const openModalSprint = createAction('modal/OpenSprint');
const closeModalSprint = createAction('modal/closeSprint');

const openModalAddPeople = createAction('modal/openAddPeople');
const closeModalAddPeople = createAction('modal/closeAddPeople');

const openModalProject = createAction('modal/openProject');
const closeModalProject = createAction('modal/closeProject');

const modalActions = {
  openModalSprint,
  closeModalSprint,
  openModalAddPeople,
  closeModalAddPeople,
  openModalProject,
  closeModalProject,
  isOpenModal,
  isCloseModal,
};

export default modalActions;
