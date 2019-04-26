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
      }
    ],
    tasks: [
      {
        boardId: 1,
        id: 6,
        text: 'Написать первую статью в блог'
      },
      {
        boardId: 1,
        id: 7,
        text:
          'Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, хотя бы подумать над этим.'
      },
      {
        boardId: 1,
        id: 8,
        text: 'Нет, я серьезный человек, иду в мотошколу. Записываюсь!'
      },
      {
        boardId: 2,
        id: 9,
        text: 'Записаться на курс по React'
      }
    ]
  };

  render() {
    const { boards, tasks } = this.props;
    return (
      <div className='boards'>
        {boards.map(({ id, title }) => {
          return (
            <Board key={id}>
              <BoardTitle title={title} />
              <TaskList boardId={id} tasks={tasks} />
              <BoardActions inBoard />
            </Board>
          );
        })}
        <Board>
          <BoardActions />
        </Board>
      </div>
    );
  }
}

export default Boards;
