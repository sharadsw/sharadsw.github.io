import React from 'react'
import 'devicon/devicon.min.css'

import Skill from '../components/Skill'

const SkillColumn = ({ title, skills }) => {
  
  return (
    <div className="column">
      <h2 className="subtitle">{title}</h2>
      {
        skills.map(skill => 
          <Skill key={skill.name} name={skill.name} icon={`devicon-${skill.icon}-plain`} />
      )}
    </div>
  )
}

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
    <section className="section" id="skills">

    <div className="container">
      <h1 className="title">
        Skills
      </h1>

      <div className="columns">
        <SkillColumn title="Languages" skills={skills} />
        <SkillColumn title="Frameworks/Libraries" skills={skills} />
        <SkillColumn title="Tools" skills={skills} />
      </div>
    </div>

    </section>
  )
}

export default Skills