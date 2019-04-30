import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBoard, addCard, updateText } from '../../../actions';
import FormInput from '../FormInput';
import './Form.css';

class Form extends Component {
  onTextUpdate = ({ target: { value } }) => {
    const { updateText, boardId } = this.props;
    updateText({ id: boardId, value: value.trimLeft() });
  };

  onUnitAdd = evt => {
    evt.preventDefault();
    const { text, type, boardId, cardId, addBoard, addCard } = this.props;

    switch (type) {
      case 'board':
        addBoard({ id: boardId, title: text[boardId].value });
        break;
      case 'card':
        addCard({ id: cardId, boardId, text: text[boardId].value });
        break;
      default:
        console.log('Unknown action type:', type);
    }
  };

  render() {
    const { target, text, boardId, setEditable, ...inputProps } = this.props;
    const inputValue = text[boardId] ? text[boardId].value : '';
    return (
      <form className='form' onSubmit={this.onUnitAdd}>
        <div className='form__row'>
          <FormInput
            {...inputProps}
            value={inputValue}
            onTextUpdate={this.onTextUpdate}
          />
        </div>
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

const mapDispatchToProps = {
  addBoard,
  addCard,
  updateText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
