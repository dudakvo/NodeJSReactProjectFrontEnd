import axios from 'axios';
import {
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
} from './project-actions';

axios.defaults.baseURL = 'https://localhost:4000/';

const fetchProjects = () => dispatch => {
  dispatch(fetchProjectsRequest());
  axios
    .get('/')
    .then(({ data }) => dispatch(fetchProjectsSuccess(data)))
    .catch(error => dispatch(fetchProjectsError(error.message)));
};

const createProject = (name, description) => dispatch => {
  const project = {
    name,
    description,
  };
  dispatch(createProjectRequest());
  axios
    .post('/', project)
    .then(({ data }) => dispatch(createProjectSuccess(data)))
    .catch(error => dispatch(createProjectError(error.message)));
};

const deleteProject = projectId => dispatch => {
  dispatch(deleteProjectRequest());
  axios
    .delete(`/${projectId}`)
    .then(() => dispatch(deleteProjectSuccess(projectId)))
    .catch(error => dispatch(deleteProjectError(error.message)));
};

const findProjectById = projectId => dispatch => {
  dispatch(fetchProjectByIdRequest());
  axios
    .get(`/${projectId}`)
    .then(({ data }) => dispatch(fetchProjectByIdSuccess(data)))
    .catch(error => dispatch(fetchProjectByIdError(error.message)));
};

const updateProjectName = (projectId, name) => dispatch => {
  const newName = {
    name,
  };
  dispatch(updateProjectNameRequest());
  axios
    .patch(`/${projectId}`, newName)
    .then(({ data }) => dispatch(updateProjectNameSuccess(data)))
    .catch(error => dispatch(updateProjectNameError(error.message)));
};

const addPeopleToProject = (projectId, email) => dispatch => {
  const collaborator = {
    email,
  };
  dispatch(addPeopleToProjectRequest());
  axios
    .patch(`/${projectId}`, collaborator)
    .then(({ data }) => dispatch(addPeopleToProjectSuccess(data)))
    .catch(error => dispatch(addPeopleToProjectError(error.message)));
};

const createSprint = (sprintName, endDate) => dispatch => {
  const sprint = {
    sprintName,
    endDate,
  };
  dispatch(createSprintRequest());
  axios
    .post('/', sprint)
    .then(({ data }) => dispatch(createSprintSuccess(data)))
    .catch(error => dispatch(createSprintError(error.message)));
};

const deleteSprint = sprintId => dispatch => {
  dispatch(deleteSprintRequest());
  axios
    .delete(`/${sprintId}`)
    .then(() => dispatch(deleteSprintSuccess(sprintId)))
    .catch(error => dispatch(deleteSprintError(error.message)));
};

const findSprintById = sprintId => dispatch => {
  dispatch(fetchSprintByIdRequest());
  axios
    .get(`/${sprintId}`)
    .then(({ data }) => dispatch(fetchSprintByIdSuccess(data)))
    .catch(error => dispatch(fetchSprintByIdError(error.message)));
};

const updateSprintName = (sprintId, name) => dispatch => {
  const newName = {
    name,
  };
  dispatch(updateSprintNameRequest());
  axios
    .patch(`/${sprintId}`, newName)
    .then(({ data }) => dispatch(updateSprintNameSuccess(data)))
    .catch(error => dispatch(updateSprintNameError(error.message)));
};

const createTask = (taskName, hours) => dispatch => {
  const task = {
    taskName,
    hours,
  };
  dispatch(createTaskRequest());
  axios
    .post('/', task)
    .then(({ data }) => dispatch(createTaskSuccess(data)))
    .catch(error => dispatch(createTaskError(error.message)));
};

const deleteTask = taskId => dispatch => {
  dispatch(deleteTaskRequest());
  axios
    .delete(`/${taskId}`)
    .then(() => dispatch(deleteTaskSuccess(taskId)))
    .catch(error => dispatch(deleteTaskError(error.message)));
};

const updateTaskHours = (taskId, hours) => dispatch => {
  const newTime = {
    hours,
  };
  dispatch(updateTaskTimeRequest());
  axios
    .patch(`/${taskId}`, newTime)
    .then(({ data }) => dispatch(updateTaskTimeSuccess(data)))
    .catch(error => dispatch(updateTaskTimeError(error.message)));
};

const searchTaskByName = name => dispatch => {
  dispatch(searchTaskByNameRequest());
  axios
    .get('/search', name)
    .then(({ data }) => dispatch(searchTaskByNameSuccess(data)))
    .catch(error => dispatch(searchTaskByNameError(error.message)));
};

export {
  fetchProjects,
  createProject,
  deleteProject,
  findProjectById,
  updateProjectName,
  addPeopleToProject,
  createSprint,
  deleteSprint,
  findSprintById,
  updateSprintName,
  createTask,
  deleteTask,
  updateTaskHours,
  searchTaskByName,
};
