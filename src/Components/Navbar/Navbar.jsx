import React from 'react';
import Buttons from './../Buttons/Buttons';
import logo from "../../assets/images/Logo Option.png"; // or logo-option.png
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navbar flex justify-between w-full h-[100px] ">
      {/* Logo */}
      <a className="size-25 pl-5">
        <img src={logo} alt="Logo" className="w-full h-full object-cover"/>
      </a>

      {/* Menu */}
      <div className="">
        <ul className="menu menu-horizontal  gap-17.25">
          <li className='links'><Link to="/home">Home</Link></li>
          <li className='links'><Link to="/unit">Unit</Link></li>
          <li className='links'><Link to="/zones">Zones</Link></li>
          <li className='links'><Link to="/developers">Developers</Link></li>
          <li className='links'><Link to="/contactus">ContactUs</Link></li>
        </ul>
      </div>

      {/* Buttons */}
      <Buttons text={'Register'} />
    </div>
  );
}