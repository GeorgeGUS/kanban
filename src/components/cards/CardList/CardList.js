import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import './CardList.css';

const CardList = ({ boardId, cards }) => {
  const boardCards = cards.filter(card => card.boardId === boardId);
  if (boardCards.length === 0) {
    return null;
  }
  return (
    <ul className='card-list'>
      {boardCards.map(({ id, text }) => (
        <li key={id} className='card-list__item'>
          <Card id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ cards }) => ({ cards });

export default connect(mapStateToProps)(CardList);
