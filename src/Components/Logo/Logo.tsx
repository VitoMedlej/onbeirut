import { Box } from '@mui/material'
import React from 'react'

const Logo = ({flex,color}:{flex?:any,color?:'black' | 'white'}) => {
  return (
    <Box sx={{flex:flex !== undefined ? flex:  1}}>

    <Box sx={{width:'110px'}} className='flex'>
            <img src={color === 'black' ? `https://res.cloudinary.com/dwxm8f25f/image/upload/v1676654539/logoblack_o65q34.jpg`: `https://res.cloudinary.com/dwxm8f25f/image/upload/v1676630493/logov2_ryqwq4.jpg`} alt="Website Logo" className="img" />
          </Box>
    </Box>
  )
}

export default Logo