import React from 'react'
import './TesCard.css'
// import AOS from "aos";
// import "aos/dist/aos.css";

const TesCard = (props) => {
  

  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <div className='tescard'  
      // data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500">
        <div className="img-div">
            <img src={props.img} alt="" />
        </div>
        <div className="text-div">
            <p>{props.content}</p>
            <div className="footer">
                <h4>{props.job}</h4>
                <span>{props.name}</span>
            </div>
        </div>
    </div>
  )
}

export default TesCard
