import React from 'react'

export const Form = () => {
  return (
    <div className='form'>
      <form className='personal-info' action="submit">
        <h1>Personal Information</h1>
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="text" placeholder='Title'/>
        <input type="text" placeholder='Address'/>
        <input type="tel" placeholder='Number'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Description'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
