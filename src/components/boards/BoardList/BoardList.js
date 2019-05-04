import React from 'react';
import Board from '../Board';
import BoardTitle from '../BoardTitle';
import CardList from '../../cards/CardList';
import BoardActions from '../BoardActions';

const BoardList = ({ boards }) => {
  return boards.map(({ id, title, cardIds }) => (
    <Board key={id} boardId={id}>
      <BoardTitle title={title} />
      <CardList cardIds={cardIds} />
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
