import React from 'react'

import links from '../data/links'

const About = () => {

  return (
    <section className="section" id="about">

    <div className="container is-max-desktop">
      <h1 className="title is-size-1">
        Hi, I'm Sharad Swaminathan.   
      </h1>
      <p>
        I'm a Full Stack developer currently looking for work. Lately I've been trying to improve my skills
        by working on React, Express, and Node thanks to the <a href="https://www.fullstackopen.com" target="_blank" rel="noreferrer">
        fullstackopen</a> coursework.
        
        In my free time, I like watching football, listening to music, playing chess, and working out. Feel free to contact me
        if you'd like to connect!
      </p>
      <p>
        <a className="button is-link mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.email} target="_blank" rel="noreferrer">
          Email
        </a>
        <a className="button is-primary mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </p>
    </div>

    </section>
  )
}

export default About