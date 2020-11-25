import * as React from 'react';
import './Header.css';
import { showModal } from '../../redux/actions/modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  showModal: Function,
}
const Header = ({showModal}: IHeaderProps) => {
  return (
    <header className="header">
      <div className="container header__grid">
        <nav className="header__nav">
          <Link className="header__link" to="/">Home</Link>
          <Link className="header__link" to="/news">News</Link>
        </nav>
        <div className="header__user-bar">
          
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
