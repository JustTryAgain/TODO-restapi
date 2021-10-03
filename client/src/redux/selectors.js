import {createSelector} from "reselect";

const state = (state) => state;

export const tasks = createSelector(
  state,
  (state) => state.tasks
);

export const getToken = createSelector(
  state,
  state => state.token
);