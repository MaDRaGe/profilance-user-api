export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export interface IUserLoginAction {
  type: typeof LOGIN_USER,
  payload: IUserLoginInfo
}
export interface IUserLoginInfo {
  username: String;
  password: String;
}
export const loginUser = (userLoginInfo: IUserLoginInfo): IUserLoginAction => {
  return {
    type: LOGIN_USER,
    payload: userLoginInfo
  }
}

export interface IUserLoginSuccessAction {
  type: typeof LOGIN_USER_SUCCESS,
  payload: {
    username: String
  }
}
export const loginUserSuccess = (username: String): IUserLoginSuccessAction => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      username
    }
  }
}

export interface IUserLoginFailAction {
  type: typeof LOGIN_USER_FAIL,
}
export const loginUserFail = (): IUserLoginFailAction => {
  return {
    type: LOGIN_USER_FAIL,
  }
}

export type IUserActionTypes = 
  IUserLoginAction | 
  IUserLoginSuccessAction |
  IUserLoginFailAction;