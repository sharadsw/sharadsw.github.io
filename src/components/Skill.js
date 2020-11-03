import React from 'react'
import Skills from '../layouts/Skills'

const Skill = ({ name, icon }) => {
  
  return (
    <span className="icon mr-6 mb-6 is-large skill">
      <i className={icon}></i>
    </span>
  )
}

export default Skill