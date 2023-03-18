import React from 'react'
import AboutHeader from '../About/AboutHeader/AboutHeader'
import Education from './Education/Education'
import Package from './Package/Package'
import ServiceText from './ServiceText/ServiceText'

const Service = () => {
  return (
    <>
      <AboutHeader 
        title="Our Service"
        content="We deploy a wide range of solutions to clients’ needs."
        link="Service"
      />
      <ServiceText />
      <Education />
      <Package />
    </>
  )
}

export default Service
