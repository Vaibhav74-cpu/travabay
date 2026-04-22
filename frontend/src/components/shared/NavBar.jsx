import React from 'react'
import logo from '../../assets/Travabay_logo.png'

function NavBar() {
  return (
    <header>
      <div className='flex items-center justify-between bg-[#212529]'>
        <div className='logo w-32 m-2 mx-8'>
          <img src={logo} alt='Travabay Logo'/>
        </div>

        <input type='text' placeholder='Search "Eiffel Tower"' className='rounded-full w-lg p-2 text-sm' />

        <div className='flex font-bold text-sm'>
          <button className='px-4 py-1 m-3 border text-sx border-yellow-500 rounded-full text-yellow-500'>
            Invite-only club
          </button>
          <button className='px-4 py-2 m-3 rounded-full bg-[#0096c7] text-white' >
            +91 95796 59074
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar