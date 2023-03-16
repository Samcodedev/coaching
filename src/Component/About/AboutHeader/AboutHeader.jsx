import React from 'react'
import { Link } from 'react-router-dom'
import './AboutHeader.css'

const AboutHeader = (props) => {
  const link = `/${props.link}`
  return (
    <div className='about-header'>
      <div className="sub-about-header">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <ul>
            <Link to="/"><li>Home </li></Link>
            <Link to={link}><li>/{props.link}</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default AboutHeader
