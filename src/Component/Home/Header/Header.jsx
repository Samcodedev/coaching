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


// import React, {useEffect, useState} from 'react'
// import './Header.css'
// import { MdReadMore } from 'react-icons/md'
// import { Link } from 'react-router-dom'
// import img1 from '../../img/IMG-20230327-WA0002.jpg'
// import img2 from '../../img/20230309_123643.jpg'
// import img3 from '../../img/images.png'
// import AOS from "aos";
// import "aos/dist/aos.css";
// import HeroSlider, {Slide} from 'hero-slider'


// const Header = () => {

//   let image = [img1, img2, img3, img1, img2, img3, img1, img2]
//   let [dis, disfunc] = useState(0)

//   function call() {
//     if(dis >= 7){
//       disfunc(dis = 0)
//     }else{
//       disfunc(dis += 1)
//     }
//   }

//   // const data = [
//   //   {'id': '1', 'src': img1},
//   //   {'id': '2', 'src': img2},
//   //   {'id': '3', 'src': img3},
//   //   {'id': '4', 'src': img1},
//   //   {'id': '5', 'src': img2},
//   //   {'id': '6', 'src': img3},
//   //   {'id': '7', 'src': img1},
//   //   {'id': '8', 'src': img2}
//   // ]

//   setInterval(() => {
//     call()
//   }, 5000);

//   const im1 = '../../img/IMG-20230327-WA0002.jpg'
//   const im2 = '../../img/20230309_123643.jpg'
//   const im3 = '../../img/images.png'


//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);

//   return (
//     <HeroSlider
//       slidingAnimation="left_to_right"
//       orientation="horizontal"
//       initialSlide={1}
//       onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange") }
//       onChange={nextSlide => console.log("onchange")}
//       onAfterChange={nextSlide => console.log("onAfterChange")}
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.33)"
//       }}
//       settings={{
//         SlidingDuration: 250,
//         SliderDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButton: true,
//         autoplayDuration: 5000,
//         height: "100vh"
//       }}
//     >
//       <Slide 
//         background={{
//           backgroundImage: im1,
//           backgroundAttachment: "fixed"
//         }}
//         className='header' >
//         <div className="text-div" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="600">
//           <p>Hello welcome to The Global Catalysts 1 </p>
//           <h1>We inspire individuals and organizations through <span>coaching, consulting, training and therapy</span> to become positive, productive and purpose-driven. </h1>
//           <Link to="/about"><button> <MdReadMore fontSize={20} /> <span>more details</span> </button></Link>
//         </div>
//       </Slide>
//       <Slide 
//         background={{
//           backgroundImage: im2,
//           backgroundAttachment: "fixed"
//         }}
//         className='header' >
//         <div className="text-div" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="600">
//           <p>Hello welcome to The Global Catalysts 2 </p>
//           <h1>We inspire individuals and organizations through <span>coaching, consulting, training and therapy</span> to become positive, productive and purpose-driven. </h1>
//           <Link to="/about"><button> <MdReadMore fontSize={20} /> <span>more details</span> </button></Link>
//         </div>
//       </Slide>
//       <Slide 
//         background={{
//           backgroundImage: im3,
//           backgroundAttachment: "fixed"
//         }}
//         className='header' >
//         <div className="text-div" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="600">
//           <p>Hello welcome to The Global Catalysts 3 </p>
//           <h1>We inspire individuals and organizations through <span>coaching, consulting, training and therapy</span> to become positive, productive and purpose-driven. </h1>
//           <Link to="/about"><button> <MdReadMore fontSize={20} /> <span>more details</span> </button></Link>
//         </div>
//       </Slide>
//     </HeroSlider>
//   )
// }

// export default Header
