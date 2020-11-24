import * as React from 'react';
import './Header.css';
import { showModal } from '../../redux/actions/modal';
import { connect } from 'react-redux';

interface IHeaderProps {
  showModal: Function
}
const Header = ({showModal}: IHeaderProps) => {
  return (
    <header className="header">
      <div className="container header__grid">
        <nav className="header__nav">
          <a className="header__link" href="/">Home</a>
          <a className="header__link" href="/news">News</a>
        </nav>
        <div className="header__user-bar">
          <div className="header__user-msg">
            user msg
          </div>
          <button onClick={() => { showModal() }} className="btn header__login">Login</button>
        </div>
      </div>
    </header>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(showModal())
  }
}

export default connect(null, mapDispatchToProps)(Header);
