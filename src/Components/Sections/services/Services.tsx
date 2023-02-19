import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Divider, Grid, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import { BsArrowUpRight} from 'react-icons/bs';



const Card = () => {
    return (
        <Box sx={{
            position:'absolute',
            width:'200px',background:'red',height:'120px'}}>
            foo
        </Box>
    )
}
const Index = () => {
    return (
        <>
            <Box  sx={{
                px: '1em'
            }}>

                <Typography
                    className='title2'
                    sx={{
                    py: '1em'
                }}>Why Would You Need A Website?</Typography>
            </Box>
            <Grid  className='mx' container>
                <Grid xs={12}  item>
                    <Box
                       
                        sx={{
                        background: '#00ff1875',
                        mb:'6em',
                        height: {xs:'220px',sm:'400px',md:'600px !important'},
                        width:'100%',
                    }}>
                     
                        <Box
                         className='relative'
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
        </>

    )
}

export default Index