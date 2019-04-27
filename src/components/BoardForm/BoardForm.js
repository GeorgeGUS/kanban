import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBoard, addTask } from '../../actions';
import BoardFormInput from '../BoardFormInput';
import './BoardForm.css';

class BoardForm extends Component {
  onUnitAdd = evt => {
    evt.preventDefault();
    const { text, inBoard, boardId, taskId, addBoard, addTask } = this.props;
    if (inBoard) {
      addTask({
        boardId,
        id: taskId,
        text: text.value
      });
    } else {
      addBoard({
        id: boardId,
        title: text.value
      });
    }
  };

  render() {
    const { inBoard, boardId, setEditable } = this.props;
    return (
      <form className='board__form form' onSubmit={this.onUnitAdd}>
        <BoardFormInput inBoard={inBoard} boardId={boardId} />
        <div className='board__actions'>
          <button type='submit' className='btn btn-success'>
            Добавить {inBoard ? 'карточку' : 'колонку'}
          </button>
          <button type='button' className='btn btn-ghost' onClick={setEditable}>
            <span className='icon icon-cross' />
            <span className='visually-hidden'>Отменить</span>
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ text, taskId }) => ({
  text,
  taskId
});

const actionCreators = {
  addBoard,
  addTask
};

export default connect(
  mapStateToProps,
  actionCreators
)(BoardForm);
