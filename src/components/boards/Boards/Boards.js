import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { boardsSelector } from '../../../selectors';
import { fetchData, updateCardPosition } from '../../../actions';
import KanbanService from '../../../services/KanbanService';

import { withDragDropContext } from '../../../hoc';
import BoardList from '../BoardList';
import NewBoard from '../NewBoard';

import './Boards.css';

const kanbanService = new KanbanService();
const BoardListWithDragDrop = withDragDropContext(BoardList);

class Boards extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { boards, newBoardId, updateCardPosition } = this.props;
    return (
      <div className='boards'>
        <BoardListWithDragDrop boards={boards} onDragEnd={updateCardPosition} />
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
