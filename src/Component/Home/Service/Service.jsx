import React, {useEffect} from 'react'
import Card from './Card/Card'
import './Service.css'
import { BsFillStarFill} from 'react-icons/bs'
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const data = [
    {
      title: "Excellence",
      contents: "we deliver exceptional and top-notch services to our clients. Our focus is to always go beyond and above our customer’s expectation"
    },
    {
      title: "Creativity",
      contents: "we develop out of the box innovations and solutions to meet the needs of our clients and customers. Our ideas are original and tailor-made to the demands of our clients"
    },
    {
      title: "Integrity",
      contents: "we build trust by staying true to our values of delivering excellent services and out of the box solution to all our clients. We stop at nothing to ensure that our customers are more than satisfied with our delivery."
    },
    {
      title: "Teamwork",
      contents: "we do not just consult, we build partnership. To all our clients and customers, we are more than just a contract, we are families."
    },
    {
      title: "Empathy",
      contents: "we take up your vision, needs and interest as if it is ours. We put ourselves in your shoes to enable us deliver to the best to our clients."
    }
  ]

  let cards = data.map((item) =>{
    return(
      <Card 
        title={item.title}
        contents={item.contents}
      />
    )
  })
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='service'>
      <div className="sub-service">
        <div className="service-text"  
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-out">
            <h2>OUR MISSION</h2>
            <p>We inspire individual and organizations through mental empowering training, coaching, consultation, and therapy, to align with their personal and organizational visions, and to positively contribute to the growth of themselves, their business environment and to the world at large. </p>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
        </div>
        <div className="service-cards">
            <h2>OUR CORE VALUES</h2>
            <div className="sub-service-cards">
              {cards}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
