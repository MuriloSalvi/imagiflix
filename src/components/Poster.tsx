import React from "react";

import CONST from '../data/constants'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Score from "./Score";

import { Movie } from "../data/mock";
import './Poster.css'



const Poster = ({ poster_path, title, name, vote_average,movie_id,tv_id }: Movie, index: number) => {
  const {IMAGEURL} = CONST
  return(
    <article
      className="relative mx-1 rounded  transition-all duration-500 ease-in-out transform hover:scale-110 w-full h-full"
      key={index}
    >
      <div className="poster cursor-pointer absolute py-8 px-4 top-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
        <FontAwesomeIcon icon={faPlayCircle} size="5x" />
        
        <h2 className="text-xl text-center leading-4">{title? title : name}</h2>
        <Score value = {vote_average}/>
      </div>
      <img className='rounded-sm ' src={`${IMAGEURL}/w185/${poster_path}`} alt={title} />
    </article>
  )
};
export default Poster;
