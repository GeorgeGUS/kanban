import React from 'react';

import './FormInput.css';

const FormInput = ({ InputTag, phTarget, value, onTextUpdate }) => {
  return (
    <InputTag
      type='text'
      className={`form__${InputTag}`}
      value={value}
      placeholder={`Введите название ${phTarget}`}
      onChange={onTextUpdate}
      required
      autoFocus
    />
  );
};

export default FormInput;
