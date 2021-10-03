import {applyMiddleware, createStore} from "redux";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import todo from "./todo/reducer";

const client = axios.create({
  responseType: 'json'
});

const store = createStore(
  todo,
  applyMiddleware(
    axiosMiddleware(client)
  )
);

export default store;