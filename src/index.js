import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';

import Navbar from './components/Navbar'
import About from './layouts/About'
import Menu from './components/Menu'

const App = () => {
  return (
    <div className="container p-6">
      <Navbar />

      <div className="columns">
        <div className="column is-one-quarter">
          <Menu />
        </div>
        <div className="column">
          <About />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
