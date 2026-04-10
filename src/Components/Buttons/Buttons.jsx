import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons({ text, className }) {
  return (
    <button
      className={`${className} mr-8 bg-linear-to-r from-[#8E1616] to-[#C34B4B] w-[110px] h-[35px] rounded-[5px] text-[#EEEEEE]`}
    >
      <Link to="/login">{text}</Link>
    </button>
  );
}