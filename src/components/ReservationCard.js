import React, {useState} from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function ReservationCard({boardgame}){
    console.log(boardgame)
    return (
        <Card style = {{backgroundColor: "#1a77ba"}}>
            <CardMedia>
                <img />
            </CardMedia>
            <CardContent>
                <Typography>
                    
                </Typography>
            </CardContent>
            <CardActions>
                <Button >
                    Cancel Reservation
                </Button>
                <Button>
                    Edit Reservation
                </Button>
            </CardActions>
        </Card>
    )
}

export default ReservationCard