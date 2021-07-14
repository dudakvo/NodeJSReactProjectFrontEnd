import axios from 'axios';
import { BASE_URL } from '../../helpers/constants';
import projectActions from './project-actions';
import * as projectApi from '../../services/project-api';

axios.defaults.baseURL = BASE_URL;

const fetchProjects = () => async dispatch => {
  dispatch(projectActions.fetchProjectsRequest());
  try {
    const projects = await projectApi.fetchProjects();
    dispatch(projectActions.fetchProjectsSuccess(projects));
  } catch (error) {
    dispatch(projectActions.fetchProjectsError(error.message));
  }
};

const fetchSprints = id => async dispatch => {
  dispatch(projectActions.fetchSprintSByProjectIdRequest());
  try {
    const projects = await projectApi.fetchSprintsByProjectId(id);
    dispatch(projectActions.fetchSprintByProjectIdSuccess(projects));
  } catch (error) {
    dispatch(projectActions.fetchSprintByProjectIdError(error.message));
  }
};

const createProject = (name, description) => async dispatch => {
  const newProject = {
    name,
    description,
  };
  dispatch(projectActions.createProjectRequest());
  try {
    const project = await projectApi.createProject(newProject);
    dispatch(projectActions.createProjectSuccess(project.data.project));
  } catch (error) {
    dispatch(projectActions.createProjectError(error.message));
  }
};

const deleteProject = projectId => async dispatch => {
  dispatch(projectActions.deleteProjectRequest());
  try {
    await projectApi.deleteProject(projectId);
    dispatch(projectActions.deleteProjectSuccess(projectId));
  } catch (error) {
    dispatch(projectActions.deleteProjectError(error.message));
  }
};

const findProjectById = projectId => async dispatch => {
  dispatch(projectActions.fetchProjectByIdRequest());
  try {
    const project = await projectApi.findProjecrById(projectId);
    dispatch(projectActions.fetchProjectByIdSuccess(project));
  } catch (error) {
    dispatch(projectActions.fetchProjectByIdError(error.message));
  }
};

const updateProjectName = (projectId, name) => async dispatch => {
  const newName = {
    name,
  };
  dispatch(projectActions.updateProjectNameRequest());
  try {
    const data = await projectApi.updateProjectName(projectId, newName);

    dispatch(projectActions.updateProjectNameSuccess(data.data.project));
  } catch (error) {
    dispatch(projectActions.updateProjectNameError(error.message));
  }
};

const addPeopleToProject = (projectId, name) => async dispatch => {
  const collaborator = {
    name,
  };
  dispatch(projectActions.addPeopleToProjectRequest());
  try {
    const data = await projectApi.addPeopleToProject(projectId, collaborator);
    console.log(data.data);
    dispatch(projectActions.addPeopleToProjectSuccess(data.data.project));
  } catch (error) {
    dispatch(projectActions.addPeopleToProjectError(error.message));
  }
};

const createSprint = (sprint_name, date_end, project_id) => async dispatch => {
  const sprint = {
    sprint_name,
    date_end,
    project_id,
  };
  dispatch(projectActions.createSprintRequest());
  try {
    const data = await projectApi.createSprint(sprint);
    dispatch(projectActions.createSprintSuccess(data.data));
  } catch (error) {
    dispatch(projectActions.createSprintError(error.message));
  }
};

const deleteSprint = sprintId => async dispatch => {
  dispatch(projectActions.deleteSprintRequest());
  try {
    await projectApi.deleteSprint(sprintId);
    dispatch(projectActions.deleteSprintSuccess(sprintId));
  } catch (error) {
    dispatch(projectActions.deleteSprintError(error.message));
  }
};

const findSprintById = (sprintId, page) => async dispatch => {
  dispatch(projectActions.fetchSprintByIdRequest());
  try {
    const data = await projectApi.findSprintById(sprintId, page);
    // какого хера создаётсья
    dispatch(projectActions.fetchSprintByIdSuccess(data.data.task.task));
    // сохраняем текуший спринт
    dispatch(projectActions.fetchCurrentSprintSuccess(data.data.sprint[0]));
  } catch (error) {
    dispatch(projectActions.fetchSprintByIdError(error.message));
  }
};

const updateSprintName = (sprintId, name) => async dispatch => {
  const newName = {
    sprint_name: name,
  };
  dispatch(projectActions.updateSprintNameRequest());

  try {
    const data = await projectApi.updateSprintName(sprintId, newName);
    dispatch(projectActions.updateSprintNameSuccess(data.data));
    dispatch(projectActions.updateSprintsNameSuccess(data.data));
  } catch (error) {
    dispatch(projectActions.updateSprintNameError(error.message));
  }
};

const createTask = (task_name, scheduled_hours, sprintId) => async dispatch => {
  const newTask = {
    task_name,
    scheduled_hours: Number(scheduled_hours),
    sprint: sprintId,
  };
  dispatch(projectActions.createTaskRequest());
  try {
    const data = await projectApi.createTask(newTask);
    dispatch(projectActions.createTaskSuccess(data.data));
  } catch (error) {
    dispatch(projectActions.createTaskError(error.message));
  }
};

const deleteTask = taskId => async dispatch => {
  dispatch(projectActions.deleteTaskRequest());
  try {
    await projectApi.deleteTask(taskId);
    dispatch(projectActions.deleteTaskSuccess(taskId));
  } catch (error) {
    dispatch(projectActions.deleteTaskError(error.message));
  }
};

const updateTaskHours = (taskId, hours) => async dispatch => {
  const newTime = {
    hours_spent_per_day: hours,
  };
  dispatch(projectActions.updateTaskTimeRequest());
  try {
    const data = await projectApi.updateTaskHours(taskId, newTime);
    dispatch(projectActions.updateTaskTimeSuccess(data));
  } catch (error) {
    dispatch(projectActions.updateTaskTimeError(error.message));
  }
};

const searchTaskByName = name => async dispatch => {
  dispatch(projectActions.searchTaskByNameRequest());
  try {
    const data = await projectApi.searchTaskByName(name);
    dispatch(projectActions.searchTaskByNameSuccess(data.data));
  } catch (error) {
    dispatch(projectActions.searchTaskByNameError(error.message));
  }
};

const getNextTaskPage = (sprintId, page) => async dispatch => {
  dispatch(projectActions.fetchNextPageRequest());
  try {
    const data = await projectApi.getNextTaskPage(sprintId, page);
    dispatch(projectActions.fetchNextPageSuccess(data.data.task.task));
  } catch (error) {
    dispatch(projectActions.searchTaskByNameError(error.message));
  }
};

const getPrevTaskPage = (sprintId, page) => async dispatch => {
  dispatch(projectActions.fetchPrevPageRequest());
  try {
    const data = await projectApi.getPrevTaskPage(sprintId, page);
    dispatch(projectActions.fetchPrevPageSuccess(data.data.task.task));
  } catch (error) {
    dispatch(projectActions.fetchPrevPageError(error.message));
  }
};

const fetchSprint = sprintId => async dispatch => {
  dispatch(projectActions.fetchSprintRequest());
  try {
    const data = await projectApi.fetchSprint(sprintId);
    // происходит замена масива спринтов на на объект одного спринта и в этом причина флеша !!!!!
    dispatch(projectActions.fetchSprintSuccess(data.data.sprint));
  } catch (error) {
    dispatch(projectActions.fetchSprintError(error.message));
  }
};

const fetchTotalTasks = sprintId => async dispatch => {
  dispatch(projectActions.fetchTotalTasksRequest());
  try {
    const data = await projectApi.fetchTotalTasks(sprintId);
    dispatch(projectActions.fetchTotalTasksSuccess(data.data.task.total));
  } catch (error) {
    dispatch(projectActions.fetchTotalTasksError(error.message));
  }
};

const projectOperations = {
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
  getNextTaskPage,
  getPrevTaskPage,
  fetchSprint,
  fetchTotalTasks,
  fetchSprints,
};

export default projectOperations;
