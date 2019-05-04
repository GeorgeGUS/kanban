import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

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
    [actions.addBoard]: (state, { payload: { id, title } }) => ({
      ...state,
      byId: {
        ...state.byId,
        [id]: {
          id,
          title,
          cardIds: []
        }
      },
      allIds: [...state.allIds, id]
    }),
    [actions.addCard]: (state, { payload: { id, boardId } }) => ({
      ...state,
      byId: {
        ...state.byId,
        [boardId]: {
          ...state.byId[boardId],
          cardIds: [...state.byId[boardId].cardIds, id]
        }
      }
    })
  },
  {}
);

const cards = handleActions(
  {
    [actions.dataLoaded]: (state, { payload: { cards } }) => cards,
    [actions.addCard]: (state, { payload: card }) => ({
      ...state,
      byId: {
        ...state.byId,
        [card.id]: card
      },
      allIds: [...state.allIds, card.id]
    })
  },
  {}
);

export default combineReducers({ text, boards, cards, newBoardId, newCardId });
