// Lefthand menu
// No longer used

import React from 'react'

const Menu = () => {
  const sections = [
    'About',
    'Projects',
    'Skills',
    'Contact'
  ]

  return (
    <aside className="menu is-fixed">
      <ul className="menu-list">
        {sections.map(section => 
          <li key={section}><a href={generateRef(section)}>{section}</a></li>
        )}
      </ul>
    </aside>
  )
}

const generateRef = (word) => {
  return '#' + word.toLowerCase()
}

export default Menu