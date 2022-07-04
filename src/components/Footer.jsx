import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="address">
                    <h3>Address</h3>
                    <a href="#top">170 Thompson Street New York City, NY 10012</a>
                    <h5>212 982 5089</h5>
                </div>
                <div className="links">
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                    <a href="#top">Contact us</a>
                </div>
                <div className="newsletter">
                    {/* <form>
                        <label for="newsletteremail">Newsletter</label>
                        <input type="text" id="newsletteremail" name="newsletter" placeholder="Enter your email"></input>
                        <button className="newsletter-button">send</button>
                    </form> */}
                    <Typography sx={{ fontSize: 20}} color="text.secondary" gutterBottom>
                        Newsletter
                    </Typography>
                    <Box 
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete='off'
                    >
                        <TextField 
                            id="standard-basic" 
                            label="ENTER YOUR EMAIL" 
                            variant="standard" 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end" color="primary">
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            />
                    </Box>
                </div>

            </div>
        </div>
    )
}

export default Footer
