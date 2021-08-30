import React from 'react'
import logo from '../assets/imagiflix.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingModal = ()=>{
    return(
        <>
        <div className='flex items-center flex-col text-center w-screen h-screen bg-transparent'>
            <img className='w-1/3 py-24 z-50 ' src={logo} alt="logo" />
            
            <FontAwesomeIcon className='z-50 ' icon={faSpinner} size='9x' color='red' pulse/>
            <div className='w-full h-full fixed z-0 bg-gray-500 animate-pulse'>

        </div>
            
        </div>
        
        </>
    )
}

export default LoadingModal;