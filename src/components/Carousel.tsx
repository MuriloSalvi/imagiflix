import React from "react";

import Slider from "react-slick";
import Poster from "./Poster";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import mockData, { Movie } from "../data/mock";
import './Carousel.css'

interface CarouselData {
  title?: string;
  data?: Movie[];
}

const Carousel = ({
  title = "Filmes em destaque",
  data = mockData,
}: CarouselData) => {
  enum Direction {
    left,
    right,
  }

  const SliderArrow = ({
    direction,
    onClick,
  }: {
    direction: Direction;
    onClick?: any;
  }) => (
    <button
      type="button"
      className={`absolute w-16 h-full z-10 bg-gray-black bg-opacity-50 top-0 
   ${direction ? "right-0" : "left-0"}`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction ? faChevronRight : faChevronLeft}
        size="3x"
      />
    </button>
  );

  const options = {
    infinite: true,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: <SliderArrow direction={Direction.left} />,
    nextArrow: <SliderArrow direction={Direction.right} />,
  };
  return (
    <section className="relative z-50">
      <h2 className="relative z-10 text-2xl ml-8 py-2">{title}</h2>
      <Slider {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slider>
    </section>
  );
};

export default Carousel;
