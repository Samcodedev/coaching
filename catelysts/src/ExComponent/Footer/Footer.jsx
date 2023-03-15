import React from 'react'
import './Footer.css'
import { 
    BsInstagram, 
    BsTwitter, 
    BsFacebook 
} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="sub-footer">
        <div className="footer-social">
            <h4>Follow us</h4>
            <p>follow Global Catalysts for more update and upcoming coaching sections on our social media handles</p>
            <div className="icons">
                <BsInstagram />
                <BsTwitter />
                <BsFacebook />
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
        <button>Contact us</button>
      </div>
      <div className="copy-right">
        <h4>Copyright @ 2023 All reserved</h4>
      </div>
    </footer>
  )
}

export default Footer
