import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigStore from './Redux/Store';
//=> redux
const store = ConfigStore();
store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
