import React from 'react'
import './Header.css'
import { MdReadMore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import img1 from '../../img/ECG Management Consultants - Healthcare Advisors.jfif'
import img2 from '../../img/8061a41e-f457-45b7-ab17-9def2f838469.jfif'
import img3 from '../../img/background.jfif'


const Header = () => {

  const image = [img1, img2, img3]

  // const [showNum, SetShowNum] = useState(0);
  
  // // useEffect(() => {
  //   let i = 1;

  //     setInterval(() => {
  //       increment()
  //     }, 300);

  //     // var stop = data.allSanityProducts.edges.length // right now equates to 4
  //     const stop = 4;

  //     function increment() {
  //       i = i + 1;

  //       if (i === stop) {
  //         i = 0;
  //       }

  //       console.log(i);
  //       SetShowNum(i);
  //     }
  // // }, []);

  console.log(image[2])
  return (
    <div className='header' >
      <div className="text-div">
        <p>Hello welcome to The Global Catalysts  </p>
        <h1>We inspire individuals and organizations through <span>coaching </span>, <span>consulting</span>, <span>training</span> and <span> therapy</span> to become positive, <span>productive </span> and <span> purpose-driven.</span> </h1>
        <Link to="/about"><button> <MdReadMore fontSize={20} /> <span>more details</span> </button></Link>
      </div>
    </div>
  )
}

export default Header
