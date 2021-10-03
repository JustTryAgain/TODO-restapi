import {handleActions} from "redux-actions";
import {addTask, getTasks, removeTask} from "./actions";

const initialState = {
  tasks: [],
  token: localStorage.getItem('token') || null
};

const errorHandler = (state, {error: {response: {data, status}}}) => {
  console.log('error: ' + data + ' status code: ' + status + '!');
  return {
    ...state
  }
};
const actionStartHandler = (state, action) => {
  console.log('start action: ' + action.type);
  return {
    ...state
  }
};
const actionComplete = (state, {payload: {data}}) => {
  return {
    ...state,
    ...data
  }
};

const todo = handleActions({
    [addTask]: actionStartHandler,
    [addTask.success]: (state, {payload: {data}}) => {
      if (!state.token) localStorage.setItem("token", data.token);
      return {
        ...state,
        ...data
      }
    },
    [addTask.fail]: errorHandler,
    [removeTask]: actionStartHandler,
    [removeTask.fail]: errorHandler,
    [removeTask.success]: actionComplete,
    [getTasks]: actionStartHandler,
    [getTasks.fail]: errorHandler,
    [getTasks.success]: actionComplete,
  },
  initialState);

export default todo;