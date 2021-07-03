import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import modalActions from './modal-actions';

const isOpenModalSprint = createReducer(false, {
  [modalActions.openModalSprint]: () => true,
  [modalActions.closeModalSprint]: () => false,
});

const isOpenModalAddPeople = createReducer(false, {
  [modalActions.openModalAddPeople]: () => true,
  [modalActions.closeModalAddPeople]: () => false,
});

const isOpenModalProject = createReducer(false, {
  [modalActions.openModalProject]: () => true,
  [modalActions.closeModalProject]: () => false,
});

const isOpenModal = createReducer(false, {
  [modalActions.isOpenModal]: () => true,
  [modalActions.isCloseModal]: () => false,
});
export default combineReducers({
  isOpenModalSprint,
  isOpenModalAddPeople,
  isOpenModalProject,
  isOpenModal,
});
