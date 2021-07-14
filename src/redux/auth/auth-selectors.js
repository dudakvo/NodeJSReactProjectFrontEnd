const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const getIsLoading = state => state.auth.isLoading;

const loginError = state => state.auth.error;

const authSelectors = {
  getIsAuthenticated,
  getUserEmail,
  getIsLoading,
  loginError,
};

export default authSelectors;
