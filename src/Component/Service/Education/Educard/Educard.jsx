import React, {useEffect} from 'react'
import './Educard.css'
import { VscPassFilled } from 'react-icons/vsc'
import AOS from "aos";
import "aos/dist/aos.css";

const Educard = (props) => {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='educard' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
      <div className="edu-top">
        <VscPassFilled id='svg' />
        <h3>{props.title}</h3>
      </div>
      <p>{props.content}</p>
    </div>
  )
}

export default Educard
