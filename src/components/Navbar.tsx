import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/imagiflix.png";
import placeholderUser from "../assets/user.jpg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 grid grid-cols-2 justify-between w-full p-8 ">
      <div className="jusify-self-start grid grid-cols-2 items-center ">
        <h1 className="hidden">Imagiflix</h1>
        <img src={logo} alt="imagiflix" className="" />

        <ul className=" grid grid-flow-col gap-4 ">
          <li className="font-bold">
            <a href="#home">Inicio</a>
          </li>
          <li >
            <a  href="#series" >Séries</a>
          </li>
          <li className="hover:font-bold">
            <a href="#movies">Filmes</a>
          </li>
        </ul>
      </div>

      <div className="justify-self-end flex justify-items-end items-center ">
        <form className="relative w-64">
          <input
            className="w-full 
            bg-black
            px-4
            py-1 
            rounded 
            border-white 
            border-2
            transition-all
            duration-300
            ease-in-out
            opacity-0
            hover:opacity-100
            focus:opacity-100
            "
            
            type="text"
            placeholder="Titulos, gente e generos"
          />
          <button className="absolute  right-2 py-1 ">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="flex">
          <img src={placeholderUser} alt="usuario" className="ml-4" />
          <button>
            <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
          </button>

          <ul className="hidden">
            <li>Minha conta</li>
            <li>
              <a href="#logout">sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
