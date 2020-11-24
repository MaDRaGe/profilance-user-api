import * as React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login__form form">
        <div className="input">
          <div className="input__header">
            <div className="input__title">Username</div>
          </div>
          <div className="input__main">
            <input type="text" className="input__field" placeholder="Username..."/>
          </div>
        </div>
        <div className="input">
          <div className="input__header">
            <div className="input__title">Password</div>
          </div>
          <div className="input__main">
            <input type="password" className="input__field" placeholder="Password..."/>
          </div>
        </div>
        <input className="btn" type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login;