import React from 'react'
import './ServiceText.css'
import img from '../../img/IMG-20210526-WA0006.jpg'

const ServiceText = () => {
  return (
    <div className='serviceText'>
      <div className="sub-service-text">
        <div className="img-div">
            <img src={img} alt="" />
        </div>
        <div className="service-content">
            <h4>Our Service</h4>
            <p>We deploy a wide range of solutions to clients’ needs. Our interventions include coaching (individual and group), consulting, corporate training and therapy. They are deployed based on clients’ needs and demands. We are skilled in workplace psychology, neuroscience, emotional freedom therapy amongst other intervention. We work with organisations in various sectors including Education, Finance, Oil and Gas, Public Relations, Food and Beverages and so on. We are enthusiastic about the prospect of working with your organisation.</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceText
