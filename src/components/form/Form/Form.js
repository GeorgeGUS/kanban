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
    const { text, type, boardId, newCardId, addBoard, addCard } = this.props;
    const value = text[boardId];
    switch (type) {
      case 'board':
        addBoard({ id: boardId, title: value });
        break;
      case 'card':
        addCard({ id: newCardId, boardId, text: value });
        break;
      default:
        console.error('Unknown action type:', type);
    }
  };

  componentWillMount() {
    const { boardId, updateText } = this.props;
    updateText({ id: boardId, value: '' });
  }

  render() {
    const { target, text, boardId, setEditable, ...inputProps } = this.props;
    return (
      <form id={boardId} className='form' onSubmit={this.onUnitAdd}>
        <div className='form__row'>
          <FormInput
            {...inputProps}
            value={text[boardId] || ''}
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

const mapStateToProps = ({ text, newCardId }) => ({
  text,
  newCardId
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
