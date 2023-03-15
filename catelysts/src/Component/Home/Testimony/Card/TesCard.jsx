import React from 'react'
import './TesCard.css'

const TesCard = (props) => {
  return (
    <div className='tescard'>
        <div className="img-div">
            <img src={props.img} alt="" />
        </div>
        <div className="text-div">
            <p>{props.content}</p>
            <div className="footer">
                <h4>{props.job}</h4>
                <span>{props.name}</span>
            </div>
        </div>
    </div>
  )
}

export default TesCard
