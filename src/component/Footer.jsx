import React from "react";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="bg-[black] mt-5 px-9" >
      <div className="flex justify-center pt-10 gap-20 pb-20 " >
        <div className="">
          <div className="flex items-center text-white">
            <img src="src\assets\images\4.jpg" width={50}></img>
            <h1 className="font-semibold pl-3 text-2xl">Mastermind</h1>
          </div>

          <div className="text-white">
            <ul>
              <li className="flex items-center gap-2 mt-5">
                <PiPhoneCallLight />
                <a href="">(+234) 813-2779-802</a>
              </li>
            </ul>

            <ul>
              <li className="flex items-center gap-2 mt-5">
                <PiEnvelopeSimpleLight />
                <a href="mailto:isaacbidemi25@gmail.com">isaacbidemi25@gmail.com</a>
              </li>
            </ul>

            <ul>
              <li className="flex items-center gap-2 mt-5">
                <CiLocationOn />
                <a href="">84, Alhaji Amoo Street, Ojota, Lagos</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white">
          <h1 className="font-bold">Information</h1>

          <ul>
            <li className="mt-2">
              <a href="">My Account</a>
            </li>
            <li className="mt-2">
              <a href="">Login</a>
            </li>
            <li className="mt-2">
              <a href="">5Q+5Q=10Q</a>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <h1 className="font-bold">Services</h1>

          <ul>
            <li className="mt-2">
              <a href="https://portfolio-website-chi-teal.vercel.app/">About Us</a>
            </li>
            <li className="mt-2">
              <a href="https://portfolio-website-chi-teal.vercel.app/">CV</a>
            </li>
            <li className="mt-2">
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <h1 className="font-bold">Adetutu, thanks for visiting our platform!</h1>

          <p className="w-64 text-xs mt-4">
            
          </p>

          <div class="block flex items-center justify-between border border-white-600 mt-6 text-sm font-medium p-2 text-green rounded-lg">
            <div>
              <label for="input-group-1"></label>
              <input
                className="text-black rounded-lg border border-white-600"
                type="email"
                placeholder="Your Email"
              />
            </div>

            <div>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-gray-900 ml-64 mr-64 pb-5">
        <div className="text-white flex gap-64 items-center justify-center pt-5">
          <div>
            <img src="src\assets\images\10.jpg" width={100}></img>
          </div>

          <div>
            <p>&copy; 2025 All Rights Reserved By Masterminds's Studios</p>
          </div>

          <div className="flex gap-3">
            <RiFacebookFill />
            <FaInstagram />
            <TiSocialTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}