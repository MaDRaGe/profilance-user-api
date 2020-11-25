import modalReducer from './modalReducer';
import userReducer from './userReducer';
import newsReducer from './newsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  news: newsReducer
})

export default rootReducer;