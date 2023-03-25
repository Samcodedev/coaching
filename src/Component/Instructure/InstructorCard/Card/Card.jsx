import React from 'react'
import './Card.css'
import { FiMail } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
// import img from '../../../img/Screenshot_20221107-011506_Instagram-2.jpg'

const Card = (props) => {
  return (
    <div className='inCard'>
      <div className="img-div">
        <img src={props.img} alt="" />
      </div>
      <div className="text-div">
        <div className="name">
            <h4>{props.name}</h4>
            <p>{props.role}</p>
        </div>
        <div className="contact">
          <a href={props.mail}>
            <div className="icon">
              <FiMail />
              <p>Email</p>
            </div>
          </a>
          <a href={props.linkin}>
            <div className="icon">
              <BsLinkedin />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
