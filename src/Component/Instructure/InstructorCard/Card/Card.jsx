import React from 'react'
import './Card.css'
import { FiMail } from 'react-icons/fi'
import { MdAddIcCall } from 'react-icons/md'
import img from '../../../img/Screenshot_20221107-011506_Instagram-2.jpg'

const Card = (props) => {
  return (
    <div className='inCard'>
      <div className="img-div">
        <img src={img} alt="" />
      </div>
      <div className="text-div">
        <div className="name">
            <h4>{props.name}</h4>
            <p>{props.role}</p>
        </div>
        <div className="contact">
          <div className="icon">
            <FiMail />
            <p>Email</p>
          </div>
          <div className="icon">
            <MdAddIcCall />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
