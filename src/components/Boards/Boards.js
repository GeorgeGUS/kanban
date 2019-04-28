import React from 'react';
import { connect } from 'react-redux';
import Board from '../Board';
import BoardTitle from '../BoardTitle';
import BoardActions from '../BoardActions';
import TaskList from '../TaskList';

import './Boards.css';

const Boards = ({ boards, newBoardId }) => {
  return (
    <div className='boards'>
      {boards.map(({ id, title }) => {
        return (
          <Board key={id}>
            <BoardTitle title={title} id={id} />
            <TaskList boardId={id} />
            <BoardActions
              boardId={id}
              type='card'
              target='карточку'
              inputTag='textarea'
              placeholder='карточки'
            />
          </Board>
        );
      })}
      <Board>
        <BoardActions
          boardId={newBoardId}
          type='board'
          target='колонку'
          inputTag='input'
          placeholder='колонки'
        />
      </Board>
    </div>
  );
};

const mapStateToProps = ({ boards, boardId }) => ({
  boards,
  newBoardId: boardId
});

export default connect(mapStateToProps)(Boards);
