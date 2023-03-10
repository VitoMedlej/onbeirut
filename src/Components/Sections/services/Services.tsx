
import {Box, Divider, Grid, Typography} from '@mui/material'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import CustomButton from '@/Components/Buttons/CustomButton'
import Link from 'next/link'



const Card = ({mobile,bg,n,titleLink,className,title,text,right,top,sx,bottom,left}:{titleLink:string,className:string,mobile?:boolean,n?:string|number,right?:any,bottom?:any,sx?:any,top?:any,left?:any,title:string,text:string,bg:string}) => {
    return (
        <Box 
        className={`${className} shadow op0 translate `}
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
            component='h2'
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
        <a 
        className='link-title black'
        rel="noreferrer"
        target="_blank" href={titleLink}>

            <Typography
            component='h1'
            className='title4'
            >
                {title}
            </Typography>
                </a>
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
        gsap.to('.serviceimg',{opacity:1,duration:'1',scrollTrigger:{trigger:'.sect'}})
        gsap.to('.card1',{opacity:1,delay:.35,duration:'.5',scrollTrigger:{trigger:'.card1',start:'40% 70%',markers:false}})
        gsap.to('.card2',{opacity:1,delay:.45,duration:'.5',scrollTrigger:{trigger:'.card1',start:'40% 70%',markers:false}})
        gsap.to('.card3',{opacity:1,delay:.55,duration:'.5',scrollTrigger:{trigger:'.card1',start:'50% 70%',markers:false}})
    }, [])
    
    return (
        <Box id='Services'>
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

            className='bg services-section'
            sx={{
                // background: '#00ff1875',
                zIndex:'4124'
            }}
            container>
                <Grid
                         className=' mx sect'
                
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
                         className='relative mx serviceimg op0 '
                            sx={{
                               
                                transform:{xs:'translateY(-1em)',md:'translateY(-4em)'},
                                width:'95%',
                                height:'100%',
                            margin : '0 auto',
                            mt:'4em',
                          
                        }}>
                               <Box className='layer border  ' />
                            <img
                                src={`https://yi-files.s3.eu-west-1.amazonaws.com/products/983000/983190/1652411-full.jpg`} alt="Image of website desgin"
                                className="img cover border  "/>
                        {/* <Card bg={'#11b521'} title=""/>
                        <Card 
                        top={{xs:'20%',md:'15%'}}
                        left={''} bg={'#11b521'} title=""/> */}
                      
                     
                             <Card 
                            titleLink='https://www.sanity.io/static-websites'

                             n={'1'}
                            className={'card1'}
                        top={'15%'}
                        left={'-2%'}
                       
                        bg={'#562d2d'} 
                        title="Static Websites"
                        text="If you want a couple of pages and don't need the data to change. We build them really quick! They're simple, cheap, and really
                        nice looking!"
                        />
                           <Card 
                             n={'3'}
                            className={'card3'}
                            titleLink='https://www.pnjsharptech.com/blog/a-tour-to-explore-importance-benefits-and-amazing-facts-about-dynamic-website/'
                             bottom={'-5%'}
                             right={'2%'}
                             bg={'#004886'} 
                             title="Dynamic Websites"
                        text={'If your data regularly, you can update it whenever you like. We develop them from scratch so you get the fastest and best results possible.'}
                        />
                             <Card 
                             n={'2'}
                            className={'card2'}
                             titleLink='https://www.ecwid.com/blog/what-is-ecommerce-website.html'
                        top={'10%'}
                        right={'4%'}
                        text={`Have a store and want to sell online? We build fast online shops and
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
                            className={'card1'}
                            titleLink='https://www.sanity.io/static-websites'
                          title="Static Websites"
                          text="If you want a couple of pages and don't need the data to change. We build them really quick! They're simple, cheap, and really
                          nice looking!"
                        mobile
                        n={1}
                        bg={'#562d2d'} />
                        <Card 
                            className={'card2'}
                            titleLink='https://www.ecwid.com/blog/what-is-ecommerce-website.html'

                        n={2}    text={`Have a store and want to sell online? We build fast online shops and
                        can differentiate it from any other boring e-stores, best way to increase sales.
                        `}
                        title="Ecommerce sites"

                            mobile
                            bg={'#3b1f74'} />
                             <Card 
                            className={'card3'}
                            titleLink='https://www.pnjsharptech.com/blog/a-tour-to-explore-importance-benefits-and-amazing-facts-about-dynamic-website/'

                            title="Dynamic Websites"
                            text={'If your data regularly, you can update it whenever you like. We develop them from scratch so you get the fastest and best results possible.'}
                            mobile
                            n={3}
                            bg={'#004886'}
                             />
                            </Box>
                </Grid>
                <Grid item  xs={12}>
                    <Box  sx={{mb:'6em !important'}} className='gap mx center auto flex col'>
                        <Typography  component='h2' className='desc3'>
                    Need something different?
                        </Typography>
                        <Link className='decor-none' style={{height:'max-content'}} href='#contact'>

                <CustomButton >
                            Tell Us Your Needs
                </CustomButton>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Divider></Divider>
        </Box>

    )
}

export default Index