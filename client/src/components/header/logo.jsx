import React from 'react';
import todoSvg from '../../../images/todo vector.svg';
import './logo.scss';

const Logo = () => {
  return (
    <header>
      <div className='container'>
        TODO LIST
        <img src={todoSvg} alt="todo-icon" className='logo-icon'/>
      </div>
    </header>
  );
};

export default Logo;