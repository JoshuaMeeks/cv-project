import React from 'react'

export const CVProfile = () => {
  return (
    <div className='cv-profile'>
      <div className='personal-info-profile'>
        <div className='personal-profile'>
          <h3>John Doe</h3>
          <p>123 Palmtree Lane, Miami, FL</p>
          <p>555-835-0932</p>
          <p>johndoeknows@mockmail.com</p>
        </div>
        <div className='profile-picture'>
          <img src="https://cityofwilliamsport.org/wp-content/uploads/2021/03/malePlaceholder.jpg" alt='profile' />
        </div>
      </div>
      <div className='education-profile'>
        <h2>Education</h2>
        <div className='profile-card'>
          <h3>Massachusetts Institute of Technology</h3>
          <p>Computer Science</p>
          <p>2009-2013</p>
        </div>
      </div>
      <div className='work-experience-profile'>
        <h2>Work Experience</h2>
        <div className='profile-card'>
          <h3>Microsoft</h3>
          <p>Junior Software Engineer</p>
          <p>2014-2016</p>

          <h3>Uber</h3>
          <p>Software Engineer II</p>
          <p>2016-2019</p>
        </div>
      </div>
    </div>
  )
}
