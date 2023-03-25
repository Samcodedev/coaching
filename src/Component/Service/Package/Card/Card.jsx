import React from 'react'
import './Card.css'
import { VscPassFilled } from 'react-icons/vsc'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const data = props.list
    console.log(data)

    const list = data.map((item) =>{
        return(
            <li>{item.li}</li>
        )
    })
  return (
    <div className='sub-card'>
      <div className="top">
        <div className="top-icons">
            <VscPassFilled />
        </div>
        <div className="top-text">
            <h4>{props.title}</h4>
            <p>{props.subTitle}</p>
        </div>
      </div>
      <ul>
        {list}
        {/* contactValue */}
      </ul>
      <Link to="/contact" state={{ id: props.contactValue}}>
        <button><span>Choose Plan</span> <FaLongArrowAltRight /> </button>
      </Link>
    </div>
  )
}

export default Card
