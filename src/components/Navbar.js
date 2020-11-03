import React from 'react'

const Navbar = () => {
  const data = {
    name: 'Sharad Swaminathan'
  }
  
  return (
    <nav className="navbar is-size-4 mb-6 pt-6 is-fixed">

      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-bold" href="/">
          {data.name}
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-items">
          <div className="buttons">
            <a className="button" href="/">
              Linkedin
            </a>
            <a className="button" href="/">
              Github
            </a>
            <a className="button is-info" href="/">
              Resume
            </a>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar