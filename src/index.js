import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//React router dom
import { BrowserRouter } from 'react-router-dom';
//=> redux
import { Provider } from 'react-redux';
import ConfigStore from './Redux/Store';

const store = ConfigStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
