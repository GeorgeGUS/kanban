import React from 'react';
import './BoardTitle.css';

const BoardTitle = ({ boardId, title }) => {
  return (
    <h2 className='board__title'>
      {boardId}. {title}
    </h2>
  );
};

export default BoardTitle;
