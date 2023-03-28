import React, {useEffect} from 'react'
import Card from './Card/Card'
import './Package.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Package = () => {
    const data = [
        {
            title: "CORPORATE TRAINING PACKAGES",
            subTitle: "$24/month",
            contactValue: {
                one: "Book a cooperate training",
                two: "Select a contact option"
            },
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
            contactValue: {
                one: "Book a life mentoring program",
                two: "Select a contact option"
            },
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
                contactValue={item.contactValue}
            />
        )
    })
  

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <div className='package'>
        < span data-aos="fade-up" data-aos-duration="600">
            <h2>Package</h2>
            <p>Our exclusive package lists</p>
        </span>
      <div className="sub-package">
        {card}
      </div>
    </div>
  )
}

export default Package
