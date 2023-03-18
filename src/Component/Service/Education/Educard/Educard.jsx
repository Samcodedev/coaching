import React from 'react'
import './Educard.css'
import { VscPassFilled } from 'react-icons/vsc'

const Educard = (props) => {
  return (
    <div className='educard'>
      <div className="edu-top">
        <VscPassFilled id='svg' />
        <h3>{props.title}</h3>
      </div>
      <p>{props.content}</p>
    </div>
  )
}

export default Educard
