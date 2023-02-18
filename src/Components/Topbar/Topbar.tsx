import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {VscMenu} from 'react-icons/vsc'
import Link from 'next/link';
import { Typography ,Toolbar ,Box,IconButton } from '@mui/material';
import CustomButton from '../Buttons/CustomButton';
import Logo from '../Logo/Logo';






export default function ButtonAppBar() {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        window.pageYOffset >= 80 ? setVisible(true) : setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])
  return (
    <Box
    className='bg'
    sx={{ flexGrow: 1 }}>
      <AppBar 
    className='bg flex mx'
      sx={{color:'white',py:'1em',width:'100%',boxShadow:'none'}}
      position="static">
        <Toolbar className='' sx={{justifyContent:'space-between'}}>
          <Logo/>
          <Box className='topbar-links'
           sx={{mr:'1em',display:{xs:'none',md:'flex'}}}>
            <Link href='#pricing'>
              <Typography  component='p'>Our Pricing</Typography>
            </Link>
          </Box>
          {/* <CustomButton className='bg' sx={{padding:0,display:{xs:'flex',md:'flex'},mx:'.5em'}} variant='standard'>
          Button
          </CustomButton> */}
          <Link href='#contact'>

          <CustomButton sx={{display:{xs:'none',sm:'flex'}}}>
            Contact Us
          </CustomButton>
          </Link>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{display:{xs:'flex',md:'none'}, ml: 1 }}
          >
            <VscMenu />
          </IconButton>
        </Toolbar>
      </AppBar>




      <AppBar 
      className='br'
      sx={{background:'white',
      color:'black',
      display:isVisible ? 'flex' : 'none'
      
      ,width:'100%',boxShadow:'none'}}
      position="fixed">
        <Toolbar sx={{justifyContent:'space-between'}}>
          
          <Logo flex={{xs:1,md:0}} color='black'/>
          <Box className='topbar-links gap-2'  sx={{fontWeight:'300',fontSize:'1.3em',flex:1,ml:5,display:{xs:'none',md:'flex'}}}>
            <Link className='black'  href={'/'}>Home</Link>
            <Link className='black'  href={'#about'}>About</Link>
            <Link className='black'  href={'#pricing'}>Pricing</Link>
            <Link className='black'  href={'#portfolio'}>Projects</Link>
          </Box>
          {/* <Box className='topbar-links' sx={{xs:'none',md:'flex'}}>
            <Link href='/'>
              <Typography>Some Link</Typography>
            </Link>
          </Box> */}
          {/* <CustomButton
           sx={{color:'black',display:{xs:'none',md:'flex'},mx:'.75em'}} variant='v3'>
            Our Pricings
          </CustomButton> */}
          <Link href='#contact'>
          <CustomButton sx={{display:{xs:'none',sm:'flex'}}}>
          Contact Us
          </CustomButton>
          </Link>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{display:{xs:'flex',md:'none'}, ml: 2 }}
          >
            <VscMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
