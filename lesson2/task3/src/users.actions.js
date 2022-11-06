export const ADD_USER_STATE = 'ADD/USER';
export const DELETE_USER_STATE = 'DELETE/USER';

export const addUser = ({ id, name }) => {
  return {
    type: ADD_USER_STATE,
    payload: {
      id,
      name,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER_STATE,
    payload: id,
  };
};

export const initialState = {
  usersList: [],
};
