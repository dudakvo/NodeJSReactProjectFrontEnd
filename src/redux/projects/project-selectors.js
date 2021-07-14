const getCurrentPage = state => state.projects.page;
const getTasks = state => state.projects.task;

const getSprintName = state => state.projects.currentSprint.sprint_name;
export const getCurrentSprint = state => state.projects.currentSprint;

const getSprints = state => state.projects.sprints;

const getTotalPages = state => {
  const totalTasks = state.projects.totalTasks;
  const tasksPerPage = 4;
  const pages = Math.ceil(totalTasks / tasksPerPage);
  return pages === 0 ? 1 : pages;
};

const projectSelectors = {
  getCurrentPage,
  getTasks,
  getSprintName,
  getTotalPages,
  getSprints,
};

export default projectSelectors;
export const projectsData = state => state.projects.projects;
export const currentProject = state => state.projects.currentProject;
export const getProject = state => state.projects.project;
