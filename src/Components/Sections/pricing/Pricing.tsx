import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Button, Grid, Typography} from '@mui/material'

import { BsArrowUpRight} from 'react-icons/bs';


interface IPlanCard {
    price : number
    title : string;
    planFeatures : string[];
    description : string;
}
const PlanCard = ({
    price,
    title,
    description
    ,planFeatures
}
:IPlanCard) => {
      
        
    return (
        <Box
            sx={{
            position : 'relative',
            textAlign: 'left',
            backgroundImage:'linear-gradient(135deg,rgba(221,125,207,.1),hsl(288deg 100% 35% / 28%))',
            width: '100% !important',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            borderRadius: '7px'
        }}>
            <Box sx={{
            padding:{xs:'1.5em',sm:'7%'},

            }}>

            <Typography
                sx={{
                fontWeight: 'bold',
                fontSize: '2em',
            }}
                >
                    {title}
                </Typography>
            <Typography
                sx={{
                    py:'.5em',
                    color: '#707070'
            }}
                >
                {description}
                    
                </Typography>
            <Typography
            component='h4'
                sx={{
                fontWeight: '200 !important',
                fontSize: '3.5em'
            }}
                >
                    ${price}
                </Typography>
            <CustomButton
            variant='v3'
            // onClick={()=>router.push(`/?s=contact&plan=${title.en}`)}
       sx={{
                // color:'black',
                
                mt: '1em',
                mb: '2em',
            }}
                className='btn b1'>
                <Typography sx={{fontWeight: '400',}} component='h4'>
                Get Started
                </Typography>
                <BsArrowUpRight/>
            </CustomButton>
            <Box className='list'>

                <Typography
                className='desc2'
                component='h5'
                    sx={{
                    fontWeight: '600'
                }}

                    >
                        Perks:
                    </Typography>

                <ul>
                    
                    {planFeatures.map((feature,idx:number)=>{

                       return <li  key={idx}>
                        <Typography component='p'>
                            {feature}
                        </Typography>
                    </li>
                    })}
                 
                   
                </ul>

            </Box>
            </Box>
        </Box>
    )
}


const Index = () => {
    return (
        <Box sx={{
            pb: '3em',
            mt:'6em'
        }}>
            <Box
                className='mx'
                sx={{
                pt: {
                    xs: '3em',
                    sm: '3.5em'
                },
                px: '1em'
            }}>


                        <Typography
                            component='h1'
                            sx={{
                            maxWidth: 'md',
                            pb: {
                                xs: '.15em',
                            },
                        }}
                            className='title2'>
                                    The Prices are really good bro
                        </Typography>
               



            <Grid container sx={{mt:{xs:'2.5em',sm:'4em'}}}>
                        <Grid xs={12} sm={6}  item>
                               <PlanCard
                               price={19.99}
                               title='Simple Plan'
                               description={`Browse our library of 400+ free lessons covering everything from layout and typography to interactions and 3D transforms`}
                               planFeatures={['first shit','cheap shit']}
                               />
                                {/* <Box className='shadow price-card' sx={{px:{xs:1,sm:1.5,md:2},py:2}}>
                                    <Typography component='h1' sx={{fontWeight:'700',fontSize:'2em'}}>
                                        Simple Plan
                                    </Typography>
                                    <Typography sx={{pt:.25,color:'#050505 !important'}} className='desc3'  component='p'>
                                    Browse our library of 400+ actions and 3D transforms.
                                     </Typography>
                                     <Typography sx={{pt:1.25,color:'black !important',fontWeight:'200 !important'}} className='title3'  component='h1'>
                                        $24.99
                                     </Typography>
                                <Box className='plan-perks' sx={{color:'#222222'}}>
                                    
                                    <ul>
                                        <li>gjas9f qwrjiqwjof qwijfiasf</li>
                                        <li>fooer</li>
                                        <li>fooer</li>
                                        <li>fooer</li>
                                    </ul>
                                </Box>
                                </Box> */}
                        </Grid>
                        <Grid xs={12} sm={6}  item>

                        </Grid>
                        <Grid xs={12}  item>

                        </Grid>
            </Grid>
            </Box>
          
        </Box>
    )
}

export default Index