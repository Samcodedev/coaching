import React from 'react'
import './Header.css'
import { MdReadMore } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="text-div">
        <p>Hello welcome to The Global Catalysts  </p>
        <h1>We inspire individual and organizations through <span>mental empowering trainings.</span> </h1>
        <Link to="/about"><button> <MdReadMore fontSize={20} /> <span>more details</span> </button></Link>
      </div>
    </div>
  )
}

export default Header
