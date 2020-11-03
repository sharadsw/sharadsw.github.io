import React from 'react'
import 'devicon/devicon.min.css'

import Skill from '../components/Skill'

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      icon: 'java'
    },
    {
      name: 'Python',
      icon: 'python'
    },
    {
      name: 'JavaScript',
      icon: 'javascript'
    },
  ]

  return (
    <div className="container">
      <h1 className="title">
        Skills
      </h1>

      <div className="columns">
        <div className="column">
          <h2 className="subtitle">Languages</h2>
          {
            skills.map(skill => 
              <Skill key={skill.name} name={skill.name} icon={`devicon-${skill.icon}-plain colored`} />
            )
          }
        </div>
        <div className="column">
          <h2 className="subtitle">Frameworks/Libraries</h2>
          {
            skills.map(skill => 
              <Skill key={skill.name} name={skill.name} icon={`devicon-${skill.icon}-plain colored`} />
            )
          }
        </div>
        <div className="column">
          <h2 className="subtitle">Tools</h2>
          {
            skills.map(skill => 
              <Skill key={skill.name} name={skill.name} icon={`devicon-${skill.icon}-plain colored`} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Skills