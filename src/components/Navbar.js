import React from 'react'
import 'bulma/css/bulma.min.css'

const Navbar = () => {
  const data = {
    name: 'Sharad Swaminathan'
  }
  return (
    <nav className="navbar is-size-4 has-text-weight-bold p-6">
      
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          {data.name}
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-items">
          <div class="buttons">
            <a class="button" href="/">
              Linkedin
            </a>
            <a class="button" href="/">
              Github
            </a>
            <a class="button is-dark" href="/">
              Resume
            </a>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar