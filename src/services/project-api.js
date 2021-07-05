import axios from 'axios';
import { BASE_URL } from '../helpers/constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchProjects() {
  const { data } = await axios.get('/projects');
  return data.data.projects;
}

export async function createProject(project) {
  const { data } = await axios.post('/projects', project);
  return data;
}

export async function deleteProject(projectId) {
  const { data } = await axios.delete(`/projects/${projectId}`);
  return data;
}

export async function findProjecrById(projectId) {
  const { data } = await axios.get(`/sprint/${projectId}`);
  return data.data;
}

export async function updateProjectName(projectId, name) {
  const { data } = await axios.patch(`/projects/${projectId}`, name);
  return data;
}

export async function addPeopleToProject(projectId, name) {
  const { data } = await axios.patch(`/projects/${projectId}/invite`, name);
  return data;
}

export async function createSprint(sprint) {
  const { data } = await axios.post('/sprint', sprint);
  return data;
}

export async function deleteSprint(sprintId) {
  const { data } = await axios.delete(`/sprint/${sprintId}`);
  return data;
}

export async function findSprintById(sprintId) {
  const { data } = await axios.get(`/task/${sprintId}`);
  return data;
}

export async function updateSprintName(sprintId, name) {
  const { data } = await axios.patch(`/sprint/${sprintId}`, name);
  return data;
}

export async function createTask(task) {
  const { data } = await axios.post('/task', task);
  return data;
}

export async function deleteTask(taskId) {
  const { data } = await axios.delete(`/task/${taskId}`);
  return data;
}

export async function updateTaskHours(taskId, hours) {
  const { data } = await axios.patch(`/task/${taskId}`, hours);
  return data;
}

export async function searchTaskByName(name) {
  const { data } = await axios.get('/task/search', name);
  return data;
}
