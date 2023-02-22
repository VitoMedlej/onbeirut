
import {Box, Divider, Grid, Typography} from '@mui/material'

import React, { useEffect } from 'react'
import gsap from 'gsap'



const Card = ({mobile,bg,n,title,text,right,top,sx,bottom,left}:{mobile?:boolean,n?:string|number,right?:any,bottom?:any,sx?:any,top?:any,left?:any,title:string,text:string,bg:string}) => {
    return (
        <Box 
        className='shadow'
        sx={{
            height:'fit-content',
             display:mobile ? {xs:'flex',md:'none'} : {xs:'none',md:'flex'},
            my:'.25em',
            bottom : bottom !== undefined ? bottom : '',
            right : right !== undefined ? right : '',
            position:{md:'absolute'},
            top:top ,
            left:left ,
            zIndex:12412412,
            width:'100%',
          
     maxWidth:{md:'360px',lg:'400px'}
     ,background:'white',minHeight:'120px',
     ...sx}}>
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
                {n}
            </Typography>
            </Box>

            <Box className='flex col'>

            <Typography
            component='h1'
            className='title4'
            >
                {title}
            </Typography>
            <Typography
            component='p'
            sx={{pt:'.25em'}}
            className='desc4'
            >
                {text}
            </Typography>
            </Box>

                </Box>
        </Box>
    )
}
const Index = () => {
    useEffect(() => {
        gsap.to('.t-3',{opacity:1,duration:'.5',scrollTrigger:{trigger:'.t-3',}})
    }, [])
    
    return (
        <Box sx={{

        }}>
            <Box  
            className='mx'
            sx={{
                px: '1em'
            }}>

                <Typography
                    className='title2 t-3 op0 translate'
                    sx={{
                    py: '2em'
                }}>Services That We Master</Typography>
            </Box>
            <Grid

            className='bg'
            sx={{
                // background: '#00ff1875',
                zIndex:'4124'
            }}
            container>
                <Grid
                         className=' mx'
                
                xs={12}  item>
                    <Box
                        sx={{
                        // background: '#00ff1875',
                        mb:{md:'6em'},
                        mt:{md:3},
                        height: {xs:'220px',sm:'400px',md:'600px !important'},
                        width:'100%',
                    }}>
                     
                        <Box
                         className='relative mx'
                            sx={{
                               
                                transform:{xs:'translateY(-1em)',md:'translateY(-4em)'},
                                width:'95%',
                                height:'100%',
                            margin : '0 auto',
                            mt:'4em',
                          
                        }}>
                               <Box className='layer border' />
                            <img
                                src={`https://yi-files.s3.eu-west-1.amazonaws.com/products/983000/983190/1652411-full.jpg`} alt="Image of website desgin"
                                className="img cover border "/>
                        {/* <Card bg={'#11b521'} title=""/>
                        <Card 
                        top={{xs:'20%',md:'15%'}}
                        left={''} bg={'#11b521'} title=""/> */}
                      
                     
                             <Card 
                             n={'1'}
                            
                        top={'15%'}
                        left={'-2%'}
                       
                        bg={'#562d2d'} 
                        title="Static Websites"
                        text="If you need a couple of pages and don't need the data to change. We build them really quick! They're simple, cheap, and really
                        nice looking!"
                        />
                           <Card 
                             n={'3'}
                             bottom={'-5%'}
                             right={'2%'}
                             bg={'#004886'} 
                             title="Dynamic Websites"
                        text={'If your data regularly, you can update it whenever you like. We develop them from scratch so you get the fastest and best results possible.'}
                        />
                             <Card 
                             n={'2'}
                             
                        top={'10%'}
                        right={'4%'}
                        text={`Have a store and want to sell online? We build fast ecommerce sites and
                        can differentiate it from any other boring e-stores, best way to increase sales.
                        `}
                        title="Ecommerce sites"
                        bg={'#3b1f74'}
                        />
                        </Box>
                    </Box>


                    
                </Grid>
                <Grid item xs={12} md={0}>
                    <Box sx={{transform:'translateY(-30%)'}}>

                        <Card
                          title="Static Websites"
                          text="If you need a couple of pages and don't need the data to change. We build them really quick! They're simple, cheap, and really
                          nice looking!"
                        mobile
                        n={1}
                        bg={'#562d2d'} />
                        <Card 
                        n={2}    text={`Have a store and want to sell online? We build fast ecommerce sites and
                        can differentiate it from any other boring e-stores, best way to increase sales.
                        `}
                        title="Ecommerce sites"

                            mobile
                            bg={'#3b1f74'} />
                             <Card 
                            title="Dynamic Websites"
                            text={'If your data regularly, you can update it whenever you like. We develop them from scratch so you get the fastest and best results possible.'}
                            mobile
                            n={3}
                            bg={'#004886'}
                             />
                            </Box>
                </Grid>
              
            </Grid>
            <Divider></Divider>
        </Box>

    )
}

export default Index