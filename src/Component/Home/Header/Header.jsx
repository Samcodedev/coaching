import React, {useEffect, useState} from 'react'
import './Header.css'
import { MdReadMore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import img1 from '../../img/IMG-20230327-WA0002.jpg'
import img2 from '../../img/20230309_123643.jpg'
import img3 from '../../img/images.png'
import AOS from "aos";
import "aos/dist/aos.css";


const Header = () => {

  let image = [img1, img2, img3, img1, img2, img3, img1, img2]
  let [dis, disfunc] = useState(0)

  function call() {
    if(dis >= 7){
      disfunc(dis = 0)
    }else{
      disfunc(dis += 1)
    }
  }

  setInterval(() => {
    call()
  }, 5000);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='header' style={{backgroundImage: `url('${image[dis]}')`}} >
      <div className="text-div" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="600">
        <p>Hello welcome to The Global Catalysts  </p>
        <h1>We inspire individuals and organizations through <span>coaching, consulting, training and therapy</span> to become positive, productive and purpose-driven. </h1>
        <Link to="/about"><button> <MdReadMore fontSize={20} /> <span>more details</span> </button></Link>
      </div>
    </div>
  )
}

export default Header
