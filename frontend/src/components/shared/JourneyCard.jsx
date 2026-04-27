import React, { useEffect, useState, useRef } from 'react'
import Journey1 from '../../assets/Journey-1.png';
import Journey2 from '../../assets/Journey-2.png';
import Journey3 from '../../assets/Journey-3.png';
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
    const images = [
        { src:Journey1, alt:"Mountain Landscapes" },
        { src:Journey2, alt:"Thailand" },
        { src:Journey3, alt:"Paro, BHUTAN" },
        { src:Journey4, alt:"SRI LANKA" },
        { src:Journey5, alt:"SRI LANKA" },
        { src:Journey6, alt:"SRI LANKA" },
        { src:Journey7, alt:"SINGAPORE" },
        { src:Journey8, alt:"THAILAND" },
        { src:Journey9, alt:"ELLA, SRI LANKA" },
        { src:Journey10, alt:"ELLA Tra, MAHARASHTRA" },
        { src:Journey11, alt:"Coral, Island" },
        { src:Journey12, alt:"Desart Safari, Dubai" },
        { src:Journey13, alt:"RBT, Pattaya" },
        { src:Journey14, alt:"Paro, Bhutan" }
    ];

    const doubled = [...images, ...images];

    const trackRef = useRef(null);


    // Pause on hover
    const pause = () => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
    };
    const play = () => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "running";
    };



  return (
    <section className='py-6'>
        <div>
            <div className='flex flex-col items-center my-8 gap-2'>
                <h1 className='text-2xl font-bold tracking-wide'>JOURNEY IN FRAMES</h1>
                <h5 className='text-sm text-gray-500'>Pictures Perfect Moments</h5>
            </div>


            <div className='w-[70%] mx-auto'>
                {/* Scrolling strip */}
                <div className="relative w-full overflow-hidden"
                    onMouseEnter={pause}
                    onMouseLeave={play} >
            
                {/* Scrolling track */}
                <div ref={trackRef} className="flex gap-4 px-4"
                    style={{ width: "max-content", animation: "scroll-left 30s linear infinite", }} >


                    {
                        doubled.map((image, i) => (
                            <div key={i} className="relative flex-shrink-0 w-60 h-96 overflow-hidden shadow-md">
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                            </div>
                        ))
                    }
                    
                </div>
                </div>

            </div>
                <style>{` @keyframes scroll-left {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); } }
                `}</style>
        </div>
    </section>
  )
}

export default JourneyCard