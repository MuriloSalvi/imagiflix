import React, { useEffect , useState } from "react";

import CONST from './data/constants'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

const App = () => {
  const { URL,APISTRING } = CONST

  const [movies , setMovies]:any = useState()
  const [series, setSeries]:any = useState()
  const [score, setHighScore]:any = useState()

  useEffect(()=>{
    
    const fetchData = async () => {
      const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`)
      const moviesData = await movies.json()
      setMovies(moviesData)

      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`)
      const seriesData = await series.json()
      setSeries(seriesData)

      const score = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=vote_average.desc`)
      const highScoreData = await score.json()
      setHighScore(highScoreData)
    }
    fetchData();  
  },[]);


  useEffect(()=> movies && console.log(movies), [movies])


  const getFeaturedMovie = () => movies && movies?.results[0]
  
  const getMovieList = ()=>{
    if(movies){
      const[featured, ...movieList] = movies?.results;
      return movieList
    }
    return[];
  }
  

  return (
    <div className="bg-black text-white m-auto antialised font-sans">
      <Hero {...getFeaturedMovie()}/>
      <Navbar />
      <Carousel title='filmes populares' data={getMovieList()}/>
      <Carousel title='Séries populares' data={series?.results}/>
      <Carousel title='Aclamados pela critica' data={score?.results}/>
      <Footer/>
    </div>
  );
};

export default App;
