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
            <div className='flex items-center justify-center text-sm font-bold'>
                <div className='p-4 hover:bg-gray-700'>
                    <button>India <PiCaretDown onClick={showDestinations} className='inline hover:rotate-180' /></button>
                </div>
                <div className='p-4 hover:bg-gray-700 border-s border-gray-700'>
                    <button>World <PiCaretDown onClick={showDestinations} className='inline hover:rotate-180' /></button>
                </div>
                <div className='p-4 hover:bg-gray-700 border-s border-gray-700'>
                    <button>Corporate Travel</button>
                </div>
                <div className='p-4 hover:bg-gray-700 border-s border-gray-700'>
                    <button>Forex <PiCaretDown onClick={showDestinations} className='inline hover:rotate-180' /></button>
                </div>
                <div className='p-4 hover:bg-gray-700 border-s border-gray-700'>
                    <button>Contact Us</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default TopNavbar