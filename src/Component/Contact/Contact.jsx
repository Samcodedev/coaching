import React from 'react'
import AboutHeader from '../About/AboutHeader/AboutHeader'
import Form from './Form/Form'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  // let mes = location.state.id
  // console.log(location)
  return (
    <>
      <AboutHeader 
        title="Contact Us"
        content="Get in touch with us by filling the form bellow."
        link="contact"
      />
      <Form 
        data={location.state}
      />
    </>
  )
}

export default Contact
