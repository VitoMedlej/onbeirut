import {Box, Grid, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import Carousel from './Carousel'
import gsap from 'gsap';


const Index = () => {
    useEffect(() => {
        gsap.to('.tt-5',{opacity:1,duration:.7,scrollTrigger:{trigger:'.tt-5',start:'top 70%'}})
    }, [])
    return (
        <Box 
        id='portfolio' className="bg " sx={{
            pb: '3em',
            mt:'6em'
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

                    <Grid item xs={12} >

                        <Typography
                            component='h1'
                            sx={{
                            maxWidth: 'md',
                            pb: {
                                xs: '.15em',
                            },
                        }}
                            className='title2 tt-5 op0 translate'>
                            Recent Success Stories From Our Clients
                        </Typography>
               

                    </Grid>
                </Grid>

            </Box>
            <Box sx={{mt:{xs:'2.5em',sm:'4em'},mx:'1em'}}>
                <Carousel/>
            </Box>
            {/* <Box >
                <Box
                    sx={{
                    width: '90%',
                    height: '100%',
                    pt: '2em'
                }}
                    className="mx">
                    <img
                        style={{
                        borderRadius: '7px'
                    }}
                        src="https://kangxiang.info/wp-content/uploads/2017/11/website-design-process-kl-selangor-scaled.jpg"
                        alt=""
                        className="img"/>
                </Box>
            </Box> */}
        </Box>
    )
}

export default Index