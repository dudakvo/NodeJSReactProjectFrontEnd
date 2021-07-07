const getCurrentPage = state => state.projects.page;

const projectSelectors = {
  getCurrentPage,
};

export default projectSelectors;
export const projectsData = state => state.projects.projects;
export const currentProject = state => state.projects.currentProject;
export const getProject = state => state.projects.project;
