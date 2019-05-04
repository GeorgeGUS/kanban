import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';

const Card = ({ boardId, id, text, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <p
          className='card'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {boardId}.{id}. {text}
        </p>
      )}
    </Draggable>
  );
};

export default Card;
