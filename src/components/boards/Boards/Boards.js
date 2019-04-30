import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchData } from '../../../actions';
import BoardList from '../BoardList';
import NewBoard from '../NewBoard';
import KanbanService from '../../../services/KanbanService';

import './Boards.css';

const kanbanService = new KanbanService();

class Boards extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { boards, newBoardId } = this.props;
    return (
      <div className='boards'>
        <BoardList boards={boards} />
        <NewBoard id={newBoardId} />
      </div>
    );
  }
}

const mapStateToProps = ({ boards, boardId }) => ({
  boards,
  newBoardId: boardId
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
