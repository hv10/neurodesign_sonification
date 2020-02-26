import {combineReducers} from 'redux';
import emitters from './emitters';
import transport from './transport';
export default combineReducers({
  emitters,
  transport,
});
