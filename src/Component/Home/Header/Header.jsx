import React, {useEffect} from 'react'
import './Header.css'
import { MdReadMore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import img1 from '../../img/IMG-20230327-WA0002.jpg'
import img2 from '../../img/20230309_123643.jpg'
import img3 from '../../img/images.png'
import img4 from '../../img/IMG-20210526-WA0006.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const Header = () => {


  const backgroundImage1 = img1
  const backgroundImage2 = img2
  const backgroundImage3 = img3
  const backgroundImage4 = img4


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <HeroSlider 
      height={"90vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <div className="header">
          <div className="text-div" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="600">
            <p>Hello welcome to The Global Catalysts 1 </p>
            <h1>We inspire individuals and organizations through <span>coaching, consulting, training and therapy</span> to become positive, productive and purpose-driven. </h1>
            <Link to="/about"><button> <MdReadMore fontSize={20} /> <span>more details</span> </button></Link>
          </div>
        </div>
      </Overlay>

      <Slide 
        label="Coaching"
        background={{
          backgroundImageSrc: backgroundImage1
        }}
      />
      <Slide 
        label="Training"
        background={{
          backgroundImageSrc: backgroundImage2
        }}
      />
      <Slide 
        label="Therapy"
        background={{
          backgroundImageSrc: backgroundImage3
        }}
      />
      <Slide 
        label="Consulting"
        background={{
          backgroundImageSrc: backgroundImage4
        }}
      />
    <MenuNav />
    </HeroSlider>
  )
}

export default Header
