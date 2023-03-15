import React from 'react'
import { Link } from 'react-router-dom'
import './AboutHeader.css'

const AboutHeader = () => {
  return (
    <div className='about-header'>
      <div className="sub-about-header">
        <h2>About Global Catalysts</h2>
        <p>The Global Catalysts is training and consultancy firm registered in 2011.</p>
        <ul>
            <Link to="/"><li>Home </li></Link>
            <Link to="/about"><li>/About</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default AboutHeader
