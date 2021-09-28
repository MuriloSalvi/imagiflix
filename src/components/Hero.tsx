import React from "react";
import CONST from '../data/constants'

import placeholder from "../assets/hero.jpg";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Score from "./Score";


const Hero = ({backdrop_path = false, title = 'Avengeiros', vote_average = 10})=>{

  const { IMAGEURL } = CONST


  return(
    <header className='box-border relative min-h-screen -mb-64' >
      <img 
      className='object-cover h-auto w-full'
       src = {backdrop_path ? `${IMAGEURL}original/${backdrop_path}` : placeholder} 
       alt='banner_image'/>
       <div className='absolute bottom-0 w-full h-full  bg-gradient-to-b from-transparent to-black'>

       </div>
       <article className='absolute bottom-32 mb-64 ml-28'>
         <p className='text-3xl'>Assista agora:</p>
         <h2 className='text-6xl font-extrabold'>{title}</h2>
         <p className='text-bas p-4'> Nota
         <Score value = {vote_average}/>
         </p>
         <button className='text-base mr-4 mt-8 py-2 px-8 roundede bg-black bg-opacity-50 transition-all duration-500
            ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
           <FontAwesomeIcon className='mr-2' icon={faPlay}/>  Assistir
           </button>
         <button className='text-base mr-4 mt-8 py-2 px-8 roundede bg-black bg-opacity-50 transition-all duration-500
            ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
         <FontAwesomeIcon className='mr-2' icon={faPlus}/> Minha Lista
           </button>
         
       </article>
    </header>
  );
}

export default Hero;