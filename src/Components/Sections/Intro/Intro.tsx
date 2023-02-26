import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Grid, Typography} from '@mui/material'
import React, {useEffect} from 'react'
import gsap from 'gsap';
import Link from 'next/link';

const Intro = () => {
    useEffect(() => {
        gsap.to('.t1', {
            opacity: 1,
            duration: '.5',
            delay: .2,
            y: 0
        })
        gsap.to('.t2', {
            opacity: 1,
            duration: '.5',
            delay: .6,
            y: 0
        })
        gsap.to('.btn-1', {
            opacity: 1,
            duration: '.5',
            delay: .9,
            y: 0
        })
        gsap.to('.img-1', {
            opacity: 1,
            duration: '1',
            delay: 1.4,
            y: 0
        })
    }, [])

    return (
        <Box className="bg " sx={{
            pb: '3em'
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

                    <Grid item xs={12} md={8}>

                        <Typography
                            component='h1'
                            sx={{
                            maxWidth: 'md',
                            pb: {
                                xs: '.55em',
                                md: '1em'
                            }
                        }}
                            className='title t1 op0 translate'>
                            The Web Dev Agency You Always Wanted
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                        alignItems: {
                            md: 'center'
                        },
                        gap: {
                            xs: '.75em',
                            md: '1.25em'
                        }
                    }}
                        className=' items-center flex col'
                        item
                        xs={12}
                        md={4}>
                        <Typography component='h3' className='desc1 t2 op0 translate'>
                            Your business deserves an awesome website, we are here to ensure that.

                        </Typography>
                        <Link className=' btn-1 decor-none translate op0' href='#contact'>

                            <CustomButton
                                sx={{
                                maxWidth: '200px !important',
                                background: 'white',
                                color: 'black',
                                px: '1em',
                                ':hover': {
                                    color: 'white'
                                }
                            }}>
                                Reach Us Now
                            </CustomButton>
                        </Link>
                    </Grid>
                </Grid>

            </Box>
            <Box className='img-1 translate op0'>
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
                        alt="Intro Section Main Image"
                        className="img"/>
                </Box>
            </Box>
        </Box>
    )
}

export default Intro