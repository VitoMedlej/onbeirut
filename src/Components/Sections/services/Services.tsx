import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Divider, Grid, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import { BsArrowUpRight} from 'react-icons/bs';



const Card = () => {
    return (
        <Box 
        className='shadow'
        sx={{
            position:'absolute',
            top:'25%',
            left:'3%',
            zIndex:12412412,
            px:1,
            borderRadius:'6px',
     width:'200px',background:'white',height:'120px'}}>
            <Typography
            component='h1'
            className='title4'
            >
                Web Development
            </Typography>
            <Typography
            component='p'
            className='desc3'
            >
                Web Development related shit
            </Typography>
        </Box>
    )
}
const Index = () => {
    return (
        <Box sx={{

        }}>
            <Box  
            className='mx'
            sx={{
                px: '1em'
            }}>

                <Typography
                    className='title2 '
                    sx={{
                    py: '1em'
                }}>Why Would You Need A Website?</Typography>
            </Box>
            <Grid
            sx={{
                background: '#00ff1875',
                zIndex:'4124'
            }}
            container>
                <Grid
                         className=' mx'
                
                xs={12}  item>
                    <Box
                        sx={{
                        // background: '#00ff1875',
                        mb:'6em',
                        height: {xs:'220px',sm:'400px',md:'600px !important'},
                        width:'100%',
                    }}>
                     
                        <Box
                         className='relative mx'
                            sx={{
                               
                                transform:'translateY(-4em)',
                                width:'95%',
                                height:'100%',
                            margin : '0 auto',
                            mt:'4em',
                          
                        }}>
                               <Box className='layer border' />
                            <img
                                src={`https://yi-files.s3.eu-west-1.amazonaws.com/products/983000/983190/1652411-full.jpg`} alt="Image of website desgin"
                                className="img cover border "/>
                        <Card/>
                        </Box>
                    </Box>
                </Grid>
              
            </Grid>
            <Divider></Divider>
        </Box>

    )
}

export default Index