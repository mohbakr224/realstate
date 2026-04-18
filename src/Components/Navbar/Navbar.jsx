import React from 'react';
import Buttons from './../Buttons/Buttons';
import logo from "../../assets/images/Logo Option.png"; // or logo-option.png
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar flex justify-between items-center flex-wrap w-full h-[100px] px-2 sm:px-4 md:px-8">
      
      {/* Logo */}
      <a className="size-25 pl-2 sm:pl-5 flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[60px] sm:w-[80px] md:w-full h-full object-cover"
        />
      </a>

      {/* Menu */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-10 lg:gap-17.25 text-sm sm:text-base">
          <li className='links'><Link to="/home">Home</Link></li>
          <li className='links'><Link to="/unit">Unit</Link></li>
          <li className='links'><Link to="/zones">Zones</Link></li>
          <li className='links'><Link to="/developers">Developers</Link></li>
          <li className='links'><Link to="/contactus">ContactUs</Link></li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-2 sm:mt-0">
        <Buttons text={'Register'} />
      </div>

    </div>
  );
}