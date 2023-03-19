import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import logo from '../../Component/img/haplogo.jpg'



const Navbar = () => {

  const [open, openFunc] = useState(false)
  function navbar() {
    openFunc(!open)
  }

  // let cancel = document.getElementById("cancel")

  // setInterval(() => {
  //   window.innerWidth >= 970 ? openFunc(true) : console.log("yeeeh")
  //   window.innerWidth >= 970 ? cancel.style.display="none" : console.log("hohohohho")
  // }, 100);

  return (
    // <div className='navbar'>
    //   <img src={logo} alt="" />
    //   {
    //     open ? 
        
    //     <div className="dd" style={{display: open ? "flex" : "none"}}>
    //       <ul>
    //         <Link to="/" onClick={navbar}><li>Home</li></Link>
    //         <Link to="/about" onClick={navbar}><li>About</li></Link>
    //         <Link to="/service" onClick={navbar}><li>Service</li></Link>
    //         {/* <Link to="/about" onClick={navbar}><li>Gallery</li></Link> */}
    //         <Link to="/instructor" onClick={navbar}><li>Coaches</li></Link>
    //         <Link to="/contact" onClick={navbar}><li>Contact Us</li></Link>
    //       </ul>
    //     </div>
    //     :
        <div className='navbar'>
          <img src={logo} alt="" />
          <GiHamburgerMenu fontSize={35} onClick={navbar} style={{display: open? "none" : "block"}} />
          <MdClose id='cancel' fontSize={35} onClick={navbar} style={{display: open? "block": "none"}} />
          <div className="dd" style={{display: open ? "flex" : "none"}}>
            <ul>
              <Link to="/" onClick={navbar}><li>Home</li></Link>
              <Link to="/about" onClick={navbar}><li>About</li></Link>
              <Link to="/service" onClick={navbar}><li>Service</li></Link>
              {/* <Link to="/about" onClick={navbar}><li>Gallery</li></Link> */}
              <Link to="/instructor" onClick={navbar}><li>Coaches</li></Link>
              <Link to="/contact"  onClick={navbar}><li>Contact Us</li></Link>
            </ul>
          </div>
        </div>
        
    //   }
      
      
    // </div>
  )
}

export default Navbar
