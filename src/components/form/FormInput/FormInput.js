import React from 'react';
import { autoresize } from '../../../utils';

import './FormInput.css';

const FormInput = ({ InputTag, phTarget, value, onTextUpdate, onSubmit }) => {
  const handleTextChange = e => {
    onTextUpdate(e);
    autoresize(e);
  };
  const handleEnterDown = e => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  };
  return (
    <InputTag
      type='text'
      className={`form__${InputTag}`}
      value={value}
      placeholder={`Введите название ${phTarget}`}
      onChange={handleTextChange}
      onKeyDown={handleEnterDown}
      required
      autoFocus
    />
  );
};

export default FormInput;
