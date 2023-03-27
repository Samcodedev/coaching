import React from 'react'
import './Card.css'
import { VscPassFilled } from 'react-icons/vsc'
import { RxTriangleRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card'>
      <div id="top">
        <VscPassFilled />
        <h3>{props.title}</h3>
      </div>
      <p>{props.contents}</p>
      <Link to="/service">
        <button id='details'><RxTriangleRight /> <span>Our Service</span></button>
      </Link>
    </div>
  )
}

export default Card
