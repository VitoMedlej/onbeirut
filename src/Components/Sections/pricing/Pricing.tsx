import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Button, Grid, Typography} from '@mui/material'
import Link from 'next/link';

import { BsArrowUpRight} from 'react-icons/bs';


interface IPlanCard {
    price : number
    title : string;
    planFeatures : string[];
    description : string;
    bg?:string;
    height ?: {xs?:string,sm?:string,md?:string}
}
const PlanCard = ({
    price,
    title,
    height,
    description
    ,planFeatures,
    bg
}
:IPlanCard) => {
      
        
    return (
        <Box
            sx={{
            position : 'relative',
            textAlign: 'left',
            backgroundImage:bg || 'linear-gradient(135deg,rgba(221,125,207,.1),hsl(288deg 100% 35% / 28%))',
            width: '100% !important',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            borderRadius: '7px',
            height : height ? height : 'auto' 
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
                    fontSize:{xs:'.9em',sm:'1em'},
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
            <Link
            // variant='v3'
            className='flex row center gap'
            href={`/?plan=${title}#contact`}
            // onClick={()=>router.push(`/?s=contact&plan=${title.en}`)}
       style={{
                // color:'black',
                textDecoration: 'none',
                marginTop: '1em',
                marginBottom: '2em',
            }}
                >
                   
                <Typography sx={{fontWeight: '400',}} component='h4'>
                Get Started
                </Typography>
                <BsArrowUpRight/>
                </Link>
            <Box className='list'>

                <Typography
                component='p'
                    sx={{
                        fontSize:{xs:'.9em',sm:'1em'},
                        color: '#707070'
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
        <Box 
        id='pricing'
        
        sx={{
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
                                    Our Services Are Priced Perfectly.
                        </Typography>
                        <Typography
                        
                            component='p'
                            sx={{
                            maxWidth: 'md',
                            pb: {
                                xs: '.15em',
                            },
                        }}
                            className='desc2'>
                                    Find better prices and get 100% off.
                        </Typography>
               



            <Grid container sx={{
                    justifyContent: 'space-between',
                mt:{xs:'2.5em',sm:'4em'}}}>
                        <Grid xs={12} sm={6}  item>
                               <PlanCard
                                height={{xs:'100%',md:'540px'}}

                               price={24.99}
                               title='Basic Service Plan'
                               description={`Ideal for new businesses or individuals planning to start a new business. Helps build credibility.`}
                               planFeatures={['2 Pages website','Simple but effective desgin','Free simple Logo','Low risk, high value investment','Simple CMS interface'
                               
                               ,'3 free month maintenance']}
                               />
                     
                        </Grid>
                        <Grid xs={12} sm={5.9}
                        sx={{mt:{xs:2,sm:0}}}
                        item>
                        <PlanCard
                               bg={'linear-gradient(135deg,rgb(51 121 255 / 10%),hsl(237deg 100% 50% / 45%))'}
                               height={{xs:'100%',md:'540px'}}

                               price={39.99}
                               title='Advanced Service Plan'
                               description={`Great for small-medium businesses that want to increase sales, customers, or building their online presence.`}
                               planFeatures={['4 Pages website/web application','Custom & advanced desgin','SEO optimized','Free domain + hosting','Full content control','6 month maintenance']}
                               />
                        </Grid>
                        <Grid xs={12} sx={{mt:2}} item>
                        <PlanCard
                            bg={` linear-gradient(135deg,rgb(255 226 0 / 10%),hsl(53deg 100% 45% / 52%))`}
                               price={79.99}
                               title='Ultimate Service Plan'
                               description={`This customized service plan is great for any type of business that requires high & guaranteed efficiency.`}
                               planFeatures={['8 pages web application ','Full control over desgin','Full SEO optimization','Free domain + hosting','Custom functionalities','Enterprise-level marketing data and analytics','12 month Support & maintenance']}
                               />
                        </Grid>
            </Grid>
            </Box>
          
        </Box>
    )
}

export default Index