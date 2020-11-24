// packages

import React from 'react';
import ReactDOM from 'react-dom';

// pages, components & utils

import App from './App';
import Cyberpunk from './Cyberpunk';

// code

const isCyberpunk = true;

if (isCyberpunk) {
  ReactDOM.render(
    <React.StrictMode>
      <Cyberpunk />
    </React.StrictMode>,
    document.getElementById('root'),
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
