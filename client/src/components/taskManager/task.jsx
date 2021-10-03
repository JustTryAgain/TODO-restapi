import React, {useState} from 'react';
import close from '../../../images/close button.svg';
import cn from 'classnames';

const Task = ({status}) => {
  /*const [status,setStatus] = useState(false);*/
  const classStatus = cn('task', {'complete': status});
  return (
    <div className={classStatus}>
      <span className='txt-wrapper'>
        Coking cookies!
      </span>
      <img src={close} alt="close button"/>
    </div>
  );
};

export default Task;