import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>, 
  document.querySelector('#root')
);