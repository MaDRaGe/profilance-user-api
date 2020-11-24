import modalReducer from './modalReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  modal: modalReducer
})

export default rootReducer;