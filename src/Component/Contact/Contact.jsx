import React from 'react'
import AboutHeader from '../About/AboutHeader/AboutHeader'
import Form from './Form/Form'

const Contact = () => {
  return (
    <>
      <AboutHeader 
        title="Contact Us"
        content="Get in touch with us by filling the form bellow."
        link="contact"
      />
      <Form />
    </>
  )
}

export default Contact
