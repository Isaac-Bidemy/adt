import React from 'react'
import { Link } from 'react-router-dom';
import img from "../assets/images/dol.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
export default function DealsOfMonths() {
    return (
        <div className='flex text-left justify-around'>
            <div className='mt-auto mb-8 '>
                <h2 className='text-xl font-md font-bold'>MAKE SURE YOU'RE SMILLING</h2>
                <p className='my-4'>
                Dear Adetutu,
We're so grateful for your visit to our platform! It truly means a lot to us.
On a more personal note, I want you to know that you're loved, appreciated, and cherished. Your presence brings joy and warmth to those around you.
Thank you again for stopping by, and I hope you have an amazing day!
With love and appreciation
                </p>
                <div className='flex mb-4 space-x-3'>
                    <div className='shadow-md p-2 text-center '>
                        <h2 className='font-bold'>5Q</h2>
                        <h4 className='text-xs font-semibold'>I</h4>
                    </div>
                    <div className='shadow-md p-2 text-center'>
                        <h2 className='font-bold'>5Q</h2>
                        <h4 className='text-xs font-semibold'>LOVE</h4>
                    </div>
                    <div className='shadow-md p-2 text-center '>
                        <h2 className='font-bold'>=</h2>
                        <h4 className='text-xs font-semibold'>YOU</h4>
                    </div>
                    <div className='shadow-md p-2 text-center '>
                        <h2 className='font-bold'>10Q</h2>
                        <h4 className='text-xs font-semibold'>ADETUTU</h4>
                    </div>
                    
                </div>
                <div className='flex justify-left'>
                    <Link className='flex item-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-lg' to="/OurStory">
                        OUR LOVE STORY  <span> <FaArrowRightLong /></span>
                    </Link>
                </div>
            </div>

            <div className='border-8'>

                <img src={img} alt="Photo" width="full " />





            </div>
        </div>
    )
}

