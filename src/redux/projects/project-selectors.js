const getCurrentPage = state => state.projects.page;
const getTasks = state => state.projects.task;
const getSprintName = state =>
  state.projects.sprints.map(({ sprint_name }) => sprint_name);

const getTotalPages = state => {
  const totalTasks = state.projects.totalTasks;
  const tasksPerPage = 4;
  const pages = Math.ceil(totalTasks / tasksPerPage);
  return pages;
};

const projectSelectors = {
  getCurrentPage,
  getTasks,
  getSprintName,
  getTotalPages,
};

export default projectSelectors;
export const projectsData = state => state.projects.projects;
export const currentProject = state => state.projects.currentProject;
export const getProject = state => state.projects.project;
