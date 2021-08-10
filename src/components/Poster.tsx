import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import { Movie } from "../data/mock";



const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
    key={index}
  >
    <div className="absolute top-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-1 hover:opacity-1">
      <FontAwesomeIcon icon={faPlayCircle} size="5x" />
      <h2 className="text-xl">{title}</h2>
    </div>
    <img src={cover} alt={title} />
  </article>
);
export default Poster;
