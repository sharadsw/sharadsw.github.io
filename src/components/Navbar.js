import React from 'react'

import nav from '../data/nav'

import logo from '../assets/logo.png'

const Navbar = () => {
 
  return (
    <nav className="navbar is-transparent is-fixed-top" id="#top">
      
      <div className="navbar-brand">
        <a href="#top" className="navbar-item">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="navbar-menu" id="target">
        <div className="navbar-end">
          {
            nav.map(section => 
              <a key={section.name} className="navbar-item" href={section.ref}>{section.name}</a>)
          }
        </div>
      </div>

    </nav>
  )
}

export default Navbar