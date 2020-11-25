import modalReducer from './modalReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer
})

export default rootReducer;