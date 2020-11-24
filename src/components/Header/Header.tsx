import * as React from 'react';
import './Header.css';

const Header = () => {
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
          <button className="btn header__login">Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
