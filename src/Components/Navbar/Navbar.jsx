import React, { useState } from 'react';
import Buttons from './../Buttons/Buttons';
import logo from "../../assets/images/Logo Option.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center w-full h-[80px] px-4 md:px-8 py-3 relative">
      
      {/* Logo */}
      <a className="size-25 flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[70px] sm:w-[90px] md:w-full h-full object-cover"
        />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal flex gap-8 lg:gap-12 text-base">
          <li className='links'><Link to="/home">Home</Link></li>
          <li className='links'><Link to="/unit">Unit</Link></li>
          <li className='links'><Link to="/zones">Zones</Link></li>
          <li className='links'><Link to="/developers">Developers</Link></li>
          <li className='links'><Link to="/contactus">ContactUs</Link></li>
        </ul>
      </div>

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex">
        <Buttons text={'Register'} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl font-bold"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center gap-5 py-5 text-base">
            <li onClick={() => setOpen(false)}><Link to="/home">Home</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/unit">Unit</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/zones">Zones</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/developers">Developers</Link></li>
            <li onClick={() => setOpen(false)}><Link to="/contactus">ContactUs</Link></li>

            <div className="mt-2">
              <Buttons text={'Register'} />
            </div>
          </ul>
        </div>
      )}

    </div>
  );
}