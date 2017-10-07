import axios from 'axios';
import { ROUTES } from '../constants/api';

export default {
  solveMaze: (mazeArray, startX, startY) =>
    axios({
      method: 'post',
      url: `${ROUTES.BaseURL}/solve-maze`,
      data: {
        mazeArray,
        startX,
        startY,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }),
};
