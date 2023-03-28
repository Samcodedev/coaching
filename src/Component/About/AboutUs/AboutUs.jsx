import React, {useEffect} from 'react'
import './AboutUs.css'
import img from '../../img/fav.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='about-us'>
      <div className="sub-about-us">
        <div className="about-us-text">
            <span data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="600">
              <h4>Global Catalysts</h4>
              <p>The Global Catalysts is a training and consultancy firm registered in 2011. We started operations in the year 2012 when we launched our first Conference for young men and women tagged Be the Change Conference in the city of Ilorin, Kwara State. We have since created different solutions and programmes in line with our vision.</p>
            </span>

            <span data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="600">
              <h4>Our vision</h4>
              <p>Our vision is to build individuals as well as organisations that are positive, productive and driven by purpose.</p>
            </span>
        
            <span data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="600">
              <h4>Our mission</h4>
              <p>We inspire individuals and organisations through mental empowering trainings, coaching, consultation, and therapy, to align with their personal and organisational visions, and to positively contribute to the growth of themselves, their business environment and to the world at large.</p>
            </span>
        </div>
        <div className="img-div" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
