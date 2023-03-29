import React, {useEffect} from 'react'
import './Card.css'
import { VscPassFilled } from 'react-icons/vsc'
import { RxTriangleRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='card' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
      <div id="top">
        <VscPassFilled />
        <h3>{props.title}</h3>
      </div>
      <p id='p'>{props.contents}</p>
      <Link to="/service">
        <button id='details'><RxTriangleRight /> <span>Our Service</span></button>
      </Link>
    </div>
  )
}

export default Card
