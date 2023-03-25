import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import logo from '../../Component/img/IMG-20210526-WA0006.jpg'



const Navbar = () => {


  const [open, openFunc] = useState(false)
  const [nav, navFunc] = useState(false)

  function navbar() {
    openFunc(true)
    console.log("open")
  }
  function close(){
    openFunc(false)
    console.log("close")
  }

  function navi(){
    navFunc(!nav)
  }
  
  useEffect(() =>{
    const interval = setInterval(() => {
      window.innerWidth >= 980 ? navbar() : close()
    }, 1000)
    return () => clearInterval(interval)
  },[open])
  

  return (
    <div className='navbar'>
      <div className="sub-navbar">
        {
            open? 
            <div className="desktop">
              <div className="img-div">
                <img src={logo} alt="" />
              </div>
              <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/service"><li>Service</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/instructor"><li>Our Faculty</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
              </ul>
            </div>
            :
            <div className="mobile">
              <div className="top">
                <div className="img-div">
                  <img src={logo} alt="" />
                </div>
                <div className="buggar">
                  {nav? 
                    <MdClose onClick={navi} />:
                    <GiHamburgerMenu onClick={navi} />
                  }
                  
                  
                </div>
              </div>
              <div className="nav" style={{display: nav? "flex" : "none"}}>
                <ul>
                  <Link to="/" onClick={navi} ><li>Home</li></Link>
                  <Link to="/service" onClick={navi}><li>Service</li></Link>
                  <Link to="/about" onClick={navi}><li>About Us</li></Link>
                  <Link to="/instructor" onClick={navi}><li>Our Faculty</li></Link>
                  <Link to="/contact" onClick={navi}><li>Contact Us</li></Link>
                </ul>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar
