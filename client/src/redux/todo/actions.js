import createRequestAction from "./createRequestAction";

export const addTask = createRequestAction('ADD_TASK',
  (taskStr, token) => {
    return {
      request: {
        method: 'post',
        url: '/addTask',
        data: {
          taskStr: taskStr,
          token: token,
        }
      }
    }
  });

export const removeTask = createRequestAction('REMOVE_TASK',
  (taskID, token) => {
    return {
      request: {
        method: 'del',
        url: '/removeTask',
        data: {
          taskID: taskID,
          token: token,
        }
      }
    }
  });

export const getTasks = createRequestAction('GET_TASKS',
  (token) => {
    return {
      request: {
        method: 'get',
        url: '/getTasks',
        headers: {
          token: token
        }
      }
    }
  });