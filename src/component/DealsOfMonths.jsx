import React from 'react'
import { Link } from 'react-router-dom';
import img from "../assets/images/dol.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
export default function DealsOfMonths() {
    return (
        <div className='flex text-left justify-around'>
            <div className='mt-auto mb-auto '>
                <h2 className='text-xl font-md font-bold'>Deals Of The Months</h2>
                <p className='my-4'>
                    Lorem ipsum do elit. Delectus eos, qui excep
                    turi illum aliquid quos quis possimus! <br /> Distinctio, corporis,
                    similique dignissimos suscipit placeat aliquid, ducimus illu
                    m officia ipsum quam molestiae.
                </p>
                <div className='flex mb-4 space-x-3'>
                    <div className='shadow-md p-2 text-center '>
                        <h2 className='font-bold'>120</h2>
                        <h4 className='text-xs font-semibold'>Days</h4>
                    </div>
                    <div className='shadow-md p-2 text-center'>
                        <h2 className='font-bold'>18</h2>
                        <h4 className='text-xs font-semibold'>Hour</h4>
                    </div>
                    <div className='shadow-md p-2 text-center '>
                        <h2 className='font-bold'>15</h2>
                        <h4 className='text-xs font-semibold'>Mins</h4>
                    </div>
                    <div className='shadow-md p-2 text-center '>
                        <h2 className='font-bold'>10</h2>
                        <h4 className='text-xs font-semibold'>Secs</h4>
                    </div>
                    
                    
                </div>
                <div className='flex justify-left'>
                    <Link className='flex item-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-lg' to="/Singup">
                        SIGN UP  <span> <FaArrowRightLong /></span>
                    </Link>
                </div>
            </div>

            <div>

                <img src={img} alt="Photo" width="300px" />





            </div>
        </div>
    )
}

