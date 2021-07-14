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

const fetchSprintRequest = createAction('projects/fetchSprintRequest');
const fetchSprintSuccess = createAction('projects/fetchSprintSuccess');
const fetchSprintError = createAction('projects/fetchSprintError');
const fetchSprintSByProjectIdRequest = createAction(
  'projects/fetchSprintByProjectIdRequest',
);
const fetchSprintByProjectIdSuccess = createAction(
  'projects/fetchSprintByProjectIdSuccess',
);
const fetchSprintByProjectIdError = createAction(
  'projects/fetchSprintByProjectIdError',
);
// вношу изменения, переношу в Current sprint
const updateSprintsNameRequest = createAction(
  'projects/updateSprintNameRequest',
);
const updateSprintsNameSuccess = createAction(
  'projects/updateSprintNameSuccess',
);
const updateSprintsNameError = createAction('projects/updateSprintNameError');

// Tasks

// const fetchSprintByIdRequest = createAction('projects/fetchSprintByIdRequest');
// const fetchSprintByIdSuccess = createAction('projects/fetchSprintByIdSuccess');
// const fetchSprintByIdError = createAction('projects/fetchSprintByIdError');

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

// Page

const fetchNextPageRequest = createAction('projects/fetchNextPageRequest');
const fetchNextPageSuccess = createAction('projects/fetchNextPageSuccess');
const fetchNextPageError = createAction('projects/fetchNextPageError');

const fetchPrevPageRequest = createAction('projects/fetchPrevPageRequest');
const fetchPrevPageSuccess = createAction('projects/fetchPrevPageSuccess');
const fetchPrevPageError = createAction('projects/fetchPrevPageError');

// Total pages

const fetchTotalTasksRequest = createAction('projects/fetchTotalTasksRequest');
const fetchTotalTasksSuccess = createAction('projects/fetchTotalTasksSuccess');
const fetchTotalTasksError = createAction('projects/fetchTotalTasksError');

// sprit
const fetchSprintByIdRequest = createAction('projects/fetchSprintByIdRequest');
const fetchSprintByIdSuccess = createAction('projects/fetchSprintByIdSuccess');
const fetchSprintByIdError = createAction('projects/fetchSprintByIdError');

//current sprint
const fetchCurrentSprintRequest = createAction(
  'project/fetchCurrentSprintRequest',
);
const fetchCurrentSprintSuccess = createAction(
  'project/fetchCurrentSprintSuccess',
);
const fetchCurrentSprintError = createAction('project/fetchCurrentSprintError');

const updateSprintNameRequest = createAction(
  'projects/updateSprintNameRequest',
);
const updateSprintNameSuccess = createAction(
  'projects/updateSprintNameSuccess',
);
const updateSprintNameError = createAction('projects/updateSprintNameError');

const projectActions = {
  fetchSprintByProjectIdSuccess,
  fetchSprintByProjectIdError,
  fetchSprintSByProjectIdRequest,
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
  fetchNextPageRequest,
  fetchNextPageSuccess,
  fetchNextPageError,
  fetchPrevPageRequest,
  fetchPrevPageSuccess,
  fetchPrevPageError,
  fetchSprintRequest,
  fetchSprintSuccess,
  fetchSprintError,
  fetchTotalTasksRequest,
  fetchTotalTasksSuccess,
  fetchTotalTasksError,
  fetchCurrentSprintRequest,
  fetchCurrentSprintSuccess,
  fetchCurrentSprintError,
  updateSprintsNameRequest,
  updateSprintsNameSuccess,
  updateSprintsNameError,
};

export default projectActions;
