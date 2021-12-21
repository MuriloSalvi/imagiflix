import React from "react";
import logo from '../assets/imagiflix.png'
import './LoadingModal.css'
const LoadingModal = ()=>{
  return(
    <div className='absolute w-full h-full bg-black'>
        <div className='flex flex-col items-center'>
        <img src={logo} alt='logo' className='pt-48 pb-8'/>
        <div className="loadingio-spinner-eclipse-evs2fw1ug3s"><div className="ldio-f0cjc0305xj">
<div></div>
</div></div>
        </div>

       

    </div>
  )
}

export default LoadingModal
