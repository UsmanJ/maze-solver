import { combineReducers } from 'redux';
import mazeReducer from './maze';

export default combineReducers({
  maze: mazeReducer,
});
