import React from 'react'
import './Footer.css'
import { 
    BsInstagram, 
    BsTwitter, 
    BsFacebook 
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="sub-footer">
        <div className="footer-social">
            <h4>Follow us</h4>
            <p>follow Global Catalysts for more update and upcoming coaching sections on our social media handles</p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/afolabi-omotesho-79419674/"><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/afolabi-omotesho-79419674/"><BsTwitter /></a>
                <a href="https://www.linkedin.com/in/afolabi-omotesho-79419674/"><BsFacebook /></a>
            </div>
        </div>
        <div className="footer-service">
            <h4>Services</h4>
            <ul>
                <li>Educational services</li>
                <li>Life mentorship program</li>
                <li>Cooperate training</li>
            </ul>
        </div>
        <Link to="/contact"><button>Contact us</button></Link>
      </div>
      <div className="copy-right">
        <h4>Copyright @ 2023 All reserved</h4>
      </div>
    </footer>
  )
}

export default Footer
