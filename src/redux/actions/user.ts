export const LOGIN_USER = 'LOGIN_USER';

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