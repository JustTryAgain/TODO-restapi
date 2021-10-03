import {Provider} from "react-redux";
import React from "react";
import ReactDOM from 'react-dom';
import Todo from "./components/todo";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Todo/>
  </Provider>,
  document.getElementById('root')
);