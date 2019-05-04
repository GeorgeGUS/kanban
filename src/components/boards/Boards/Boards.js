import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { fetchData } from '../../../actions';
import BoardList from '../BoardList';
import NewBoard from '../NewBoard';
import KanbanService from '../../../services/KanbanService';

import './Boards.css';
import { boardsSelector } from '../../../selectors';

const kanbanService = new KanbanService();

class Boards extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(
      'on drag end:',
      'card',
      draggableId,
      'moved from',
      source,
      'to',
      destination
    );
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
      fetchData: fetchData(kanbanService)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards);
