import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Grid, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import { BsArrowUpRight} from 'react-icons/bs';


const Reasons = () => {
    return (
        <>
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
                <Grid xs={12} md={6} item>
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
                                src={`https://res.cloudinary.com/dwxm8f25f/image/upload/v1676813799/google-analytics-audience-template_jr8vxg.png`}                                alt="Image of website analytics"
                                className="img border "/>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                item
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
                                According to Ada Durzyńska, &quot;70-80% of people were researching companies online before visiting it/making a purchase, and the same percentage of customers could be lost to small businesses without a website&quot;
                        </Typography>
                        <Typography
                            className='desc2'
                            sx={{
                            pt:1,
                            color: '#515151 !important'
                        }}
                            component='h4'>
                                You could always learn more; but waste no time, a website is a low risk investment
                                that produces great results and growth.
                        </Typography>
                        <Link
                            className='flex center'
                            href='/contact'
                            style={{
                            width:'100%',
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
                                <a
                                target="_blank"
                                rel="noreferrer" 
                                    href='https://www.getresponse.com/blog/why-do-i-need-a-website#:~:text=1.-,Having%20a%20website%20makes%20you%20look%20professional%20and%20increases%20trust,is%20an%20instant%20credibility%20boost.'
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
                                      Why Do I Need a Website?
                                    </Typography>
                                </a>
                                <Typography
                                    sx={{
                                    pt: 2.5,
                                    color:'#717171 !important'
                                }}
                                    className='desc3'
                                    component='h3'>
                               When it seems that social media rule the Internet, you might ask yourself, “Do I need a website?” The answer is yes, and I’m here to tell you why...
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
        </>

    )
}

export default Reasons