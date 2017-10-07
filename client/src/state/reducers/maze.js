import set from 'lodash.set';
import { actionTypes } from '../actions/mazeActions';

const initialState = {
  maze: '..XXX\nX.XXX\nX.XXX\nX.XXX\nX...G',
  mazeArray: [],
  solution: null,
  startX: 0,
  startY: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_PROPERTY: {
      let newState = { ...state };
      const { field, value } = payload;
      newState = set(newState, `${field}`, value);
      return {
        ...newState,
      };
    }
    case actionTypes.MAZE_SOLVED:
      return {
        ...state,
        solution: payload.solution,
      };
    case actionTypes.RESET_MAZE_ARRAY:
      return {
        ...state,
        mazeArray: [],
      };
    default:
      return state;
  }
};
