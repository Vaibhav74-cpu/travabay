import React, {useState} from 'react'

function TopNavbar() {

  return (
    <section className='w-full bg-[#08243a] text-white text-sm'>
        <div className='flex items-center justify-center gap-12 m-3 p-1'>
            <div>
                <button>India</button>
            </div>
            <div>
                <button>World</button>
            </div>
            <div>
                <button>Corporate Travel</button>
            </div>
            <div>
                <button>Forex</button>
            </div>
            <div>
                <button>Contact Us</button>
            </div>
        </div>
    </section>
  )
}

export default TopNavbar