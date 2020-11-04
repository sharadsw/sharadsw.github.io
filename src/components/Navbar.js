import React from 'react'

import nav from '../data/nav'

const Navbar = () => {
 
  return (
    <nav className="navbar is-size-4 px-6 is-transparent">

      <div className="navbar-brand">
        
      </div>

      <div className="pt-1 is-size-6">
        <div className="navbar-start">
          {
            nav.map(section => 
              <a className="navbar-item" href={section.ref}>{section.name}</a>)
          }
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-items">
        
          <div className="field is-grouped">
            <a className="button is-dark mt-2 has-text-weight-bold is-uppercase" href="/">
              Resume
            </a>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar