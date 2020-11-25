import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_USER, loginUserSuccess, IUserLoginAction, loginUserFail } from '../actions/user';
import { loginUser } from '../../api/userDatabase';

function* userLoginAsync(action: IUserLoginAction) {
  try {
    const response = yield call(loginUser, { 
      username: action.payload.username, 
      password: action.payload.password });
    yield put(loginUserSuccess(response.username))
  } catch (e) {
    yield put(loginUserFail())
  }
}

export default function* userLoginSaga() {
  yield takeLatest(LOGIN_USER, userLoginAsync)
}