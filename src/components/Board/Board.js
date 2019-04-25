import React from 'react';
import './Board.css';

const Board = ({ children }) => {
  return <section className='board'>{children}</section>;
};

export default Board;
