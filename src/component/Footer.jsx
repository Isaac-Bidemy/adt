import React from "react";
import { PiPhoneCallLight, PiEnvelopeSimpleLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="bg-black mt-5 px-6 sm:px-9 py-10">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white pb-10">
        
        {/* Brand & Contact */}
        <div>
          <div className="flex items-center">
            <img src="src/assets/images/4.jpg" width={50} alt="Logo" />
            <h1 className="font-semibold pl-3 text-2xl">Mastermind</h1>
          </div>
          <ul className="mt-5 space-y-3">
            <li className="flex items-center gap-2">
              <PiPhoneCallLight />
              <a href="tel:+2348132779802">(+234) 813-2779-802</a>
            </li>
            <li className="flex items-center gap-2">
              <PiEnvelopeSimpleLight />
              <a href="mailto:isaacbidemi25@gmail.com">isaacbidemi25@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <CiLocationOn />
              <a href="#">84, Alhaji Amoo Street, Ojota, Lagos</a>
            </li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h1 className="font-bold">Information</h1>
          <ul className="mt-2 space-y-2">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">5Q+5Q=10Q</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h1 className="font-bold">Services</h1>
          <ul className="mt-2 space-y-2">
            <li><a href="https://portfolio-website-chi-teal.vercel.app/">About Us</a></li>
            <li><a href="https://portfolio-website-chi-teal.vercel.app/">CV</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div>
          <h1 className="font-bold">Adetutu, thanks for visiting our platform!</h1>
          <p className="text-xs mt-4">Stay updated with our latest updates and stories.</p>

          <div className="flex items-center mt-4 border border-white rounded-lg overflow-hidden">
            <input
              className="text-black flex-1 px-3 py-2 outline-none"
              type="email"
              placeholder="Your Email"
            />
            <button className="bg-white text-black px-4 py-2">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-6 text-white text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="src/assets/images/10.jpg" width={100} alt="Footer Logo" />
          <p>&copy; 2025 All Rights Reserved By Mastermind's Studios</p>
          <div className="flex gap-4 text-xl">
            <RiFacebookFill />
            <FaInstagram />
            <TiSocialTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}