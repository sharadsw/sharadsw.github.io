import React from 'react'
import 'bulma/css/bulma.min.css'

const Menu = () => {
  const sections = [
    'About',
    'Projects',
    'Skills',
    'Contact'
  ]

  return (
    <aside className="menu">
      <ul className="menu-list">
        {sections.map(section => 
          <li><a href="/">{section}</a></li>
        )}
      </ul>
    </aside>
  )
}

export default Menu