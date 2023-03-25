import React, { useRef } from 'react'
import './Form.css'
import emailjs from 'emailjs-com'

const Form = (props) => {

  const form = useRef()

  const sendEmail = (e) =>{
    e.preventDefault();  

    emailjs.sendForm('service_k5eit5c', 'template_rn22d5j', form.current, 'Kc0dD2RzmpV1gMPY1')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    form.current.reset();
  };

  console.log(props.data)
  return (
    <div className='form'>
      <div className="sub-form">
        <form ref={form} onSubmit={sendEmail}>
            <h3>Send Message</h3>
            <input type="text" name="name" placeholder='Full name*' />
            <input type="email" name="mail" placeholder='Email address*' />
            <select id="" name="title">
                {
                    props.data?
                    <option value={props.data.id.one}>{props.data.id.one}</option>
                    :
                    <option value="Select a contact option">Select a contact option</option>
                }
                
                <option value="Contact us">Contact us</option>
                <option value="Book a section">Book a section</option>
                <option value="Get a coach">Get a coach</option>
                <option value="Book a cooperate training">Book a cooperate training</option>
                <option value="Book a life mentoring program">Book a life mentoring program</option>
            </select>
            <input type="text" name="subject" placeholder="Subject*" />
            <input type="text" name="message" placeholder='Message goes here*' />
            <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Form
