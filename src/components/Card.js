import React from 'react'

const Card = ({ name, desc, tags, link, repo }) => {

  return (
    <div className="card mb-4">
      <div className="card-content">
        <div className="media">

          <div className="media-left">
            <i className="fas fa-code is-size-1"></i>
          </div>

          <div className="media-content">
            <a href={link}>
            <p className="title is-4">
              {name}
            </p></a>
            <p className="subtitle is-6">
              {desc}
            </p>
          </div>
        </div>

        <p>
          {tags.map(tag => 
            <span key={tag} className="tag is-link mr-1">{tag}</span>
          )}
        </p>
        <p>
          <a className="button is-dark mt-2 has-text-weight-bold is-uppercase" href={repo}>
            Repo
          </a>
        </p>
      </div>
    </div>
  )
}

export default Card