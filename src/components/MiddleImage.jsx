import { Parallax } from 'react-parallax'
import table from '../images/Table.jpeg'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// const MiddleImage = () => {
//     return (
//         <div className="MiddleImage">
//             <div className="Middle-image-container">
//                 <h1>Events</h1>
//                 <h1>Parties</h1>
//                 <button>Learn more</button>
//             </div>
//         </div>
//     )
// }

// const MiddleImage = () => (
//     <div className='MiddleParallax'>
//         <Parallax className='secondImage' bgImage={table} strength={800}>
//             <div className="Middle-image-container">
//                     <h1>Events</h1>
//                     <h1>Parties</h1>
//                     <button>Learn more</button>
//             </div>
//         </Parallax>
//     </div>
// )

const MiddleImage = () => (
    <div className='MiddleParallax'>
        <Parallax className='secondImage' bgImage={table} strength={400}>
            <Card sx={{ width: 600}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                        Events
                    </Typography>
                    <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                        Private dining
                    </Typography>
                    <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                        Parties of up to 30 guests may be seated inthe private Sala di Recezione.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Parallax>
    </div>
)

export default MiddleImage
