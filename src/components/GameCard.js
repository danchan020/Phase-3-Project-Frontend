import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, Typography } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material'
import { Grid } from '@mui/material';
import { Dialog, DialogTitle } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function GameCard({ id, image, title, category, rating, supply, description, handleAddReservation, handleUpdateStock, handleCondition }) {

    const [pickupDate, setPickupDate] = useState(new Date())
    const [returnDate, setReturnDate] = useState(new Date())
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => { setExpanded(!expanded) }

    const handlePickup = (newPickupDate) => { setPickupDate(newPickupDate) }
    const handleReturn = (newReturnDate) => { setReturnDate(newReturnDate) }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [popup, setPopup] = useState(false);
    const handlePopup = () => setPopup(true);
    const handlePopupClose = () => setPopup(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (handleCondition(id)){
            return handlePopup();
        } else {

        const newReservation = {
            user_id: null,
            boardgame_id: id,
            pickup_time: pickupDate,
            return_time: returnDate
        }

        const updateStock = (stock) => { 
            fetch(`http://localhost:9292/boardgames/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({supply: --stock})
            })
                .then(r => r.json())
                .then(data => {handleUpdateStock(data)})
         }

        fetch('http://localhost:9292/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReservation)
        })
            .then(r => r.json())
            .then(data => {
                handleAddReservation(data)
                updateStock(supply)
            })
        }
    }

    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4} />
            <Card elevation={15} style={{ backgroundColor: "#1a77ba" }}>
                <CardMedia>
                    <img src={image} width="575" height="475" />
                </CardMedia>
                <CardContent>
                    <Typography>
                        {title}
                    </Typography>
                    <Typography>
                        Category : {category}
                    </Typography>
                    <Typography>
                        Rating : {rating}
                    </Typography>
                    <Typography>
                        Stock : {supply}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} style={{ color: "black", backgroundColor: "white" }}>
                        Reserve
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle> Reserve {title}! </DialogTitle>
                        <form onSubmit={handleSubmit}>
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
                    <Dialog open={popup} onClose = {handlePopupClose}>
                        Error: Cannot reserve the same boardgame twice! 😡
                    </Dialog>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography>
                            {description}
                        </Typography>
                    </Collapse>
                    
                </CardActions>
            </Card>
        </Grid>
    )




}



export default GameCard;