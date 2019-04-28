import React from 'react';
import './Task.css';

const Task = ({ id, text }) => {
  return (
    <p className='task'>
      {id} - {text}
    </p>
  );
};

export default Task;
