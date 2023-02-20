import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Divider, Grid, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'
import { BsArrowUpRight} from 'react-icons/bs';



const Card = ({bg,title}:{title?:any,bg:string}) => {
    return (
        <Box 
        className='shadow'
        sx={{
            position:'absolute',
            top:{xs:'90%',md:'25%'},
            left:{md:'3%'},
            zIndex:12412412,
            width:'100%',
          
     maxWidth:{md:'300px'}
     ,background:'white',minHeight:'120px'}}>
        <Box 
        className='flex gap' sx={{
              padding:{xs:2,md:3},
        }}>

            <Box>

            <Typography
            component='h1'
            className='title4 flex center items-center '
            sx={{
                color:'white',
                background:bg
                ,padding:1.5,
                borderRadius:'50%',
                width:'25px',
                height:'25px',
                textAlign:'center'}}
            >
                1
            </Typography>
            </Box>

            <Box className='flex col'>

            <Typography
            component='h1'
            className='title4'
            >
                Web Development
            </Typography>
            <Typography
            component='p'
            sx={{pt:'.25em'}}
            className='desc4'
            >
                Web Development related shit, related shit related shit related shit
            </Typography>
            </Box>

                </Box>
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
                    py: '2em'
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
                        mt:3,
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
                        <Card bg={'#11b521'} title=""/>
                        </Box>
                    </Box>
                </Grid>
              
            </Grid>
            <Divider></Divider>
        </Box>

    )
}

export default Index