import React, {useState} from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material'
import { Grid } from '@mui/material';
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function ReservationCard({id, boardgame, pickup_time, return_time, handleDelete}){

    const deleteReservation = () => handleDelete(id)

    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4}/>
            <Card style = {{backgroundColor: "#1a77ba"}}>
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
                    <Button style = {{color: "black" ,backgroundColor: "white"}}>
                        Edit Reservation
                    </Button>
                    <Button onClick = {deleteReservation} style = {{color: "black" ,backgroundColor: "white"}}>
                        Cancel Reservation
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ReservationCard