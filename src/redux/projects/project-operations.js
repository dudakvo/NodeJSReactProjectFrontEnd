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

const createProject = (name, description) => async dispatch => {
  console.log(name, description);
  const newProject = {
    name,
    description,
  };
  dispatch(projectActions.createProjectRequest());
  try {
    const project = await projectApi.createProject(newProject);
    dispatch(projectActions.createProjectSuccess(project));
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
    const data = await projectApi.findProjecrById(projectId);
    console.log(data);
    dispatch(projectActions.fetchProjectByIdSuccess(data));
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
    dispatch(projectActions.updateProjectNameSuccess(data));
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
    dispatch(projectActions.addPeopleToProjectSuccess(data));
  } catch (error) {
    dispatch(projectActions.addPeopleToProjectError(error.message));
  }
};

const createSprint = (sprint_name, date_end, project_id) => async dispatch => {
  console.log(sprint_name, date_end, project_id);
  const sprint = {
    sprint_name,
    date_end,
    project_id,
  };
  dispatch(projectActions.createSprintRequest());
  try {
    const data = await projectApi.createSprint(sprint);
    dispatch(projectActions.createSprintSuccess(data));
  } catch (error) {
    dispatch(projectActions.createSprintError(error.message));
  }
};

const deleteSprint = sprintId => async dispatch => {
  dispatch(projectActions.deleteSprintRequest());
  try {
    const data = await projectApi.deleteSprint(sprintId);
    dispatch(projectActions.deleteSprintSuccess(data));
  } catch (error) {
    dispatch(projectActions.deleteSprintError(error.message));
  }
};

const findSprintById = sprintId => async dispatch => {
  dispatch(projectActions.fetchSprintByIdRequest());
  try {
    const data = await projectApi.findProjecrById(sprintId);
    dispatch(projectActions.fetchSprintByIdSuccess(data));
  } catch (error) {
    dispatch(projectActions.fetchSprintByIdError(error.message));
  }
};

const updateSprintName = (sprintId, name) => async dispatch => {
  const newName = {
    name,
  };
  dispatch(projectActions.updateSprintNameRequest());

  try {
    const data = await projectApi.updateSprintName(sprintId, newName);
    dispatch(projectActions.updateSprintNameSuccess(data));
  } catch (error) {
    dispatch(projectActions.updateSprintNameError(error.message));
  }
};

const createTask =
  (task_name, scheduled_hours, sprintId, hours_spent, hours_spent_per_day) =>
  async dispatch => {
    const newTask = {
      task_name,
      scheduled_hours,
      sprint: sprintId,
      hours_spent,
      hours_spent_per_day,
    };
    dispatch(projectActions.createTaskRequest());
    try {
      const data = await projectApi.createTask(newTask);
      dispatch(projectActions.createTaskSuccess(data));
    } catch (error) {
      dispatch(projectActions.createTaskError(error.message));
    }
  };

const deleteTask = taskId => async dispatch => {
  dispatch(projectActions.deleteTaskRequest());
  try {
    const data = await projectApi.deleteTask(taskId);
    dispatch(projectActions.deleteTaskSuccess(data));
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
  const query = {
    task_name: name,
  };
  dispatch(projectActions.searchTaskByNameRequest());
  try {
    const data = await projectApi.searchTaskByName(query);
    dispatch(projectActions.searchTaskByNameSuccess(data));
  } catch (error) {
    dispatch(projectActions.searchTaskByNameError(error.message));
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
};

export default projectOperations;
