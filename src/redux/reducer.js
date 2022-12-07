import { combineReducers } from "redux";

function comments(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.id]) {
        return {
          ...state,
          [action.id]: [action.comment],
        };
      } else {
        return {
          ...state,
          [action.id]: [...state[action.id], [action.comment]],
        };
      }
    case "LOAD_COMMENTS":
      return action.comments;
    default:
      return state;
  }
}
function posts(state = [], action) {
  switch (action.type) {
    case "REMOVE_PICTURE":
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];

    case "ADD_POST":
      return [...state, action.post];

    case "LOAD_POST":
      return action.post;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  comments,
});

export default rootReducer;
