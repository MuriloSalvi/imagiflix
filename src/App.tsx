import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="bg-black text-white m-auto antialised font-sans">
      <Hero />
      <Navbar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;
