import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const withDragDropContext = Wrapped => props => {
  const handleDragEnd = result => {
    const { source, destination, draggableId: id } = result;
    if (!destination) {
      return;
    }
    const { index: srcIdx, droppableId: srcId } = source;
    const { index: destIdx, droppableId: destId } = destination;
    if (srcIdx === destIdx && srcId === destId) {
      return;
    }
    const { onDragEnd } = props;
    onDragEnd({ srcIdx, destIdx, srcId, destId, id });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Wrapped {...props} />
    </DragDropContext>
  );
};

export default withDragDropContext;
