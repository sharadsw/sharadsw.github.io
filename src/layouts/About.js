import React from 'react'

import links from '../data/links'
import photo from '../assets/photo.jpeg'
import about from '../data/about'

const About = () => {

  return (
    <section className="section" id="about">

    <div className="container is-max-desktop">
      <h1 className="title is-size-1">
        Hi, I'm Sharad.   
      </h1>
      <div className="about__content">
        <img src={photo} alt="" className="photo"></img>
        <div className="about__text">
          <p>
            {about}
          </p>
          <p>
            <a className="button is-link mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.email} target="_blank" rel="noreferrer">
              <span className="icon is-small">
                <i className="fas fa-envelope"></i>
              </span>
              <span>Email</span>
            </a>
            <a className="button is-info mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.linkedin} target="_blank" rel="noreferrer">
              <span className="icon is-small">
                <i className="fab fa-linkedin"></i>
              </span>
              <span>Linkedin</span>
            </a>
            <a className="button is-primary mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.github} target="_blank" rel="noreferrer">
              <span className="icon is-small">
                <i className="fab fa-github"></i>
              </span>
              <span>Github</span>
            </a>
          </p>
        </div>
      </div>
    </div>

    </section>
  )
}

export default About