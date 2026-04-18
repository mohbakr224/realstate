import React from 'react';
import Buttons from '../Buttons/Buttons';

export default function Hero({ title, text, image, have_Button = true }) {
  return (
    <div className='relative w-full h-[calc(100vh-86px)]'>

      {/* Background Image */}
      <img
        src={image}
        alt="hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-[#EEEEEE] px-4 text-center gap-5">

        {/* Title */}
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-4xl'>
          {title}
        </h1>

        {/* Text */}
        <p className='text-sm sm:text-base md:text-lg leading-7 max-w-3xl opacity-90 text-center'>
          {text}
        </p>

        {/* Button */}
        {have_Button && (
          <Buttons
            text='Register'
            className='w-[200px] sm:w-[258px] h-[45px] mt-4'
          />
        )}

      </div>
    </div>
  );
}