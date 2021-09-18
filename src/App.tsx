import React, { useEffect , useState } from "react";

import CONST from './data/constants'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import LoadingModal from "./components/LoadingModal";

import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export enum TitleType{
  Movie ='movie',
  Serie ='serie'
}
export interface Title{
  type: TitleType;
  id: number | string;
}

const App = () => {
  const { URL,APISTRING } = CONST

  const [movies , setMovies]:any = useState()
  const [series, setSeries]:any = useState()
  const [title, setTitle]: any = useState()
  const [score, setHighScore]:any = useState()
  const [loading, setLoading] = useState(true)


  
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
      setTimeout(()=>{
        setLoading(false)
      },1000)
      
      
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
  


  const getTitle= async ({type, id} : Title)=>{
    const title = await fetch(`${URL}/${type}/${id}${APISTRING}`)
      const titleData = await title.json()
      setMovies(titleData)
  }
  return(
    <div className="bg-black text-white m-auto antialised font-sans">
      {loading && <LoadingModal/>}
      {!loading && 
      <>
      <Hero {...getFeaturedMovie()}/>
      <Navbar />
      <Carousel title='filmes populares' data={getMovieList() } getTitle={getTitle}/>
      <Carousel title='Séries populares' data={series?.results} getTitle={getTitle}/>
      <Carousel title='Aclamados pela critica' data={score?.results} getTitle={getTitle}/>
      <Footer/>
      </>}
      </div>
    
  )

  ;
};

export default App;
