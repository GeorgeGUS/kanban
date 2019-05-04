import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import update from 'immutability-helper';

const newBoardId = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { boards } }) =>
      boards.allIds.length + 1,
    [actions.addBoard]: state => state + 1
  },
  1
);

const newCardId = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { cards } }) =>
      cards.allIds.length + 1,
    [actions.addCard]: state => state + 1
  },
  1
);

const text = handleActions(
  {
    [actions.updateText]: (state, { payload: { id, value } }) => ({
      ...state,
      [id]: value
    }),
    [actions.addBoard]: (state, { payload: { id } }) => ({
      ...state,
      [id]: ''
    }),
    [actions.addCard]: (state, { payload: { boardId } }) => ({
      ...state,
      [boardId]: ''
    })
  },
  {}
);

const boards = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { boards } }) => boards,
    [actions.addBoard]: (state, { payload: { id, title } }) =>
      update(state, {
        byId: { [id]: { $set: { id, title, cardIds: [] } } },
        allIds: { $push: [id] }
      }),
    [actions.addCard]: (state, { payload: { id, boardId } }) =>
      update(state, {
        byId: { [boardId]: { cardIds: { $push: [id] } } }
      })
  },
  {}
);

const cards = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { cards } }) => cards,
    [actions.addCard]: (state, { payload: { id, text } }) =>
      update(state, {
        byId: { [id]: { $set: { id, text } } },
        allIds: { $push: [id] }
      })
  },
  {}
);

export default combineReducers({ text, boards, cards, newBoardId, newCardId });
