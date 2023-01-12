import React from 'react'
import { FaUserTie } from 'react-icons/fa'

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <FaUserTie />
        <span className='logo-lettering'>CV CREATOR</span>
      </div>
    </header>
  )
}

