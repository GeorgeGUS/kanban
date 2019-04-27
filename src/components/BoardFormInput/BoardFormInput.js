import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText } from '../../actions';

import './BoardFormInput.css';

class BoardFormInput extends Component {
  updateText = (value, boardId) => {
    const { updateText } = this.props;
    updateText({ id: boardId, value: value.trimLeft() });
  };

  render() {
    const { inBoard, boardId, text } = this.props;
    const placeholder = `Введите название ${inBoard ? 'карточки' : 'колонки'}`;
    const InputTag = inBoard ? 'textarea' : 'input';
    const value = boardId === text.id ? text.value : '';
    return (
      <div className='form__row'>
        <InputTag
          type='text'
          className={`form__input`}
          value={value}
          placeholder={placeholder}
          onChange={({ target: { value } }) => this.updateText(value, boardId)}
          required
        />
      </div>
    );
  }
}

const mapStateToProps = ({ text, taskId }) => ({
  text,
  taskId
});

const actionCreators = {
  updateText
};

export default connect(
  mapStateToProps,
  actionCreators
)(BoardFormInput);
