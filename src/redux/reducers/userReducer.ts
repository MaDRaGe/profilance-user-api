import { IUserActionTypes, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/user';

interface IUserReducerInitialState {
  username: String;
  isLoginSuccess: Boolean | null;
}
const initialState: IUserReducerInitialState = {
  username: '',
  isLoginSuccess: null
}

const userReducer = (state: IUserReducerInitialState = initialState, action: IUserActionTypes) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoginSuccess: true,
        username: action.payload.username,
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoginSuccess: false
      }
    default: 
      return state;
  }
}

export default userReducer;