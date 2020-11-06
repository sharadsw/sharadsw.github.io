import React from 'react'

import nav from '../data/nav'

const Navbar = () => {
 
  return (
    <nav className="navbar is-spaced">

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