export const userDataSelector = (state) => {
  return state.users.userData;
};

export const isFetchingSelector = (state) => {
  return state.users.isFetching;
};
