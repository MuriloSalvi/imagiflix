import React from "react";
import emitter  from "../utils/eventEmitter";
import CONST from '../data/constants'

import Score from "./Score";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({poster_path, title, name, vote_average, original_title, overview, runtime, video,number_of_seasons,original_name }: any)=>{
 const {IMAGEURL} = CONST
 const movieTime = runtime
 const seasons = number_of_seasons
 
 const handleClick = ()=>{
    emitter.emit(CONST.EVENTS.ModalClose);
 }

 return(
    <div className= 'fixed t-0 l-0 w-full h-screen grid place-items-center z-40'>
      <article className='relative grid grid-cols-2 w-4/5 h-4/5 bg-black  place-items-center shadow-2xl'>
        <FontAwesomeIcon icon={faTimes} onClick={handleClick} color='white' size='2x' className='absolute cursor-pointer right-5 top-5'/>
        <img className='w-4/5 h-full rounded py-5' src={`${IMAGEURL}/w500/${poster_path}`} alt={title} />
        <div className='text-white w-full h-full mr-8'>
          <h2 className='font-bold  text-3xl mt-24'>{title? title : name}</h2>
          <h3 className='mt-8 font-semibold text-xl'>{original_title ? original_title  : ''}</h3>
          <h3 className='mt-8'>{overview}</h3>
          <div className='flex mt-8 absolute bottom-25 items-center'>
          <Score value={vote_average}/>
          <h3 className='bg-red-600 flex p-2 rounded ml-10'>{movieTime ? <p>{movieTime}min</p> : <p>{seasons} temporadas</p>}</h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Modal;