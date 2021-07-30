import banner from "../assets/hero.jpg";
import React from "react";

const Hero = ()=>{
  return(
    <header className='min-h-screen'>
      <img 
      className='w-full object-center background-cover'
       src={banner} 
       alt='banner_image'/>
    </header>
  );
}

export default Hero;