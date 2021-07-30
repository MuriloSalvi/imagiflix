import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import './App.css';

const App = ()=>{
  return (
    <div className="bg-black text-white m-auto antialised font-sans">
    
    <Hero/>
    <Navbar/>
    <h1>teste</h1>
    </div>
  );
}

export default App;
