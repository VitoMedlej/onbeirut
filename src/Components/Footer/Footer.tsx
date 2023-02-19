import {Divider, Grid,Box, Typography } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import {FaBusinessTime} from 'react-icons/fa'
import {AiFillPhone,AiOutlineMail} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'

const footerLinks =[{title:'Home', href:'/'}, {title:'Pricing',href:'#pricing'}, {title:'About',href:'#about'},{title:'Portfolio',href:'#portfolio'}]
const footerMedia = [{title:'Email',value:'vito.medlej@gmail.com',icon:AiOutlineMail},
{title:'Phone',icon:AiFillPhone,value:'+961/ 81826445'},
{title:'Location',value:'Lebanon/Beirut',icon:ImLocation2}
,{title:'Open Days',value:'Open 24/7',icon:FaBusinessTime}]
const footerSocial = [{title:'Instagram',href:'https://www.instagram.com/onbeirut/',value:'onbeirut'},{
  
  title:'Facebook',value:'OnBeirut',href:'https://www.facebook.com/profile.php?id=100090492667789'},{title:'Whatsapp',value:'+961/ 81826445',href:'https://wa.me/96181826445'},
{title:'LinkedIn',href:'https://www.linkedin.com/company/onbeirut/',value:'onBeirut'}]

const Footer = () => {
  return (
    <footer className='bg'>
      <Divider color='gray'/>

        <Grid sx={{py:3,px:1}} container className='gap mx auto flex  center items-between' >
        <Grid sx={{mb:1}}  className='' xs={12} sm={12} md={3.6} item>
          <Logo/>
        <Typography className='desc3' sx={{fontSize:'.9em'}} component='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quaerat doloribus quasi blanditiis voluptates fugiat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quaerat doloribus quasi blanditiis voluptates fugiat.
        </Typography>
              
        </Grid>
            <Grid  xs={12} sm={6} md={1.9} item>
                <Box >
                  <Typography component='h5' className='footer-title'>
                          Internal Links
                  </Typography>
                  <ul className='footer-links' style={{listStyle:'none'}}>
                    {footerLinks.map((link) => <li key={link.title}>
                        <Link href={`${link.href}`}>
                              {link.title}
                        </Link>
                    </li>)}
                  </ul>
                </Box>
            </Grid>
            <Grid  xs={12} sm={6} md={1.9} item>
                <Box >
                  <Typography component='h5' className='footer-title'>
                          Follow Us
                  </Typography>
                  <ul className='footer-links' style={{listStyle:'none'}}>
                    {footerSocial.map((link) => <li className='flex gap grayed' key={link.title}>

                        <Typography component='h6' sx={{fontSize:'.9em'}}>
                          {link.title}:
                        </Typography>
                        {link.href ? <a rel="noreferrer"   target="_blank" href={link.href}  className='white'>
                              {link.value}
                        </a> : <Typography component='h6' sx={{fontSize:'1em'}}>
                          {link.value}
                        </Typography>}
                    </li>)}
                  </ul>
                </Box>
            </Grid>
            <Grid  xs={12} sm={6} md={2.5} item>
                <Box >
                  <Typography component='h6' sx={{fontSize:'.9em'}} className='footer-title'>
                          Social Media
                  </Typography>
                  <ul className='footer-links' style={{listStyle:'none'}}>
                    {footerMedia.map((link) => <li className='flex gap grayed' key={link.title}>
                        
                        {/* <Typography component='h6' sx={{fontSize:'.9em'}}>
                          {link.title}:
                        </Typography> */}
                        <>
                        <link.icon/>
                        </>
                        <Typography component='h6' className='white'>
                              {link.value}
                        </Typography>
                    </li>)}
                  </ul>
                </Box>
            </Grid>
            
        </Grid>
    </footer>
  )
}

export default Footer