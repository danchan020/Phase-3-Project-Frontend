import React, {useState, useEffect} from 'react'
import ReservationCard from './ReservationCard'

function Reservations({reservations, setReservations}){

    const handleDelete = (id) => {
        fetch(`http://localhost:9292/reservations/${id}`, {
            method: 'DELETE'
        })  .then(r => r.json())
            .then(() => {
            const deleteReservation = reservations.filter(reservation => reservation.id !== id)
            setReservations(deleteReservation)
        })
    }

    const handleEdit = (updatedData) => {
        const { id } = updatedData
        const filteredReservations = reservations.filter(reservation => reservation.id !== id)
        setReservations([...filteredReservations, updatedData])
    }


    const renderReservations = reservations.map(reservation => {
        return <ReservationCard key = {reservation.id} {...reservation} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
    })

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                Reservations
            </h1>
            {renderReservations}
        </div>
    )
}

export default Reservations