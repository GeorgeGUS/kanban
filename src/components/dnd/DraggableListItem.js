import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableListItem = ({ className, children, id, index }) => (
  <Draggable draggableId={id} index={index}>
    {({ innerRef, draggableProps, dragHandleProps }) => (
      <li
        className={className}
        ref={innerRef}
        {...draggableProps}
        {...dragHandleProps}
      >
        {children}
      </li>
    )}
  </Draggable>
);

export default DraggableListItem;
