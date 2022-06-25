import React, {useState} from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material'
import { Grid } from '@mui/material';
import { Dialog, DialogTitle } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function ReservationCard({id, boardgame, pickup_time, return_time, handleDelete, handleEdit}){

    const deleteReservation = () => handleDelete(id)

    const [pickupDate, setPickupDate] = useState(new Date())
    const [returnDate, setReturnDate] = useState(new Date())

    const handlePickup = (newPickupDate) => { setPickupDate(newPickupDate) }
    const handleReturn = (newReturnDate) => { setReturnDate(newReturnDate) }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const reservationChange = {
            pickup_time: pickupDate,
            return_time: returnDate
        }
        console.log(reservationChange)
        fetch(`http://localhost:9292/reservations/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(reservationChange)
        })
            .then(r => r.json())
            .then(data => {handleEdit(data)
    })
}

    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4}/>
            <Card elevation={15} style = {{backgroundColor: "#1a77ba"}}>
                <CardMedia>
                    <img src = {boardgame.image} width="575" height="475"/>
                </CardMedia>
                <CardContent>
                    <Typography>
                        {boardgame.title}
                    </Typography>
                    <Typography>
                        Pickup Time: {pickup_time}
                    </Typography>
                    <Typography>
                        Return Time: {return_time}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick = {handleOpen} style = {{color: "black" ,backgroundColor: "white"}}>
                        Edit Reservation
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle> Edit your Reservation </DialogTitle>
                        <form onSubmit = {handleEditSubmit} >
                            <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'Check-in', end: 'Check-out' }}>
                                <DateTimePicker
                                    label="Pickup Date"
                                    value={pickupDate}
                                    onChange={handlePickup}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DateTimePicker
                                    label="Return Date"
                                    value={returnDate}
                                    onChange={handleReturn}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <Button type="submit" onClick={handleClose}>
                                Submit
                            </Button>
                        </form>
                    </Dialog>
                    <Button onClick = {deleteReservation} style = {{color: "black" ,backgroundColor: "white"}}>
                        Cancel Reservation
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ReservationCard