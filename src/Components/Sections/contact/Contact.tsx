import {Box, Grid, Typography} from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'
import SocialMedia from '../Social/SocialMedia'

const Contact = () => {
    return (
        <Box
            id='contact'
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
                    xs: '4em',
                    sm: '5.5em'
                },
                px: '1em'
            }}>
                <Grid container className='auto flex  items-center'>

                    <Grid sx={{mb:{xs:3,md:0}}} item xs={12} sm={10} md={6}>

                        <Typography
                            component='h1'
                            sx={{
                            maxWidth: 'md',
                            pb: {
                                xs: '.15em'
                            }
                        }}
                            className='title2'>
                                What is stopping you? just message us!
                        </Typography>
                        
                        <Typography
                            component='h2'
                            sx={{
                            maxWidth: 'md',
                            py: 
                                '.55em'
                            
                        }}
                            className='desc3'>
                                Get in touch today, we offer free services as well.
                        </Typography>
                        <SocialMedia sx={{mt:'.45em !important',justifyContent:'flex-start !important'}}/>
                    </Grid>
                    <Grid item xs={12} sm={10} md={6}>
<ContactForm/>
                        

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