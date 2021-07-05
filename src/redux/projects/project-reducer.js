import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import projectActions from './project-actions';

const projects = createReducer([], {
  [projectActions.fetchProjectsSuccess]: (state, { payload }) => payload,

  [projectActions.createProjectSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [projectActions.deleteProjectSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),

  [projectActions.addPeopleToProjectSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [projectActions.updateProjectNameSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
});
const project = createReducer(null, {
  [projectActions.fetchProjectByIdSuccess]: (state, { payload }) => payload,
});

const sprint = createReducer([], {
 
  [projectActions.createSprintSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [projectActions.deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [projectActions.fetchSprintByIdSuccess]: (state, { payload }) => payload,
  [projectActions.updateSprintNameSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
});

const task = createReducer([], {
  [projectActions.createTaskSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [projectActions.deleteTaskSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [projectActions.updateTaskTimeSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [projectActions.searchTaskByNameSuccess]: (state, { payload }) => payload,
});

const currentProject = createReducer([], {
  [projectActions.setCurrentProject]: (state, { payload }) => payload,
});

const currentSprint = createReducer([], {
  [projectActions.setCurrentSprint]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [projectActions.fetchProjectsRequest]: () => true,
  [projectActions.fetchProjectsSuccess]: () => false,
  [projectActions.fetchProjectsError]: () => false,
  [projectActions.createProjectRequest]: () => true,
  [projectActions.createProjectSuccess]: () => false,
  [projectActions.createProjectError]: () => false,
  [projectActions.deleteProjectRequest]: () => true,
  [projectActions.deleteProjectSuccess]: () => false,
  [projectActions.deleteProjectError]: () => false,
  [projectActions.fetchProjectByIdRequest]: () => true,
  [projectActions.fetchProjectByIdSuccess]: () => false,
  [projectActions.fetchProjectByIdError]: () => false,
  [projectActions.updateProjectNameRequest]: () => true,
  [projectActions.updateProjectNameSuccess]: () => false,
  [projectActions.updateProjectNameError]: () => false,
  [projectActions.addPeopleToProjectRequest]: () => true,
  [projectActions.addPeopleToProjectSuccess]: () => false,
  [projectActions.addPeopleToProjectError]: () => false,
  [projectActions.createSprintRequest]: () => true,
  [projectActions.createSprintSuccess]: () => false,
  [projectActions.createSprintError]: () => false,
  [projectActions.deleteSprintRequest]: () => true,
  [projectActions.deleteSprintSuccess]: () => false,
  [projectActions.deleteSprintError]: () => false,
  [projectActions.fetchSprintByIdRequest]: () => true,
  [projectActions.fetchSprintByIdSuccess]: () => false,
  [projectActions.fetchSprintByIdError]: () => false,
  [projectActions.updateSprintNameRequest]: () => true,
  [projectActions.updateSprintNameSuccess]: () => false,
  [projectActions.updateSprintNameError]: () => false,
  [projectActions.createTaskRequest]: () => true,
  [projectActions.createTaskSuccess]: () => false,
  [projectActions.createTaskError]: () => false,
  [projectActions.deleteTaskRequest]: () => true,
  [projectActions.deleteTaskSuccess]: () => false,
  [projectActions.deleteTaskError]: () => false,
  [projectActions.updateTaskTimeRequest]: () => true,
  [projectActions.updateTaskTimeSuccess]: () => false,
  [projectActions.updateTaskTimeError]: () => false,
  [projectActions.searchTaskByNameRequest]: () => true,
  [projectActions.searchTaskByNameSuccess]: () => false,
  [projectActions.searchTaskByNameError]: () => false,
});

export default combineReducers({
  projects,
  project,
  sprint,
  task,
  isLoading,
  currentProject,
  currentSprint,
});
