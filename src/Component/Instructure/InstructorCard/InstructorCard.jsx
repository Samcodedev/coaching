import React from 'react'
import Card from './Card/Card'
import './InstructorCard.css'
import prof1 from '../../img/Screenshot_20221107-011506_Instagram-2.jpg'
import prof2 from '../../img/DSC_1569.jpg'
import prof3 from '../../img/TOM_2107-Edit.jpg'
import prof4 from '../../img/IMG-20230320-WA0034.jpg'

const InstructorCard = () => {
  const data = [
    {
      name: "Afolabi Omotesho",
      role: "CEO/Managing Partner",
      mail: "https://www.obanlasamuelolakunle@gmail.com",
      linkin: "https://www.linkedin.com/in/afolabi-omotesho-79419674/",
      img: prof3
    },
    {
      name: "Olaleye Rosiji",
      role: "Lead coach/Managing Partner",
      mail: "https://www.obanlasamuelolakunle@gmail.com",
      linkin: "https://www.linkedin.com/in/olaleye-rosiji/",
      img: prof1
    },
    {
      name: "Olufemi David Lanlemi",
      role: "Head of Human Resources",
      mail: "https://www.obanlasamuelolakunle@gmail.com",
      linkin: "https://www.linkedin.com",
      img: prof2
    },
    {
      name: "Kayode Ojo",
      role: "Senior Educational Consultant",
      mail: "https://www.obanlasamuelolakunle@gmail.com",
      linkin: "https://www.linkedin.com",
      img: prof4
    },
    
  ]

  const card = data.map((item) =>{
    return(
      <Card 
        name={item.name}
        role={item.role}
        img={item.img}
        mail={item.mail}
        linkin={item.linkin}
      />
    )
  })
  return (
    <div className='instructorCard'>
      <div className="sub-instructorCard">
        {card}
      </div>
    </div>
  )
}

export default InstructorCard
