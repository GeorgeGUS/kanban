import React from 'react';
import { connect } from 'react-redux';
import { DroppableList, DraggableListItem } from '../../dnd';
import Card from '../Card';

import './CardList.css';

const CardList = ({ boardId, cards, cardIds }) => {
  const boardCards = cardIds.map(id => cards[id]);
  return (
    <DroppableList className='card-list' id={boardId}>
      {boardCards.map(({ id, text }, index) => (
        <DraggableListItem
          className='card-list__item'
          index={index}
          key={id}
          id={id}
        >
          <Card text={text} />
        </DraggableListItem>
      ))}
    </DroppableList>
  );
};

const mapStateToProps = ({ cards }) => ({
  cards: cards.byId
});

export default connect(mapStateToProps)(CardList);
