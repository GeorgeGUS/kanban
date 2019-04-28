import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText } from '../../actions';

import './BoardFormInput.css';

class BoardFormInput extends Component {
  onTextUpdate = ({ target: { value } }) => {
    const { updateText, boardId } = this.props;
    updateText({ id: boardId, value: value.trimLeft() });
  };

  render() {
    const { InputTag, phTarget, boardId, text } = this.props;
    const value = boardId === text.id ? text.value : '';
    return (
      <div className='form__row'>
        <InputTag
          type='text'
          className={`form__${InputTag}`}
          value={value}
          placeholder={`Введите название ${phTarget}`}
          onChange={this.onTextUpdate}
          required
        />
      </div>
    );
  }
}

const mapStateToProps = ({ text }) => ({ text });

const actionCreators = {
  updateText
};

export default connect(
  mapStateToProps,
  actionCreators
)(BoardFormInput);
