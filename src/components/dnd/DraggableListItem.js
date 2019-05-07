import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableListItem = ({ className, children, id, index }) => (
  <Draggable draggableId={id} index={index}>
    {({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => (
      <li
        className={className}
        ref={innerRef}
        {...draggableProps}
        {...dragHandleProps}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, { isDragging })
        )}
      </li>
    )}
  </Draggable>
);

export default DraggableListItem;
