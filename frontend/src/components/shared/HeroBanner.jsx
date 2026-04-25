import React from 'react'
import HeroImage from '../../assets/HeroSection.png';

function HeroBanner() {
  return (
    <div className=' w-full'>
        <div>
            <img src={HeroImage} alt='Hero Banner' className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default HeroBanner