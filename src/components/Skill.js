import React from 'react'

const Skill = ({ name, icon, years }) => {
  
  return (
    <div>
      <span className="is-size-1 has-text-link">
        <i className={icon}></i>
      </span>
      <span className="ml-4">
        {name} ({years} yr{years > 1 && "s"})
      </span>
    </div>
  )
}

export default Skill