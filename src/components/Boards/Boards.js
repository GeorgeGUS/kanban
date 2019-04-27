import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../Board';
import BoardTitle from '../BoardTitle';
import BoardActions from '../BoardActions';
import TaskList from '../TaskList';

import './Boards.css';

class Boards extends Component {
  static defaultProps = {
    boards: []
  };

  render() {
    const { boards, boardId } = this.props;
    return (
      <div className='boards'>
        {boards.map(({ id, title }) => {
          return (
            <Board key={id}>
              <BoardTitle title={title} id={id} />
              <TaskList boardId={id} />
              <BoardActions inBoard boardId={id} />
            </Board>
          );
        })}
        <Board>
          <BoardActions boardId={boardId} />
        </Board>
      </div>
    );
  }
}

const mapStateToProps = ({ boards, boardId }) => ({ boards, boardId });

export default connect(mapStateToProps)(Boards);
