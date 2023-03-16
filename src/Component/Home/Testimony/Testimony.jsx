import React from 'react'
import './Testimony.css'
import TesCard from './Card/TesCard.jsx';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'

import img1 from '../../img/haplogo.jpg'
import img2 from '../../img/IMG-20230303-WA0004.jpg'
import img5 from '../../img/haplogo.jpg'
import img6 from '../../img/IMG-20230303-WA0006.jpg'


const Testimony = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])


    const content = [
        {
            name: "(Former College Administrator, Bridge House College, Ikoyi)",
            content: "These are one of Nigeria’s best inspirational speakers highly sought after to address the needs of High School and College Students. Their Seminars and Conferences, I recommend highly. Well done.",
            job: "Ms Carmen Latty",
            img: img5
        },
        {
            name: "(Author “The Gele I Wear” Poetry Book, Engineering Student, U.S.A)",
            content: "“The Global Catalysts was a wonderful mentor. They made a way to educate us about meaningful life encounters. They have a way of pushing every students to have great attributes so that they can have more to bring to the table. Not everyone goes out of their way to do such. They carried every single students along and didn’t give up on anyone of us. I wouldn’t think of any other organization that could provide such great impact”. ",
            job: "Kikelomo Sanni",
            img: img6
        },
        {
            name: "(US Army, Dancer, Nurse, Fitness Coach, Fashionnova Ambassador)",
            content: "“I don’t have words to express how much The Global Catalysts have impacted me. They have inspired me to the best that I could be and I can never forget. The Global Catalysts is an inspiration to the world.”",
            job: "Esosa Ogbebor",
            img: img1
        },
        {
            name: "(Law student, Lead City University)",
            content: "Global catalysts has made an indelible impact on me and has helped in guiding my conviction. During several of our conversations I have learned the need for a synergy between members of the world which have made me develop interest in humanity and the rejection of ethnic loyalty for National loyalty. I have learnt several skills that will make me self-reliant.",
            job: "Abdullahi Aliyu Idris",
            img: img2
        }
    ]

    const data = content.map((item) =>{
        return(
            <TesCard 
                name={item.name}
                content={item.content}
                job={item.job}
                img={item.img}
            />
        )
    })

  return (
    <div className='testimony' >
        <div className="testimony-text">
          <p>Clients reviews</p>
          <h2>What our clients say on our eligibility and success rate</h2>
        </div>
        <motion.div className="carousel" ref={carousel} whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner">
                {data}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Testimony
