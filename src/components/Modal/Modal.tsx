import * as React from 'react';
import './Modal.css';
import Login from '../Login/Login';

const Modal = () => {
  return (
    <div className="modal">
      <div className="container">
        <div className="modal__content">
          <div className="modal__header">
            <button className="btn modal__close-btn">X</button>
          </div>
          <div className="modal__main">
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;