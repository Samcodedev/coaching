import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './AboutHeader.css'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHeader = (props) => {
  const link = `/${props.link}`
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='about-header'>
      <div className="sub-about-header" data-aos="fade-up" data-aos-duration="2000">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <ul>
            <Link to="/"><li>Home </li></Link>
            <Link to={link}><li>/{props.link}</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default AboutHeader
