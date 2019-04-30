import React from 'react';
import './Card.css';

const Card = ({ id, text }) => {
  return (
    <p className='card'>
      {id} - {text}
    </p>
  );
};

export default Card;
