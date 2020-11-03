import React from 'react'

const Footer = () => {

  return (
    <footer className="footer" id="contact">
      <div className="container has-text-centered">
        <p className="buttons is-centered">
          <button className="button">
            <span className="icon is-small">
              <i className="far fa-envelope"></i>
            </span>
          </button>

          <button className="button">
            <span className="icon is-small">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </button>

          <button className="button">
            <span className="icon is-small">
              <i className="fab fa-github"></i>
            </span>
          </button>
        </p>

        <hr />

        <p>
          Placeholder text right here right here right here right here
        </p>
      </div>
    </footer>
  )
}

export default Footer