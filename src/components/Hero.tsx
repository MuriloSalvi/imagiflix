import banner from "../assets/hero.jpg";
import React from "react";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({title = 'Avengeiros', grade = 8 })=>{
  
const getBorderColor = ()=>{
  if (grade === 10) {
    return 'border-green-400 py-3'
  } else if (grade >= 7){
    return 'border-green-400 py-2'
  } else if (grade >= 4 && grade <7 ){
    return 'border-yellow-400 py-2'
  } else {
    return 'border-red-400 py-2'
  }
  
}

  return(
    <header className='box-border relative min-h-screen -mb-64' >
      <img 
      className='object-cover h-auto w-full'
       src={banner} 
       alt='banner_image'/>
       <div className='absolute bottom-0 w-full h-full  bg-gradient-to-b from-transparent to-black'>

       </div>
       <article className='absolute bottom-32 mb-64 ml-28'>
         <p className='text-3xl'>Assista agora:</p>
         <h2 className='text-6xl font-extrabold'>{title}</h2>
         <p className='text-bas'>Nota <span className={`inline-block px-4 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}>{grade}</span></p>
         
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