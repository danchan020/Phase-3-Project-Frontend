import React, {useState, useEffect} from 'react';
import Donate from './components/Donate'
import Reservations from './components/Reservations'
import GameLibrary from './components/GameLibrary';
import Home from './components/Home';
import ResponsiveAppBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";



function App() {

  const [reservations, setReservations] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/reservations")
      .then( r => r.json() )
      .then( data => setReservations(data))
  }, [])

  const handleAddReservation = (formData) => {
    setReservations([...reservations, formData]);
  }

  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/boardgames" element = {<GameLibrary handleAddReservation = {handleAddReservation}/>}/>
            <Route path="/reservations" element = {
              <Reservations 
                reservations={reservations} 
                setReservations = {setReservations} 
                />}
              />
            <Route path="/donate" element = {<Donate/>}/>         
      </Routes>
      
    </div>
  );
}

export default App;
