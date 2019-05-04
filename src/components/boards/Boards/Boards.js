import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { fetchData, updateCardPosition } from '../../../actions';
import BoardList from '../BoardList';
import NewBoard from '../NewBoard';
import KanbanService from '../../../services/KanbanService';

import './Boards.css';
import { boardsSelector } from '../../../selectors';

const kanbanService = new KanbanService();

class Boards extends Component {
  onDragEnd = result => {
    const { source, destination, draggableId: id } = result;
    if (!destination) {
      return;
    }
    const { index: srcIdx, droppableId: srcId } = source;
    const { index: destIdx, droppableId: destId } = destination;
    if (srcIdx === destIdx && srcId === destId) {
      return;
    }
    const { updateCardPosition } = this.props;
    updateCardPosition({ srcIdx, destIdx, srcId, destId, id });
  };

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { boards, newBoardId } = this.props;
    return (
      <div className='boards'>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <BoardList boards={boards} />
        </DragDropContext>
        <NewBoard id={newBoardId} />
      </div>
    );
  }
}

const mapStateToProps = ({ boards, newBoardId }) => ({
  boards: boardsSelector(boards),
  newBoardId
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchData: fetchData(kanbanService),
      updateCardPosition
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards);
