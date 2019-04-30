import React from 'react';
import './Board.css';

const Board = ({ children, boardId }) => {
  return (
    <section className='board'>
      {React.Children.map(children, child =>
        React.cloneElement(child, { boardId })
      )}
    </section>
  );
};

export default Board;
