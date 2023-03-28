import React, {useEffect} from 'react'
import './Card.css'
import AOS from "aos";
import "aos/dist/aos.css";
// import img from '../../../img/Screenshot_20221107-011506_Instagram-2.jpg'

const Card = (props) => {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='inCard' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
      <div className="img-div">
        <img src={props.img} alt="" />
      </div>
      <div className="text-div">
        <div className="name">
            <h4>{props.name}</h4>
            <p>{props.role}</p>
        </div>
        {/* <div className="contact">
          <a href={props.mail}>
            <div className="icon">
              <FiMail />
              <p>Email</p>
            </div>
          </a>
          <a href={props.linkin}>
            <div className="icon">
              <BsLinkedin />
            </div>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Card
