import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//React router dom
import { BrowserRouter } from 'react-router-dom';
//=> redux

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
