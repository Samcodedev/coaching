import React from 'react'
import Card from './Card/Card'
import './InstructorCard.css'

const InstructorCard = () => {
  const data = [
    {
      name: "Olaleye Rosiji",
      role: "Lead Coach"
    },
    {
      name: "Omotoso",
      role: "Lead Coach"
    },
    {
      name: "Olaleye Rosiji",
      role: "Lead Coach"
    },
  ]

  const card = data.map((item) =>{
    return(
      <Card 
        name={item.name}
        role={item.role}
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
