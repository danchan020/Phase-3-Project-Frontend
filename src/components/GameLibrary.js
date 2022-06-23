import React, { useEffect, useState } from 'react';
import GameCard from './GameCard'
import {TextField} from '@mui/material'

function GameLibrary() {
    
    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const handleChange = (e) => setSearch(e.target.value)

    useEffect(() => {
        fetch("http://localhost:9292/boardgames")
        .then( r => r.json() )
        .then( data => setGames(data))
    }, [])

    const searchedGames = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))


    const renderGames = searchedGames.map(game => {
        return <GameCard key = {game.id} {...game}/>
    })
    

    return (
        <div>
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