import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import * as actions from '../actions';

const boardId = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { boards } }) => boards.length + 1,
    [actions.addBoard]: state => state + 1
  },
  1
);

const cardId = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { cards } }) => cards.length + 1,
    [actions.addCard]: state => state + 1
  },
  1
);

const text = handleActions(
  {
    [actions.updateText]: (state, { payload: text }) => text,
    [combineActions(actions.addBoard, actions.addCard)]: () => ''
  },
  ''
);

const boards = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { boards } }) => boards,
    [actions.addBoard]: (state, { payload: board }) => [...state, board]
  },
  []
);

const cards = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { cards } }) => cards,
    [actions.addCard]: (state, { payload: card }) => [...state, card]
  },
  []
);

export default combineReducers({ text, boards, cards, boardId, cardId });
