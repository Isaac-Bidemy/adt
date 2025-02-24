import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/images/couples.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function DealsOfMonths() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-8 gap-6'>
            
            {/* Text Section */}
            <div className='lg:w-1/2 text-center lg:text-left'>
                <h2 className='text-xl font-bold'>MAKE SURE YOU'RE SMILING</h2>
                <p className='my-4'>
                    Dear Adetutu,  
                    We're so grateful for your visit to our platform! It truly means a lot to us.  
                    On a more personal note, I want you to know that you're loved, appreciated, and cherished.  
                    Your presence brings joy and warmth to those around you.  
                    Thank you again for stopping by, and I hope you have an amazing day!  
                    With love and appreciation.
                </p>

                {/* Name Blocks */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-4'>
                    {["KIKELOMO", "ODUNAYO", "OLAMIDE", "GRACE"].map((name, index) => (
                        <div key={index} className='shadow-md p-2 text-center w-24'>
                            <h2 className='font-bold'>{name}</h2>
                            <h4 className='text-xs font-semibold'>
                                {index === 0 ? "I" : index === 1 ? "LOVE" : index === 2 ? "YOU" : "ADETUTU"}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className='flex justify-center lg:justify-start'>
                    <Link className='flex items-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-300' to="/Login">
                        OUR LOVE STORY <FaArrowRightLong />
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div className='w-full lg:w-1/2'>
                <img src={img} alt="Photo" className="w-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
}