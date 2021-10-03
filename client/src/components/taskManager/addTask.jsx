import React, {useCallback, useState} from 'react';
import addButton from '../../../images/add button.svg';

const AddTask = () => {
  const [task, newTask] = useState("");
  const handleTaskChange = event => newTask(event.target.value);
  const handleClick = useCallback(() => {
    console.log('add new task ' + task);
  }, [task]);

  return (
    <div className='add-task'>
      <div className='wrapper-add'>
        <input type="text" name='add-task' value={task} onChange={handleTaskChange}
               placeholder='Add task...'/>
        <img src={addButton} alt="add task button" onClick={handleClick}/>
      </div>
    </div>
  );
};

export default AddTask;