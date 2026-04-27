import React from 'react';
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Thailand from '../../assets/Thailand.jpg';
import HongKong from '../../assets/HongKong.jpg';
import SriLanka from '../../assets/SriLanka.jpg';
import Japan from '../../assets/Japan.jpeg';
import Pench from '../../assets/Pench.jpg';

  const carousal = [
    {
      image:Thailand, alt:'Thailand Image',
      region:'South east Asia',
      country:'Thailand Full Moon Party Experience',
      locations:'Phuket · Krabi · Koh Samui · Koh Phangan',
      days:'7 Days | Every Month | from ₹55,000',
      instructions:'Joining Leaving price from ₹55,000', 
      flight:'Book your own flight tickets and join the tour directly at the first destination and leave from the last destination.',
      button:'Book now',
      terms:'T&C Apply'
    },
    {
      image:HongKong, alt:'Hong Kong Image',
      region:'South east Asia',
      country:'Hong Kong Macao Shenzhen',
      locations:'Hong Kong · Shenzhen · Macao',
      days:'7 Days | Every Month | from ₹1,50,000',
      instructions:'Joining Leaving price from ₹1,46,000',
      flight:'Book your own flight tickets and join the tour directly at the first destination and leave from the last destination.',
      button:'Book now',
      terms:'T&C Apply'
    },
    {
      image:SriLanka, alt:'Sri Lanka Image',
      region:'SRI LANKA',
      country:'Whale Watching Srilanka',
      locations:'Mirrisa · Ella · Bentota · Yala · Kandy · Nuwar Eliya · Colombo ·',
      days:'8 Days | Evrey Month | from ₹45,000',
      instructions:'Be the part of community',
      button:'Book now',
      terms:'T&C Apply'
    },
    {
      image:Japan, alt:"Japan Image",
      region:'South East Asia',
      country:'Japan Cherry Blossom',
      locations:'Tokyo → Hamamatsu → Nagoya → Kobe → Haneda',
      days:'11 Days | 10 Nights',
      button:'Book now',
      terms:'T&C Apply'
    },
    {
      image:Pench, alt:"Pench Image",
      region:'Central India',
      country:'Pench Sundowner Pool Party',
      days:'23th May',
      instructions:'Enjoy the sundowner pool party in middle of jungle',
      invite:'60 Invite Only people',
      button:'Book now',
      terms:'T&C Apply'
    }
  ]


    // Custom arrow components so arrows match your design
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md'
    >
      ‹
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md'
    >
      ›
    </button>
  );

function PackagesCarousal() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      appendDots: dots => (
        <div style={{ bottom: '16px' }}>
          <ul className='flex justify-center gap-2'>{dots}</ul>
        </div>
      ),
    };


  return (
    <div className='w-full max-w-7xl m-auto'>
      <Slider {...settings}>
        {carousal.map((item, index) => (
          <div key={index} className='relative'>
            <div className='relative h-[450px] rounded-xl overflow-hidden'>
              <img
                src={item.image}
                alt={item.alt}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-black/100 via-black/40 to-transparent flex items-center'>
                <div className='pl-20 text-white'>
                  <p className='text-sm mb-2'>{item.region}</p>
                  <h2 className='text-3xl font-bold text-yellow-400 mb-4'>{item.country}</h2>
                  {item.locations && <p className='text-sm mb-3'>{item.locations}</p>}
                  <p className='text-sm mb-2'>{item.days}</p>
                  {item.instructions && <p className='text-yellow-400 text-sm mb-2'>{item.instructions}</p>}
                  {item.flight && <p className='text-xs mb-4'>{item.flight}</p>}
                  {item.invite && <p className='text-xs mb-4'>{item.invite}</p>}
                  <button className='bg-yellow-400 text-black px-6 py-2 rounded mb-2 hover:bg-yellow-300 transition-colors'>
                    {item.button}
                  </button>
                  <p className='text-xs mt-1 text-gray-400'>*{item.terms}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default PackagesCarousal
