import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const boardId = handleActions(
  {
    [actions.addBoard]: state => state + 1
  },
  1
);

const taskId = handleActions(
  {
    [actions.addTask]: state => state + 1
  },
  1
);

const text = handleActions(
  {
    [actions.updateText]: (state, { payload: text }) => text,
    [actions.addBoard]: () => '',
    [actions.addTask]: () => ''
  },
  ''
);

const boards = handleActions(
  {
    [actions.addBoard]: (state, { payload: board }) => [...state, board]
  },
  []
);

const tasks = handleActions(
  {
    [actions.addTask]: (state, { payload: task }) => [...state, task]
  },
  []
);

export default combineReducers({ text, boards, tasks, boardId, taskId });
