import React from 'react'

const Navbar = () => {
  const sections = [
    'Home',
    'About',
    'Projects',
    'Skills',
    'Contact'
  ]
  
  return (
    <nav className="navbar is-size-4 px-6">

      <div className="navbar-brand">
        
      </div>

      <div className="navbar-menu is-size-6">
        <div className="navbar-start">
          {
            sections.map(section => 
              <a className="navbar-item" href="/">{section}</a>)
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