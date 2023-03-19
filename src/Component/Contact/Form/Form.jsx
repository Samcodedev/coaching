import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
      <div className="sub-form">
        <form action="">
            <h3>Send Message</h3>
            <input type="text" name="text" placeholder='Full name*' />
            <input type="email" name="email" placeholder='Email address*' />
            <select name="" id="">
                <option value="">Contact us</option>
                <option value="">Book a section</option>
                <option value="">Get a coach</option>
                <option value="">Book a cooperate training</option>
                <option value="">Book a life Mentoring Program</option>
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
