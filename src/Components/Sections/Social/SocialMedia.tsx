import { Box, IconButton } from '@mui/material'
import {AiFillFacebook ,AiOutlineInstagram ,AiOutlineShareAlt  } from 'react-icons/ai'
import {IoLogoWhatsapp } from 'react-icons/io'

const SocialMedia = () => {
  return (
    <Box className='mx center flex items-center' sx={{gap:'1em',py:1.5,px:'1em'}}>
        <IconButton sx={{color:'#3b5998',fontSize:'1.5em'}}>
            <AiFillFacebook/>
            
        </IconButton>
        <IconButton sx={{color: '#830092',fontSize:'1.5em'}}>
            <AiOutlineInstagram/>
        </IconButton>
        <IconButton sx={{color:'#039703',fontSize:'1.5em'}}>
            <IoLogoWhatsapp/>
        </IconButton>
        <IconButton sx={{color:'black',fontSize:'1.5em'}}>
            <AiOutlineShareAlt/>
        </IconButton>
        
    </Box>
  )
}

export default SocialMedia