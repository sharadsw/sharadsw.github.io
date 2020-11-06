import React from 'react'

import links from '../data/links'

const About = () => {

  return (
    <section className="section" id="about">

    <div className="container is-max-desktop">
      <h1 className="title is-size-1">
        About Me     
      </h1>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
        Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
        Mauris placerat eleifend leo.
      </p>
      <p>
        <a className="button is-link mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.email}>
          Email
        </a>
        <a className="button is-primary mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.resume}>
          Resume
        </a>
      </p>
    </div>

    </section>
  )
}

export default About