import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/imagiflix.png";
import placeholderUser from "../assets/user.jpg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="absolute top-0 left-0 grid grid-cols-2 justify-between w-full p-8 ">
      <div className="jusify-self-start grid grid-cols-2 items-center ml-28">
        <h1 className="hidden">Imagiflix</h1>
        <img src={logo} alt="imagiflix" className="" />

        <ul className=" grid grid-flow-col gap-4 ">
          <li className="font-bold hover:">
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#series">Séries</a>
          </li>
          <li className="hover:font-bold">
            <a href="#movies">Filmes</a>
          </li>
        </ul>
      </div>

      <div className="justify-self-end flex justify-items-end items-center mr-28">
        <form className="relative w-64">
          <input
            className="
            w-0 
            bg-black
            px-4
            py-1 
            rounded 
            border-white 
            border-2
            transition-all
            duration-500
            ease-in-out
            opacity-0
            hover:opacity-100 w-full
            focus:opacity-100 w-full
            "
            type="text"
            placeholder="Titulos, gente e generos"
          />
          <button className="absolute  right-2 py-1 ">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="relative flex ml-4">
          <img src={placeholderUser} alt="usuario" onClick={handleClick} />
          <button onClick={handleClick}>
            <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
          </button>

          <ul
            className={`
            absolute
            mt-10
            p-1
            w-32
            right-0
            bg-black
            rounded 
            transition-all
            duration-500
            ease-in-out
            ${showMenu && "invisible opacity-0 w-0 right-0 -mt-0"}
            `}
            onClick={handleClick}
          >
            <li>
              <a href="#home" onClick={handleClick}>
                Minha conta
              </a>
            </li>
            <li>
              <a href="#logout" onClick={handleClick}>
                sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
