import CustomButton from '@/Components/Buttons/CustomButton'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Intro = () => {
  return (
    <Box 
    className="bg "
    sx={{pb:'3em'}}>
        <Box 
        className='mx'
        sx={{color:'white',pt:{xs:'3em',sm:'3.5em'},px:'1em'}}>
<Grid container>

       <Grid item xs={12} md={8}>

        <Typography
        component='h1'
        sx={{maxWidth:'md',pb:{xs:'.55em',md:'1em'},pt:'1em'}} className='title'> 
            Give Us Your Fucking Money Now
        </Typography>
        </Grid>
        <Grid sx={{alignItems:{md:'center'},gap:{xs:'.75em',md:'1.25em'}}} className=' items-center flex col' item  xs={12} md={4}>
        <Typography 
        component='h3'
        className='desc1'>
        Your website should be a marketing asset, not an engineering challenge.
        </Typography>
        <CustomButton sx={{background:'white',color:'black',px:'1em'}}>
          Get One Today
        </CustomButton>
        </Grid>
        </Grid>
        
        </Box>
        <Box  >
          <Box sx={{width:'90%',height:'100%',pt:'4em'}} className="mx">
          <img style={{borderRadius:'7px'}} src="https://kangxiang.info/wp-content/uploads/2017/11/website-design-process-kl-selangor-scaled.jpg" alt="" className="img" />
          </Box>
        </Box>
    </Box>
  )
}

export default Intro