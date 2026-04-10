import React from 'react'
import hero from '../../assets/images/image 1.png'
import Hero from './../../Components/Hero/Hero';
import Buttons from '../../Components/Buttons/Buttons';
export default function Home() {
  return (
    <div><Hero title="Redefining the Horizon of Modern Luxury Living" 
    text={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"} 
    image={hero}/>
    
    </div>
  )
}
