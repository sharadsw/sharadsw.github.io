import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

import Navbar from './components/Navbar'
import Menu from './components/Menu'
import About from './layouts/About'
import Skills from './layouts/Skills'
import Projects from './layouts/Projects'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="section" id="about">
        <About /> 
      </section>
      <section className="section" id="projects">
        <Projects />
      </section>
      <section className="section" id="skills">
        <Skills />
      </section>
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
