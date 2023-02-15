import React from 'react'
import 'devicon/devicon.min.css'

import Skill from '../components/Skill'

import skills from '../data/skills'

const SkillColumn = ({ title, skills }) => {
  
  return (
    <div className="column">
      <h2 className="subtitle">{title}</h2>
      {
        skills.map(skill => 
          <Skill key={skill.name} name={skill.name} icon={skill.icon} years={skill.years} />
      )}
    </div>
  )
}

const Skills = () => {

  return (
    <section className="section" id="skills">

    <div className="container is-max-desktop">
      <h1 className="title is-size-1">
        Skills
      </h1>

      <div className="columns">
        <SkillColumn title="Languages" skills={skills.lang} />
        <SkillColumn title="Frameworks/Libraries" skills={skills.libs} />
        <SkillColumn title="Data Science" skills={skills.datasci} />
        <SkillColumn title="Tools" skills={skills.tools} />
      </div>
    </div>

    </section>
  )
}

export default Skills