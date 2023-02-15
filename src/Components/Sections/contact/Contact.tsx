import {Box, Grid, Typography} from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <Box
            className="bg "
            sx={{
            pb: '3em',
            mt: '6em'
        }}>
            <Box
                className='mx'
                sx={{
                color: 'white',
                pt: {
                    xs: '3em',
                    sm: '3.5em'
                },
                px: '1em'
            }}>
                <Grid container>

                    <Grid item xs={12} sm={10} md={6}>

                        <Typography
                            component='h1'
                            sx={{
                            maxWidth: 'md',
                            pb: {
                                xs: '.15em'
                            }
                        }}
                            className='title2'>
                            Give Us Your Fucking Money Now
                        </Typography>
                        
                        <Typography
                            component='h2'
                            sx={{
                            maxWidth: 'md',
                            pt: 
                                '.55em'
                            
                        }}
                            className='desc1'>
                            Give Us Your Fucking Money Now
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={10} md={6}>

                        

                    </Grid>
                </Grid>

            </Box>
            {/* <Box sx={{mt:{xs:'2.5em',sm:'4em'},mx:'1em'}}>
            <Carousel/>
        </Box>
  */}
        </Box>
    )
}

export default Contact