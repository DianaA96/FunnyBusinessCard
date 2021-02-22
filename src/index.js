import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import Bubbles from './Bubbles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Bubbles />
    <App />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
