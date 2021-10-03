import React from 'react';
import Logo from "./header/logo";
import './main.scss';
import TaskManager from "./taskManager/taskManager";

const Todo = () => {
  return (
    <div className='todo'>
      <Logo/>
      <TaskManager/>
    </div>
  );
};

export default Todo;