import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBoard, addCard } from '../../actions';
import BoardFormInput from '../BoardFormInput';
import './BoardForm.css';

class BoardForm extends Component {
  onUnitAdd = evt => {
    evt.preventDefault();
    const { text, type, boardId, cardId, addBoard, addCard } = this.props;

    switch (type) {
      case 'board':
        addBoard({ id: boardId, title: text.value });
        break;
      case 'card':
        addCard({ id: cardId, boardId, text: text.value });
        break;
      default:
        console.log('Unknown action type:', type);
    }
  };

  render() {
    const { target, setEditable, ...inputProps } = this.props;
    return (
      <form className='board__form form' onSubmit={this.onUnitAdd}>
        <BoardFormInput {...inputProps} />
        <div className='form__actions'>
          <button type='submit' className='btn btn-success'>
            Добавить {target}
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

const mapStateToProps = ({ text, cardId }) => ({
  text,
  cardId
});

const actionCreators = {
  addBoard,
  addCard
};

export default connect(
  mapStateToProps,
  actionCreators
)(BoardForm);
