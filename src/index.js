import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

import Navbar from './components/Navbar'
import Menu from './components/Menu'
import About from './layouts/About'
import Skills from './layouts/Skills'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="columns">
        <div className="column is-one-quarter">
          <Menu />
        </div>
        <div className="column">
          <About />
          <Skills />
        </div>
      </div>

      <Footer />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
