import * as React from 'react';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import './styles/style.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Modal />
      <main className="content">
        <div className="container">

        </div>
      </main>
    </div>
  )
}

export default App;