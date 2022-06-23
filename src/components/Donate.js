import React, { useState, useEffect } from 'react'


function Donate(id){

// useEffect = (() => {
//     fetch(`http://localhost:9292/boardgames/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify()
//     })
// }, [])

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                Donate
            </h1>
        </div>
    )
}

export default Donate