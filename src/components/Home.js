import React from 'react'
import { Grid, TextField, Button, Typography} from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function Home() {

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return (
        <div className= 'home'>
            <h1 style={{textAlign: "center", width: '100%', fontSize: '52.5px'}}>
                GameKeeper
            </h1>
            <p style={{textAlign: "center", fontSize: '20px'}}>
                The Library for Boardgames
            </p>

            <Grid container justify="center" alight="center" direction="column" style={{minHeight: "100vh"}}>
                <Grid item>
                    <ToggleButtonGroup 
                        color="primary" 
                        style={{marginBottom: "1em"}}
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="login">Log In</ToggleButton>
                        <ToggleButton value="signup">Sign Up</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item container direction="column" alignItems="center" justify="center">
                    <TextField variant="filled" label="Email" fullWidth style={{marginBottom: "1em"}}/>
                    <TextField variant="filled" label="Username" fullWidth style={{marginBottom: "1em"}}/>
                    <TextField variant="filled" label="Password" fullWidth style={{marginBottom: "1em"}}/>
                    <Button size="large" variant="contained" color="primary"> Sign Up </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home