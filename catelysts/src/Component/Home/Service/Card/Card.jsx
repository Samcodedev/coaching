import React from 'react'
import './Card.css'
import { VscPassFilled } from 'react-icons/vsc'
import { RxTriangleRight } from 'react-icons/rx'

const Card = (props) => {
  return (
    <div className='card'>
      <div id="top">
        <VscPassFilled />
        <h3>{props.title}</h3>
      </div>
      <p>{props.contents}</p>
      <button id='details'><RxTriangleRight /> <span>More details</span></button>
    </div>
  )
}

export default Card
