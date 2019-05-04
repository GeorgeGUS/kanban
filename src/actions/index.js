import { createAction } from 'redux-actions';

export const dataLoaded = createAction('FETCH_DATA_SUCCESS');
export const updateText = createAction('TEXT_UPDATE');
export const addBoard = createAction('BOARD_ADD');
export const addCard = createAction('CARD_ADD');
export const updateCardPosition = createAction('CARD_POSITION_UPDATE');

export const fetchData = service => () => dispatch => {
  service.getData().then(data => dispatch(dataLoaded(data)));
};
