import React, { useEffect, useState } from 'react';
import GameCard from './GameCard'
import {TextField, Box} from '@mui/material'

function GameLibrary({handleAddReservation, handleCondition}) {
    
    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const handleChange = (e) => setSearch(e.target.value)

    useEffect(() => {
        fetch("http://localhost:9292/boardgames")
        .then( r => r.json() )
        .then( data => setGames(data))
    }, [])

    const handleUpdateStock = (updatedBoardgame) => {
        const {id} = updatedBoardgame
        const updatedGames = games.filter(game => game.id !== id)
        setGames([...updatedGames, updatedBoardgame ])
     }

    


    const searchedGames = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))


    const renderGames = searchedGames.map(game => {
        return <GameCard 
        key = {game.id} 
        {...game} 
        handleAddReservation = {handleAddReservation} 
        handleUpdateStock= {handleUpdateStock} 
        handleCondition={handleCondition}/>
    })
    

    return (
        <div style={{textAlign: "center"}}>
            <h1>All Games</h1>

                <TextField 
                    id="filled-basic" 
                    label="Search" 
                    variant="filled" 
                    size="small" 
                    color="secondary" 
                    onChange={handleChange}
                    focused
                />

            {renderGames}
        </div>
    )
}

export default GameLibrary