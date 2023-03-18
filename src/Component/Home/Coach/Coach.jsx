import React from 'react'
import './Coach.css'
import { RxTriangleRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Coach = () => {
  return (
    <div className='coach'>
      <div className="sub-coach">
        <div className="coach-text">
            <p>Training Packages</p>
            <h2>Educational and life mentoring services</h2>
            <Link to="/service"><button><RxTriangleRight /> <span>More details</span></button></Link>
        </div>
        <div className="coach-div">
            <h2>Our faculty includes several committed coaches across the nation:</h2>
            <Link to="/instructor"><button><RxTriangleRight /> <span>Global catalysts coaches</span></button></Link>
        </div>
      </div>
    </div>
  )
}

export default Coach
