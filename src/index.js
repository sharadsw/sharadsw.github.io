import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './components/Navbar'

const App = () => {
  return (
    <Navbar />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
