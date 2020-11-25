import * as React from 'react';
import './Header.css';
import { showModal } from '../../redux/actions/modal';
import { connect } from 'react-redux';

interface IHeaderProps {
  showModal: Function,
  username: String
}
const Header = ({showModal, username}: IHeaderProps) => {
  const userMsg = username ? `Hello, ${username}` : 'Hello, guest'
  return (
    <header className="header">
      <div className="container header__grid">
        <nav className="header__nav">
          <a className="header__link" href="/">Home</a>
          <a className="header__link" href="/news">News</a>
        </nav>
        <div className="header__user-bar">
          <div className="header__user-msg">
            { userMsg }
          </div>
          <button onClick={() => { showModal() }} className="btn header__login">Login</button>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(showModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
