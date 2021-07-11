import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import modalActions from './modal-actions';

const isOpenModalSprint = createReducer(null, {
  [modalActions.openModalSprint]: (state, { payload }) => payload,
  [modalActions.closeModalSprint]: () => null,
});

const isOpenModalAddPeople = createReducer(null, {
  [modalActions.openModalAddPeople]: (state, { payload }) => payload,
  [modalActions.closeModalAddPeople]: () => null,
});

const isOpenModalProject = createReducer(false, {
  [modalActions.openModalProject]: () => true,
  [modalActions.closeModalProject]: () => false,
});

const isOpenModalChart = createReducer(false, {
  [modalActions.openModalChart]: () => true,
  [modalActions.closeModalChart]: () => false,
});

const isOpenModalTask = createReducer(null, {
  [modalActions.openModalTask]: (state, { payload }) => payload,
  [modalActions.closeModalTask]: () => null,
});

const isOpenModal = createReducer(false, {
  [modalActions.isOpenModal]: () => true,
  [modalActions.isCloseModal]: () => false,
});

export default combineReducers({
  isOpenModalSprint,
  isOpenModalAddPeople,
  isOpenModalProject,
  isOpenModalTask,
  isOpenModal,
  isOpenModalChart,
});
