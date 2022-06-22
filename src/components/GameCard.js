import React from 'react';
import { Button } from '@mui/material';
import { Card, CardHeader, CardContent, CardActions, CardMedia } from '@mui/material'

function GameCard({id, image, title, category, rating, supply, description}){
    return (
        <Card>    
            <CardMedia>
                <img src={image}/>
            </CardMedia>
            <CardHeader>
                {title}
            </CardHeader>
            <CardContent>
                Category : {category},
                Rating : {rating},
                Stock : {supply}
            </CardContent>
            <CardActions>
                <Button>
                    Reserve
                </Button>
            </CardActions>
        </Card>
    )
           
        
        

}



export default GameCard;