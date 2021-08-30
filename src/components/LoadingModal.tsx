import React from 'react'
import logo from '../assets/imagiflix.png'
import spinner from '../assets/spinner.svg'

const LoadingModal = ()=>{
    return(
        
        <div className='flex items-center flex-col text-center w-screen h-screen bg-black'>
            <img className='w-1/3 py-24 z-50 ' src={logo} alt="logo" />
            
            <object type="image/svg+xml" data={spinner}>svg-animation</object>
           

        </div>
            
        
        
    )
}

export default LoadingModal;