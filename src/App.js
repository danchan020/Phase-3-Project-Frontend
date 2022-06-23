import React, {useState} from 'react';
import Donate from './components/Donate'
import Reservations from './components/Reservations'
import GameLibrary from './components/GameLibrary';
import Home from './components/Home';
import ResponsiveAppBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/boardgames" element = {<GameLibrary/>}/>
            <Route path="/reservations" element = {<Reservations/>}/>
            <Route path="/donate" element = {<Donate/>}/>         
      </Routes>
      
    </div>
  );
}

export default App;
