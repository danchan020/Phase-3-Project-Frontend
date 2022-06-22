import React, { useEffect, useState } from 'react';
import GameCard from './GameCard'

function GameLibrary() {
    
    const [games, setGames] = useState([])
    const [search, setSearch] = useState("")
    const handleChange = (e) => setSearch(e.target.value)

    useEffect(() => {
        fetch("http://localhost:9292/boardgames")
        .then( r => r.json() )
        .then( data => setGames(data))
    }, [])

    // const searchGames = 


    const renderGames = games.map(game => {
        return <GameCard key = {game.id} {...game}/>
    })
    

    return (
        <div>
            <input placeholder = 'Search' onChange={handleChange}></input>
            {renderGames}
        </div>
    )
}

export default GameLibrary