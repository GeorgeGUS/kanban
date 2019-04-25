import React, { Component } from 'react';
import Board from '../Board';
import BoardTitle from '../BoardTitle';
import BoardActions from '../BoardActions';
import TaskList from '../TaskList';

import './Boards.css';

class Boards extends Component {
  static defaultProps = {
    boards: [
      {
        id: 1,
        title: 'План на месяц'
      },
      {
        id: 2,
        title: 'План на день'
      },
      {
        id: 3,
        title: 'Итоги'
      }
    ]
  };

  render() {
    const { boards } = this.props;
    return (
      <div className='boards'>
        {boards.map(({ id, title }) => {
          return (
            <Board key={id}>
              <BoardTitle title={title} />
              <TaskList boardId={id} />
              <BoardActions />
            </Board>
          );
        })}
      </div>
    );
  }
}

export default Boards;
