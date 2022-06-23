import React, {useState, useEffect} from 'react'
import ReservationCard from './ReservationCard'

function Reservations(){

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/reservations")
        .then( r => r.json() )
        .then( data => setReservations(data))
    }, [])

    const renderReservations = reservations.map(reservation => {
        <ReservationCard key = {reservation.id} {...reservation} />
    })

    return (
        <div>
            <h1>
                Reservations
            </h1>
            {renderReservations}
        </div>
    )
}

export default Reservations