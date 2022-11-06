import {
  DELETE_USER_STATE,
  ADD_USER_STATE,
  initialState,
} from './users.actions';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_STATE:
      return {
        ...state,
        usersList: [...state.usersList].concat(action.payload),
      };

    case DELETE_USER_STATE:
      return {
        ...state,
        usersList: [...state.usersList].filter(
          (user) => user.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
