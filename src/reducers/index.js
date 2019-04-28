import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const boardId = handleActions(
  {
    [actions.addBoard]: state => state + 1
  },
  1
);

const cardId = handleActions(
  {
    [actions.addCard]: state => state + 1
  },
  1
);

const text = handleActions(
  {
    [actions.updateText]: (state, { payload: text }) => text,
    [actions.addBoard]: () => '',
    [actions.addCard]: () => ''
  },
  ''
);

const boards = handleActions(
  {
    [actions.addBoard]: (state, { payload: board }) => [...state, board]
  },
  []
);

const cards = handleActions(
  {
    [actions.addCard]: (state, { payload: card }) => [...state, card]
  },
  []
);

export default combineReducers({ text, boards, cards, boardId, cardId });
