import React from 'react'

const Card = () => {

  return (
    <div className="card mb-4 p-5">
      <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a className="button" href="/">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  )
}

export default Card