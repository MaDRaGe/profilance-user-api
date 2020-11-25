import * as React from 'react';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import News from '../News/News';
import Home from '../Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles/style.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Modal />
      <main className="content">
        <div className="container">
          <Switch>
            <Route exact path="/news" component={News} />
            <Route exact path="/" component={Home}/>
            <Route path="*" render={() => (<Redirect to="/"/>)}/>
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default App;