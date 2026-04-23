import React from 'react'
import Journey2 from '../../assets/Journey-2.png';
import Journey3 from '../../assets/Journey-3.png';
import Journey1 from '../../assets/Journey-1.png';
import Journey4 from '../../assets/Journey-4.png';
import Journey5 from '../../assets/Journey-5.png';
import Journey6 from '../../assets/Journey-6.png';
import Journey7 from '../../assets/Journey-7.png';
import Journey8 from '../../assets/Journey-8.png';
import Journey9 from '../../assets/Journey-9.png';
import Journey10 from '../../assets/Journey-10.png';
import Journey11 from '../../assets/Journey-11.png';
import Journey12 from '../../assets/Journey-12.png';
import Journey13 from '../../assets/Journey-13.png';
import Journey14 from '../../assets/Journey-14.png';


function JourneyCard() {
  return (
    <section className='py-6'>
        <div>
            <div className='flex flex-col items-center my-8 gap-2'>
                <h1 className='text-2xl font-bold tracking-wide'>JOURNEY IN FRAMES</h1>
                <h5 className='text-sm text-gray-500'>Pictures Perfect Moments</h5>
            </div>

            <div>
                <div className='flex'>
                    <img src={Journey1} alt='Journey-Picture 1'/>
                    <img src={Journey2} alt='Journey-Picture 2'/>
                    <img src={Journey3} alt='Journey-Picture 3'/>
                    <img src={Journey4} alt='Journey-Picture 4'/>
                    <img src={Journey5} alt='Journey-Picture 5'/>
                    <img src={Journey6} alt='Journey-Picture 6'/>
                    <img src={Journey7} alt='Journey-Picture 7'/>
                    <img src={Journey8} alt='Journey-Picture 8'/>
                    <img src={Journey9} alt='Journey-Picture 9'/>
                    <img src={Journey10} alt='Journey-Picture 10'/>
                    <img src={Journey11} alt='Journey-Picture 11'/>
                    <img src={Journey12} alt='Journey-Picture 12'/>
                    <img src={Journey13} alt='Journey-Picture 13'/>
                    <img src={Journey14} alt='Journey-Picture 14'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JourneyCard