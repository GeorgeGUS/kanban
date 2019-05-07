import React from 'react';
import './Card.css';

const Card = ({ text, isDragging }) => {
  return <p className={`card${isDragging ? ' card--dragging' : ''}`}>{text}</p>;
};

export default Card;
