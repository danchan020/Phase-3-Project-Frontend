import { TextField, Grid, Select, MenuItem, FormControl, InputLabel, Button, Paper } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'


function Donate({ handleFormStockUpdate }) {

    const newGame = {
        title: "",
        image: "",
        rating: "",
        category: null,
        description: null,
    }

    const [formData, setFormData] = useState(newGame)

        const handleSubmit = (e) => {
            e.preventDefault()
            fetch(`http://localhost:9292/boardgames`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                handleFormStockUpdate(data)
            })
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (handleNewGame(e)) {
    //         // fetch(`http://localhost:9292/boardgames`, {
    //         //     method: 'PATCH',
    //         //     headers: { 'Content-Type': 'application/json' },
    //         //     body: JSON.stringify({supply: ++stock})
    //         // })
    //         //     .then(r => r.json())
    //         //     .then(data => )
    //     } else {
    // //     fetch(`http://localhost:9292/boardgames`, {
    // //         method: 'POST',
    // //         headers: { 'Content-Type': 'application/json' },
    // //         body: JSON.stringify()
    // //     })
    // //         .then(r => r.json())
    // //         .then(data => {handleAddBoardgame(data)})
    // // }
    // }}




const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
}

const focusEffect = useRef()
useEffect(() => { focusEffect.current.focus() }, [])

return (
    <div>
        <h1 style={{ textAlign: "center" }}>
            Donate
        </h1>
        <Grid container direction="column" alignItems="center" justify="center">
            <Paper style={{ width: "50vh" }}  >
                <form onSubmit={handleSubmit}>
                    
                        <Grid item container direction="column" alignItems="center" justify="center">
                            <TextField
                                ref={focusEffect}
                                name="title"
                                label="Title"
                                variant="filled"
                                style={{ marginBottom: "1em" }}
                                value={formData.title}
                                onChange={handleChange}
                            />
                            <TextField
                                ref={focusEffect}
                                name="image"
                                label="Image"
                                variant="filled"
                                style={{ marginBottom: "1em" }}
                                value={formData.image}
                                onChange={handleChange}
                            />
                            <FormControl variant="filled" style={{ minWidth: 120 }}>
                                <InputLabel>Rating</InputLabel>
                                <Select
                                    name="rating"
                                    label="Rating"
                                    style={{ marginBottom: "1em" }}
                                    value={formData.rating}
                                    onChange={handleChange}>

                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                            <Button type="submit" variant="contained">Donate</Button>
                        </Grid>
                    
                </form>
            </Paper>
        </Grid>    
    </div >
)
}

export default Donate