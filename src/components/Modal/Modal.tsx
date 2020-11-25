import * as React from 'react';
import './Modal.css';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/modal';

interface IModalProps {
  isModalShown: boolean,
  hideModal: Function,
  isLoginSuccess: Boolean
}
const Modal = ({isModalShown, hideModal, isLoginSuccess}: IModalProps) => {
  if (isModalShown && !isLoginSuccess) {
    return (
      <div className="modal">
        <div className="container">
          <div className="modal__content">
            <div className="modal__header">
              <button onClick={() => { hideModal() }} className="btn modal__close-btn">X</button>
            </div>
            <div className="modal__main">
              <Login />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    isModalShown: state.modal.isShown,
    isLoginSuccess: state.user.isLoginSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);