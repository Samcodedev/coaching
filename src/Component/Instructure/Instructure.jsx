import React from 'react'
import AboutHeader from '../About/AboutHeader/AboutHeader'
import InstructorCard from './InstructorCard/InstructorCard'

const Instructure = () => {
  return (
    <>
        <AboutHeader 
            title="Our Faculty"
            content="Our faculty includes several committed coaches across the nation but lead by"
            link="instructor"
        />
        <InstructorCard />
    </>
  )
}

export default Instructure
