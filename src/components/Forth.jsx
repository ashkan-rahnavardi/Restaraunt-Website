import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import food from '../images/food.jpeg';

export default function Forth() {
  return (
    <div className='Forth'>
        <Card sx={{ maxWidth: 800, width: 800, marginBottom: 5}}>
            <CardMedia
                component="img"
                height="340"
                image={food}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Join our team
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We're always hiring and excited to add new talent to our team.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 800, width: 800  }}>
            <CardMedia
                component="img"
                height="340"
                image={food}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Join our team
                </Typography>
                <Typography variant="body2" color="text.secondary">
                We're always hiring and excited to add new talent to our team.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>
    
  );
}
