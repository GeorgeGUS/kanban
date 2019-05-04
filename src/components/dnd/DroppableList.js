import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const DroppableList = ({ className, children, id }) => (
  <Droppable droppableId={id}>
    {({ innerRef, droppableProps, placeholder }) => (
      <ul className={className} ref={innerRef} {...droppableProps}>
        {children}
        {placeholder}
      </ul>
    )}
  </Droppable>
);

export default DroppableList;
