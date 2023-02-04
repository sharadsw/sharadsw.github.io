import React from 'react'

import links from '../data/links'

const Footer = () => {

  return (
    <footer className="footer" id="contact">
      <div className="container has-text-centered is-max-desktop">
        <p className="buttons is-centered">
          <a className="has-text-primary mx-4" href={links.email} target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="far fa-envelope"></i>
            </span>
          </a>

          <a className="has-text-primary mx-4" href={links.linkedin} target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </a>

          <a className="has-text-primary mx-4" href={links.github} target="_blank" rel="noreferrer">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
        </p>

        <p>
          Sharad Swaminathan © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer