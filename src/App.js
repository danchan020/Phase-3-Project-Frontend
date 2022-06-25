import React, {useState, useEffect} from 'react';
import Donate from './components/Donate'
import Reservations from './components/Reservations'
import GameLibrary from './components/GameLibrary';
import Home from './components/Home';
import ResponsiveAppBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";



function App() {

  const [games, setGames] = useState([])
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/boardgames")
    .then( r => r.json() )
    .then( data => setGames(data))
}, [])

  useEffect(() => {
      fetch("http://localhost:9292/reservations")
      .then( r => r.json() )
      .then( data => setReservations(data))
  }, [])

  const handleAddReservation = (formData) => {
    setReservations([...reservations, formData]);
  }

  // const handleNewGame = (event) => {
  //   return (games.find(game => game.title.toLowerCase() === event.target.title.value.toLowerCase()));
  // }

  // const handleAddBoardgame = (formData) => {
  //   setGames([...games, formData]);
  // }

  const handleFormStockUpdate = (formData) => {
    const {id} = formData
    const updatedGamesForm = games.filter(game => game.id !== id)
    setGames([...updatedGamesForm, formData ])
 }

  const handleCondition = (id) => {
    return !!reservations.find(reservation => reservation.boardgame.id === id)
  }

  const handleUpdateStock = (updatedBoardgame) => {
    const {id} = updatedBoardgame
    const updatedGames = games.filter(game => game.id !== id)
    setGames([...updatedGames, updatedBoardgame ])
 }

  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/boardgames" element = {
              <GameLibrary 
                games = {games} 
                handleUpdateStock = {handleUpdateStock} 
                handleAddReservation = {handleAddReservation} 
                handleCondition={handleCondition}/>}
              />
            <Route path="/reservations" element = {
              <Reservations 
                reservations={reservations} 
                setReservations = {setReservations} 
                />}
              />
            <Route path="/donate" element = {<Donate handleFormStockUpdate={handleFormStockUpdate}/>}/>         
      </Routes>
      
    </div>
  );
}

export default App;
