import React from 'react';
import Board from '../Board';
import BoardTitle from '../BoardTitle';
import CardList from '../CardList';
import BoardActions from '../BoardActions';

const BoardList = ({ boards }) => {
  return boards.map(({ id, title }) => (
    <Board key={id} boardId={id}>
      <BoardTitle title={title} />
      <CardList />
      <BoardActions
        type='card'
        target='карточку'
        phTarget='карточки'
        InputTag='textarea'
      />
    </Board>
  ));
};

export default BoardList;
