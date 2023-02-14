import CustomButton from '@/Components/Buttons/CustomButton'
import {Box, Grid, Typography} from '@mui/material'

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
                        <Grid xs={6}  item>
                                <Box className='shadow price-card' sx={{px:{xs:1,sm:1.5,md:2},py:2}}>
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
                                </Box>
                        </Grid>
                        <Grid xs={6}  item>

                        </Grid>
                        <Grid xs={12}  item>

                        </Grid>
            </Grid>
            </Box>
          
        </Box>
    )
}

export default Index