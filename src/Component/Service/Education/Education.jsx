import React from 'react'
import Educard from './Educard/Educard'
import './Education.css'

const Education = () => {
    const data = [
        {
            title: "Class Verve",
            content: "This is a coaching concept designed to furnish students/pupils with life skills, 21st century skills, leadership skills, soft skills and socio-economic skills to prepare them for colleges and the modern employment market."
        },
        {
            title: "Global Cabe",
            content: "This is an acronym for Global Children and Adolescents Behavioural Education. It is a school-based cognitive behavioural therapy/management skills, designed to help students develop strategies to solve problems, regulate emotions, develop habits of mind, and establish helpful patterns of thought and behaviour."
        },
        {
            title: "The Dynamic Educator",
            content: "According to American Institute for research, 2007, Teachers who receive at least 49 hours of professional development per year could be expected to boost their students’ achievement by about 21 percentile points. The Dynamic Educator is a solution designed to provide continuous professional development trainings, workshop and coaching for teachers. We provide trainings on best practices in the 21stcentury education."
        },
        {
            title: "Moves",
            content: "this is an acronym for Making Optimum, Valuable and Excellent Strides. It is a programme designed to provide necessary support for students transiting from one level of education to another, especially for students transiting into the universities and colleges. We provide the required soft, social, study, self-leadership, and organisational skills in line with student’s personality, goals and interests. We also prepare them to participate meaningfully in the university’s community life."
        },
        {
            title: "School Lift",
            content: "School Lift is an all-embedded total school advisory and consultancy solution designed to meet the needs of various stakeholders including learners, educators, managers, owners/shareholders, parents/prospects, and members of the school environment."
        }
    ]

    const cards = data.map((item)=>{
        return(
            <Educard 
                title={item.title}
                content={item.content}
            />
        )
    })
  return (
    <div className='education'>
      <div className="sub-education">
        <div className="education-head">
            <h4>Educational Services</h4>
            <p>With over two decades of experience in the educational sector, we have developed various solutions and programmes to cater for the needs of schools and colleges. Some of our solutions include.</p>
        </div>
        <div className="education-cards">
            {cards}
        </div>
      </div>
    </div>
  )
}

export default Education
