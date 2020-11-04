import React from 'react'

const Card = () => {

  return (
    <div className="card mb-4">
      <div className="card-content">
        <div className="media">

          <div className="media-left">
            <i className="fas fa-code is-size-1"></i>
          </div>

          <div className="media-content">
            <p className="title is-4">
              Project Name
            </p>
            <p className="subtitle is-6">
              Project Desc
            </p>
          </div>
        </div>

        <p>
              <span class="tag is-link mr-1">
                Tag label
              </span>
              <span class="tag is-link">
                Tag label
              </span>
            </p>
            <p>
              <a className="button is-dark mt-2 has-text-weight-bold is-uppercase" href="/">
                Repo
              </a>
            </p>
      </div>
    </div>
  )
}

export default Card