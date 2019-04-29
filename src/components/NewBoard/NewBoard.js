import React from 'react';
import Board from '../Board';
import BoardActions from '../BoardActions';

const NewBoard = ({ id }) => (
  <Board>
    <BoardActions
      boardId={id}
      type='board'
      target='колонку'
      phTarget='колонки'
      InputTag='input'
    />
  </Board>
);

export default NewBoard;
