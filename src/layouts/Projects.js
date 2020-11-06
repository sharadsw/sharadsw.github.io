import React from 'react'

import Card from '../components/Card'

const Projects = () => {
  const data = {
    name: 'My prog',
    desc: 'incredible',
    tags: ['React', 'HTML', 'JS'],
    link: 'www.google.com',
    repo: 'www.github.com'
  }

  return (
    <section className="section" id="projects">

    <div className="container is-max-desktop">
      <h1 className="title is-size-1">
        Projects
      </h1>
      <Card name={data.name} desc={data.desc} tags={data.tags} link={data.link} repo={data.repo} />
      <Card name={data.name} desc={data.desc} tags={data.tags} link={data.link} repo={data.repo} />
    </div>

    </section>
  )
}

export default Projects