import React from 'react'

import links from '../data/links'
import resume from '../assets/resume.pdf'
import photo from '../assets/photo.jpeg'

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
            I'm a graduate student majoring in Computer Science at UNC Charlotte.
            I'm a Full Stack developer currently looking for a fun and challenging internship
            for Summer 2022.
          </p>
          <p>  
            In my free time, I like watching football (soccer), listening to music, playing chess, and working out. Feel free to contact me
            if you'd like to connect!
          </p>
          <p>
            <a className="button is-link mt-2 mr-2 has-text-weight-bold is-uppercase" href={links.email} target="_blank" rel="noreferrer">
              Email
            </a>
            <a className="button is-primary mt-2 mr-2 has-text-weight-bold is-uppercase" href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </p>
        </div>
      </div>
    </div>

    </section>
  )
}

export default About