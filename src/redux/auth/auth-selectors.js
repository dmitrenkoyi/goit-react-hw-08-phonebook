const getUsername = (state) => state.auth.user.name;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getRefreshing = (state) => state.auth.isRefreshing;
const getError = (state) => state.auth.error;

const authSelectors = {
  getUsername,
  getIsLoggedIn,
  getRefreshing,
  getError,
};

export default authSelectors;
