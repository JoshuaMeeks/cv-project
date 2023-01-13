import React from 'react'

export const Form = () => {

  return (
    <div className='form-container'>
      <div className='personal-info-form'>
        <form className='personal-info' action="submit">
          <h2>Personal Information</h2>
          <input 
            type="text"
            placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
          <input type="text" placeholder='Address'/>
          <input type="tel" placeholder='Number'/>
          <input type="email" placeholder='Email'/>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className='eductation-form'>
        <form className='education'>
          <h2>Education</h2>
          <input type="text" placeholder='School'/>
          <input type="text" placeholder='Degree'/>
          <input type="text" placeholder='From'/>
          <input type="text" placeholder='To'/>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className='work-experience-form'>
        <form className='work-experience'>
          <h2>Work Experience</h2>
          <input type="text" placeholder='Company'/>
          <input type="text" placeholder='Position'/>
          <input type="text" placeholder='From'/>
          <input type="text" placeholder='To'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
