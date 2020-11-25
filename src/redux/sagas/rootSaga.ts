import userLoginSaga from './userLoginSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    userLoginSaga()
  ])
}