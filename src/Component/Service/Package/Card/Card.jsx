import React, {useEffect} from 'react'
import './Card.css'
import { VscPassFilled } from 'react-icons/vsc'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
    const data = props.list
    console.log(data)

    const list = data.map((item) =>{
        return(
            <li>{item.li}</li>
        )
    })
  

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <div className='sub-card' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
      <div className='but-con'>
        <div className="top">
          <div className="top-icons">
              <VscPassFilled />
          </div>
          <div className="top-text">
              <h4>{props.title}</h4>
              {/* <p>{props.subTitle}</p> */}
          </div>
        </div>
        <ul>
          {list}
          {/* contactValue */}
        </ul>
      </div>
      <Link to="/contact" state={{ id: props.contactValue}}>
        <button><span>Choose Plan</span> <FaLongArrowAltRight /> </button>
      </Link>
    </div>
  )
}

export default Card
