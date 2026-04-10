import React from 'react'
import Buttons from '../Buttons/Buttons'
export default function Hero({title,text,image}) {
    return (
        <div className='relative'>
            <div className="w-full h-[calc(100vh-86px)]">
                <img
                    src={image}
                    alt="hero"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#EEEEEE] flex flex-col justify-center items-center gap-[25px]">
                <h1 className=' text-[48px] font-bold leading-[120%]  mx-auto text-center w-140'>{title}</h1>
                <p className='font-mono w-[988px] h-[72px] top-[497px] left-[226px] opacity-100" text-[20px] leading-7 text-center'>{text}</p>
                <Buttons text='Register' className=' w-[258px] h-[47px] mt-[20px]'/>
            </div>      
        </div>
    )
}
