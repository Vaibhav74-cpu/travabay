import React, { useState } from 'react'
import { PiCaretDown } from "react-icons/pi";

function TopNavbar() {
    const[toggle, setToggle] = useState(false);

    const showDestinations = () => {
        console.log("Arrow has been clicked");
        setToggle(true);
    }

  return (
    <>
        <section className='w-full bg-[#08243a] text-white'>
            <div className='flex items-center justify-center gap-2 text-sm'>
                <div className='p-4 hover:bg-gray-400'>
                    <button>India <PiCaretDown onClick={showDestinations} className='inline' /></button>
                </div>
                <div className='p-4 hover:bg-gray-400'>
                    <button>World <PiCaretDown className='inline' /></button>
                </div>
                <div className='p-4 hover:bg-gray-400'>
                    <button>Corporate Travel</button>
                </div>
                <div className='p-4 hover:bg-gray-400'>
                    <button>Forex <PiCaretDown className='inline' /></button>
                </div>
                <div className='p-4 hover:bg-gray-400'>
                    <button>Contact Us</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default TopNavbar