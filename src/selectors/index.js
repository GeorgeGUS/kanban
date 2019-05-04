import { createSelector } from 'reselect';

export const boardsSelector = createSelector(
  boards => boards,
  boards => {
    const { allIds = [], byId } = boards;
    return allIds.map(id => byId[id]);
  }
);
