import React from 'react'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutUs from './AboutUs/AboutUs'

const About = () => {
  return (
    <>
        <AboutHeader 
          title="About Global Catalysts"
          content="The Global Catalysts is a training and consultancy firm registered in 2011."
          link="About"
        />
        <AboutUs />
    </>
  )
}

export default About
