import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Grid, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import { BsArrowUpRight} from 'react-icons/bs';


const Reasons = () => {
    return (
        <Box >
            <Box className='mx' sx={{
                px: '1em'
            }}>

                <Typography
                    className='title2'
                    sx={{
                    py: '1em'
                }}>Why Would You Need A Website?</Typography>
            </Box>
            <Grid container>
                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                        background: '#00ff1875',
                        py: {
                            xs: '0em',
                            md: '6em'
                        }
                    }}>
                        <Box
                            sx={{
                            maxHeight: '500px',
                            transform: {
                                md: 'translateX(-3%)'
                            },
                            pb: {
                                xs: '1.5em',
                                md: 0
                            },
                            width: '100%',
                            height: '100%'
                        }}>
                            <img
                                src="https://source.unsplash.com/user/c_v_r/1600x1000"
                                alt=""
                                className="img border "/>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    sx={{
                    mt: {
                        xs: '2em',
                        md: 0
                    }
                }}>
                    <Box
                        sx={{
                        px: 1,
                        height: '100%',
                        maxWidth: '600px'
                    }}
                        className='flex  auto   col items-center '>
                        <Typography
                            className='desc2'
                            sx={{
                            color: '#515151 !important'
                        }}
                            component='h4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus qui cupiditate
                            veniam necessitatibus explicabo laboriosam ipsum saepe esse officiis dolorem!
                        </Typography>
                        <Link
                            className='flex center'
                            href='/'
                            style={{
                            gap:'.15em',
                            color: 'black',
                            paddingTop: '.75em'
                        }}>
                            
                            <Typography
                                component='h1'
                                sx={{
                                fontWeight: '500',
                                fontSize: '1.2em'
                            }}>
                                Get One
                            </Typography>
                            <BsArrowUpRight/>
                        </Link>
                        <Box
                            sx={{
                            px: 2,
                            py: 2,
                            my: 4
                        }}
                            className="flex gap shadow">
                            <BiLinkExternal
                                className='color'
                                style={{
                                fontSize: '1.5em',
                                paddingTop: '.25em'
                            }}/>
                            <Box className='  center '>
                                <Link
                                    href='/'
                                    className='link color'
                                    style={{
                                    textDecoration: 'none'
                                }}>
                                    <Typography
                                        component='h1'
                                        sx={{
                                        fontSize: {
                                            xs: '1.1em',
                                            md: '1.5em'
                                        }
                                    }}>
                                        Why Do you Need A website?
                                    </Typography>
                                </Link>
                                <Typography
                                    sx={{
                                    pt: 2.5
                                }}
                                    className='desc2'
                                    component='h2'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates natus ab
                                    asperiores incidunt enim eligendi.
                                </Typography>
                            </Box>
                        </Box>
                        {/* <Box>
                                <Typography component='h4' >
                                        Main Bullet Points:
                                </Typography>
                                <ul>
                                        <li>Some SHit 1 Bro</li>
                                        <li>Some SHit 1 Bro</li>
                                        <li>Some SHit 1 Bro</li>
                                </ul>
                        </Box> */}

                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Reasons