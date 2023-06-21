import { INCREMENT, DECREMENT } from "../actions/actions";

export const INITIAL_STATE = {
  count: 10,
};

export const reducers = (state = INITIAL_STATE, action) => {
  console.log("Reducers : ", action);

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// export default {
//   reducers: reducers,
//   defaultState: INITIAL_STATE,
// };
