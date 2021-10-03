import React, {useState} from 'react';
import './managerStyles.scss';
import Task from "./task";
import AddTask from "./addTask";

const TaskManager = () => {
  const [tasks, setTask] = useState([]);
  return (
    <main className='tasks-manager'>
      {tasks.length === 0 ?
        <>
          <div className='no-tasks'>No tasks...</div>
          <AddTask/> </> :
        <>
          <div className='tasks-counter'>
            <span className='tasks-active'>Active tasks: 8</span>
            <span className='tasks-all'>All tasks: 12</span>
          </div>
          <div className='tasks-tracker'>
            <Task status={true} key={0}/>
            <Task status={false} key={1}/>
          </div>
          <AddTask/>
        </>
      }
    </main>
  );
};

export default TaskManager;