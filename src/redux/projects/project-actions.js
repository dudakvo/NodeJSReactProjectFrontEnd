import { createAction } from '@reduxjs/toolkit';

// Projects

const fetchProjectsRequest = createAction('projects/fetchProjectsRequest');
const fetchProjectsSuccess = createAction('projects/fetchProjectsSuccess');
const fetchProjectsError = createAction('projects/fetchProjectsError');

const createProjectRequest = createAction('projects/createProjectRequest');
const createProjectSuccess = createAction('projects/createProjectSuccess');
const createProjectError = createAction('projects/createProjectError');

const deleteProjectRequest = createAction('projects/deleteProjectRequest');
const deleteProjectSuccess = createAction('projects/deleteProjectSuccess');
const deleteProjectError = createAction('projects/deleteProjectError');

const fetchProjectByIdRequest = createAction('project/fetchProjectByIdRequest');
const fetchProjectByIdSuccess = createAction(
  'projects/fetchProjectByIdSuccess',
);
const fetchProjectByIdError = createAction('projects/fetchProjectByIdError');

const updateProjectNameRequest = createAction(
  'projects/updateProjectNameRequest',
);
const updateProjectNameSuccess = createAction(
  'projects/updateProjectNameSuccess',
);
const updateProjectNameError = createAction('projects/updateProjectNameError');

const addPeopleToProjectRequest = createAction(
  'projects/addPeopleToProjectRequest',
);

const addPeopleToProjectSuccess = createAction(
  'projects/addPeopleToProjectSuccess',
);

const addPeopleToProjectError = createAction(
  'projects/addPeopleToProjectError',
);

// Sprints

const createSprintRequest = createAction('projects/createSprintRequest');
const createSprintSuccess = createAction('projects/createSprintSuccess');
const createSprintError = createAction('projects/createSprintError');

const deleteSprintRequest = createAction('projects/deleteSprintRequest');
const deleteSprintSuccess = createAction('projects/deleteSprintSuccess');
const deleteSprintError = createAction('projects/deleteSprintError');

const fetchSprintByIdRequest = createAction('projects/fetchSprintByIdRequest');
const fetchSprintByIdSuccess = createAction('projects/fetchSprintByIdSuccess');
const fetchSprintByIdError = createAction('projects/fetchSprintByIdError');

const updateSprintNameRequest = createAction(
  'projects/updateSprintNameRequest',
);
const updateSprintNameSuccess = createAction(
  'projects/updateSprintNameSuccess',
);
const updateSprintNameError = createAction('projects/updateSprintNameError');

// Tasks

const createTaskRequest = createAction('projects/createTaskRequest');
const createTaskSuccess = createAction('projects/createTaskSuccess');
const createTaskError = createAction('projects/createTaskError');

const deleteTaskRequest = createAction('projects/deleteTaskRequest');
const deleteTaskSuccess = createAction('projects/deleteTaskSuccess');
const deleteTaskError = createAction('projects/deleteTaskError');

const updateTaskTimeRequest = createAction('projects/updateTaskTimeRequest');
const updateTaskTimeSuccess = createAction('projects/updateTaskTimeSuccess');
const updateTaskTimeError = createAction('projects/updateTaskTimeError');

const searchTaskByNameRequest = createAction(
  'projects/searchTaskByNameRequest',
);
const searchTaskByNameSuccess = createAction(
  'projects/searchTaskByNameSuccess',
);
const searchTaskByNameError = createAction('projects/searchTaskByNameError');

//current ID

const setCurrentProject = createAction('project/SetCurrentProject');
const setCurrentSprint = createAction('project/SetCurrentSprint');

const projectActions = {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  createProjectRequest,
  createProjectSuccess,
  createProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  fetchProjectByIdRequest,
  fetchProjectByIdSuccess,
  fetchProjectByIdError,
  updateProjectNameRequest,
  updateProjectNameSuccess,
  updateProjectNameError,
  addPeopleToProjectRequest,
  addPeopleToProjectSuccess,
  addPeopleToProjectError,
  createSprintRequest,
  createSprintSuccess,
  createSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  fetchSprintByIdRequest,
  fetchSprintByIdSuccess,
  fetchSprintByIdError,
  updateSprintNameRequest,
  updateSprintNameSuccess,
  updateSprintNameError,
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  updateTaskTimeRequest,
  updateTaskTimeSuccess,
  updateTaskTimeError,
  searchTaskByNameRequest,
  searchTaskByNameSuccess,
  searchTaskByNameError,
  setCurrentProject,
  setCurrentSprint,
};

export default projectActions;
