import * as React from 'react';
import './Modal.css';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/modal';

interface IModalProps {
  isModalShown: boolean,
  hideModal: Function
}
const Modal = ({isModalShown, hideModal}: IModalProps) => {
  if (isModalShown) {
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
    isModalShown: state.modal.isShown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);