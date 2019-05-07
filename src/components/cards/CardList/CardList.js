import React from 'react';
import { connect } from 'react-redux';
import { DroppableList, DraggableListItem } from '../../dnd';
import Card from '../Card';

import './CardList.css';

const CardList = ({ boardId, cards, cardIds }) => {
  return (
    <DroppableList className='card-list' id={boardId}>
      {cardIds.map((cardId, index) => {
        const { id, text } = cards[cardId];
        return (
          <DraggableListItem
            className='card-list__item'
            index={index}
            key={id}
            id={id}
          >
            <Card text={text} />
          </DraggableListItem>
        );
      })}
    </DroppableList>
  );
};

const mapStateToProps = ({ cards }) => ({
  cards: cards.byId
});

export default connect(mapStateToProps)(CardList);
