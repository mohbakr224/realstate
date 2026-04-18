import React from 'react'
import Buttons from '../Buttons/Buttons'
import Cards_button from './../Buttons/Cards_button';

export default function Cards({ image, image2 = null, text = null, button_text }) {
  return (
    <div className="w-[442px] h-[426px] card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img className="w-[414px] h-[217px] rounded-2xl"
          src={image}
          className="rounded-xl" />
      </figure>
      <div className="card-body text-start">
        <img 
        className='w-[160px] h-[50px]'
          src={image2} />
        <p>{text}</p>
        <div className="card-actions">
          <Cards_button text='View Details'/>
        </div>
      </div>
    </div>
  )
}
