import api from '../../api/mazeApi';
import keyMirror from '../../util/keyMirror';

export const actionTypes = keyMirror(
  {
    MAZE_SOLVED: null,
    RESET_MAZE_ARRAY: null,
    UPDATE_PROPERTY: null,
  },
  'MAZE',
);

export const updateProperty = (field, value) => ({
  type: actionTypes.UPDATE_PROPERTY,
  payload: {
    field,
    value,
  },
});

export const solveMaze = (mazeArray, startX, startY) => (dispatch) => {
  api.solveMaze(mazeArray, startX, startY).then((response) => {
    dispatch({
      type: actionTypes.MAZE_SOLVED,
      payload: response.data,
    });
  });
};

export const resetMazeArray = () => (dispatch) => {
  dispatch({
    type: actionTypes.RESET_MAZE_ARRAY,
  });
};
