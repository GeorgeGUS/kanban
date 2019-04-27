import React from 'react';
import './BoardTitle.css';

const BoardTitle = ({ id, title }) => {
  return (
    <h2 className='board__title'>
      {id}. {title}
    </h2>
  );
};

export default BoardTitle;
