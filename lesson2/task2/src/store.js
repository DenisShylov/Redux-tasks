import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

const initState = {
  value: 0,
  history: [],
};

const counterReduser = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
        history: state.history.concat('+1'),
      };
    case DECREMENT:
      return {
        value: state.value - 1,
        history: state.history.concat('-1'),
      };
    case RESET:
      return {
        value: 0,
        history: [],
      };

    default:
      return state;
  }
};

export const store = createStore(counterReduser);
