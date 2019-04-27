import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const boardId = handleActions(
  {
    [actions.addBoard](state) {
      return state + 1;
    }
  },
  1
);

const taskId = handleActions(
  {
    [actions.addTask](state) {
      return state + 1;
    }
  },
  1
);

const text = handleActions(
  {
    [actions.updateText](state, { payload: text }) {
      return text;
    },
    [actions.addBoard]() {
      return '';
    },
    [actions.addTask]() {
      return '';
    }
  },
  ''
);

const boards = handleActions(
  {
    [actions.addBoard](state, { payload: board }) {
      return [...state, board];
    }
  },
  []
);

const tasks = handleActions(
  {
    [actions.addTask](state, { payload: task }) {
      return [...state, task];
    }
  },
  []
);

export default combineReducers({ text, boards, tasks, boardId, taskId });
