import * as React from 'react';
import { connect } from 'react-redux';

interface IHomeProps {
  username: String
}
const Home = ({username}: IHomeProps) => {
  const userMsg = username ? `Hello, ${username}` : 'Hello, guest'
  return (
    <div className="header__user-msg">
      { userMsg }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

export default connect(mapStateToProps)(Home);