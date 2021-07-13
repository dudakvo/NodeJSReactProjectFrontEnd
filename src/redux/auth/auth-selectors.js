const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getIsLoading = state => state.auth.isLoading;

const authSelectors = {
  getIsAuthenticated,
  getUserEmail,
  getIsLoading,
};

export default authSelectors;
