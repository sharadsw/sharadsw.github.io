import React from 'react'

import Card from '../components/Card'

import projects from '../data/projects'

const Projects = () => {
  return (
    <section className="section" id="projects">

    <div className="container is-max-desktop">
      <h1 className="title is-size-1">
        Projects
      </h1>
      {projects.map(data =>
        <Card key={data.name} name={data.name} desc={data.desc} tags={data.tags} link={data.link} />
      )}
    </div>

    </section>
  )
}

export default Projects