import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card';

import './CardList.css';

const CardList = ({ boardId, cards }) => {
  const boardCards = cards.filter(card => card.boardId === boardId);
  // if (boardCards.length === 0) {
  //   return null;
  // }
  return (
    <Droppable droppableId={boardId}>
      {provided => (
        <ul
          className='card-list'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {boardCards.map(({ id, text }, index) => (
            <li key={id} className='card-list__item'>
              <Card boardId={boardId} id={id} text={text} index={index} />
            </li>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

const mapStateToProps = ({ cards }) => ({ cards });

export default connect(mapStateToProps)(CardList);
