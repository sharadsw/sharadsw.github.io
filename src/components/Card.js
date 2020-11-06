import React from 'react'

const Card = ({ name, desc, tags, link }) => {

  return (
    <a href={link} target="_blank" rel="noreferrer">

    <div className="card mb-4 card-border">
      <div className="card-content">
        <div className="media">

          <div className="media-left">
            <i className="fas fa-code is-size-1 has-text-primary"></i>
          </div>

          <div className="media-content">
            <p className="title is-4">
              {name}
            </p>
            <p className="subtitle is-6">
              {desc}
            </p>
            <p>
              {tags.map(tag => 
                <span key={tag} className="tag is-grey-dark mr-1">{tag}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>

    </a>
  )
}

export default Card