import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material'
import { Grid } from '@mui/material';
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function GameCard({ id, image, title, category, rating, supply, description }) {

    const [pickupDate, setPickupDate] = useState(new Date())
    const [returnDate, setReturnDate] = useState(new Date())

    const handlePickup = (newPickupDate) => { setPickupDate(newPickupDate) }
    const handleReturn = (newReturnDate) => { setReturnDate(newReturnDate) }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4}/>
            <Card elevation={5} style={{ backgroundColor: "#1a77ba" }}>
                <CardMedia>
                    <img src={image} />
                </CardMedia>
                <CardContent>
                    <Typography>
                        {title}
                    </Typography>
                    <Typography>
                        Category : {category}
                        Rating : {rating}
                        Stock : {supply}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} style = {{color: "black" ,backgroundColor: "white"}}>
                        Reserve
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle> Reserve {title}! </DialogTitle>
                        <DialogContent>
                            <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                            >
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
                            <Button>
                                Submit
                            </Button>
                        </DialogContent>
                    </Dialog>
                </CardActions>
            </Card>
        </Grid>
    )




}



export default GameCard;