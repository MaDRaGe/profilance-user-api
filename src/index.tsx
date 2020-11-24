import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './redux/store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.querySelector('#root')
);