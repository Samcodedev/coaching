import React from 'react'
import Card from './Card/Card'
import './Package.css'

const Package = () => {
    const data = [
        {
            title: "CORPORATE TRAINING PACKAGES",
            subTitle: "$24/month",
            list:[
                {li: "Leadership Development"},
                {li: "Customer Service (ServicEdge)"},
                {li: "Management Coaching"},
                {li: "Communication and Presentation Skills"},
                {li: "Goal Setting"},
                {li: "Emotional Intelligence for work and life"},
                {li: "Leading through VUCA"},
                {li: "Conflict Resolution"},
                {li: "Team Bonding"},
                {li: "Peak Performance Coaching"},
                {li: "Sales Mastery"},
            ]
        },
        {
            title: "THE LIFE MENTORING PROGRAM (TLMP)",
            subTitle: "$24/month",
            list:[
                {li: "Career Mentorship"},
                {li: "Academic Excellenc"},
                {li: "Leadership & Life Skills Mentoring"},
                {li: "Special Needs Mentoring (for Special Teens/Kids)"},
                {li: "Therapies"},
                {li: "Behavioural Coaching"}
            ]
        }
    ]

    const card = data.map((item) =>{
        return(
            <Card 
                title={item.title}
                subTitle={item.subTitle}
                list={item.list}
            />
        )
    })
  return (
    <div className='package'>
      <div className="sub-package">
        {card}
      </div>
    </div>
  )
}

export default Package
