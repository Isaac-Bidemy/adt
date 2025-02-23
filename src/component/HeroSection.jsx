import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import img from '../assets/images/tu3.jpg';

export default function HeroSection() {
  return (
    <div className='flex text-left justify-around bg-[#f3f3f3]'>
      <div className='mt-auto mb-auto '>
        <h2 className='text-xl font-md '>Beautiful Classic </h2>
        <h1 className='text-5xl font-bold mt-4'>Woman of Faith</h1>
        <h3 className='text-xl font-md my-3'>He makes all things beautiful in his time
          
        </h3>
        <div className='flex justify-left'>
          <Link className='flex item-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-lg' to="/OurStory">
            GRACE<span> <FaArrowRightLong /></span></Link>
  
        </div>
        
      </div>

      <div className='border-y-4 rounded-lg'>

        <img src={img} alt="Photo" width="300px"  />





      </div>
    </div>
  )
}
