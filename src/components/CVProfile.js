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
      </div>
      <div className='work-experience-profile'>
        <h2>Work Experience</h2>
      </div>
    </div>
  )
}
