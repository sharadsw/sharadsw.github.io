import React from 'react'

const Skill = ({ name, icon }) => {
  
  return (
    <div>
      <span className="is-size-1">
        <i className={icon}></i>
      </span>
      <span className="ml-4">
        {name}
      </span>
    </div>
  )
}

export default Skill