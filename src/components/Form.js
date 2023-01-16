import React from 'react'

export const Form = ({ 
  firstName, setFirstName,
  lastName, setLastName,
  address, setAddress,
  number, setNumber,
  email, setEmail,
  handleChange
}) => {

  return (
    <div className='form-container'>
      <div className='personal-info-form'>
        <form className='personal-info' action="submit">
          <h2>Personal Information</h2>
          <input 
            type="text"
            placeholder='First name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='Last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input 
            type="text"
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input 
            type="tel"
            placeholder='Number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="file" 
            id='profile-pic'
            accept='image/*'
            className='hidden'
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
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
