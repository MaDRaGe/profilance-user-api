import * as React from 'react';
import { useState } from 'react';
import { loginUser, IUserLoginInfo } from '../../redux/actions/user';
import { connect } from 'react-redux';
import './Login.css';

interface ILoginProps {
  loginUser: Function,
  isLoginSuccess: Boolean
}
const Login = ({loginUser, isLoginSuccess}: ILoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    loginUser({
      username,
      password
    })
  }

  const logUserNotFoundView = isLoginSuccess === false ? 
    <div className="log error">
      User not found, please check username or password
    </div> : <></>;

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login__log">
        {logUserNotFoundView}
      </div>
      <form onSubmit={onSubmit} className="login__form form">
        <div className="input">
          <div className="input__header">
            <div className="input__title">Username</div>
          </div>
          <div className="input__main">
            <input onChange={
              (event) => { setUsername(event.target.value.trim())} } 
              type="text" className="input__field" placeholder="Username..." value={username}/>
          </div>
        </div>
        <div className="input">
          <div className="input__header">
            <div className="input__title">Password</div>
          </div>
          <div className="input__main">
            <input onChange={
              (event) => { setPassword(event.target.value.trim())} } 
              type="password" className="input__field" placeholder="Password..." value={password}/>
          </div>
        </div>
        <input className="btn" type="submit" value="Login"/>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.user.isLoginSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginUserInfo: IUserLoginInfo) => dispatch(loginUser(loginUserInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);