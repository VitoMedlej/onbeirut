import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {VscMenu} from 'react-icons/vsc'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Link from 'next/link';
import { Typography ,Toolbar ,Box,IconButton, Drawer, Divider } from '@mui/material';
import CustomButton from '../Buttons/CustomButton';
import Logo from '../Logo/Logo';
import SocialMedia from '../Sections/Social/SocialMedia';
import { useRouter } from 'next/router';



export const Navbar = ({isVisible,open,setOpen} : {open:boolean,isVisible: boolean,setOpen:any}) => {
return (
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
        <Link className='black'  href={'#Services'}>Services</Link>
        <Link className='black'  href={'#pricing'}>Pricing</Link>
        <Link className='black'  href={'#portfolio'}>Projects</Link>
        {/* <Link className='black'  href={'/faq'}></Link> */}
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
      <Link className='decor-none' href='#contact'>
      <CustomButton  sx={{display:{xs:'none',sm:'flex'}}}>
      Reach Us
      </CustomButton>
      </Link>
      {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography> */}
      {/* <Button color="inherit">Login</Button> */}
      <IconButton
        onClick={()=>setOpen(!open)}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{display:{xs:'flex',md:'none'}, ml: 2 }}
      >
        <VscMenu />
      </IconButton>
    </Toolbar>
  </AppBar>
)
}


export default function ButtonAppBar() {
  const [isVisible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const router= useRouter()
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
  const handleClick= async (state?:boolean,href?:string) => {
      router.push(`${href || '/'} `)
    
  }
  return (
    <>

  
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
          <Link className='decor-none' href='#contact'>

          <CustomButton  sx={{display:{xs:'none',sm:'flex'}}}>
            Reach Us
          </CustomButton>
          </Link>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          <IconButton
          onClick={()=>setOpen(!open)}
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{display:{xs:'flex',md:'none'}, ml: 1 }}
          >
            <VscMenu />
          </IconButton>
        </Toolbar>
      </AppBar>




<Navbar isVisible={isVisible} open={open} setOpen={setOpen} />     
    </Box>
    <Drawer
      anchor={'right'}
      open={open}
      onClose={()=>setOpen(false)}
    >
      <Box className="flex between center" sx={{width:'250px',px:.5}}>
      <Logo flex={{xs:1,md:0}} color='black'/>
      <IconButton
      onClick={()=>setOpen(false)}
            size="large"
            color="error"
            aria-label="menu"
            sx={{display:{xs:'flex'}, ml: 0 }}>
            <AiOutlineCloseCircle />
          </IconButton>
      </Box>
          <Divider/>
          <Box className='topbar-links gap-2 flex col'  sx={{mx:2,my:2,fontWeight:'300',fontSize:'1.3em',flex:1}}>
            <CustomButton
            onClick={()=>{handleClick();setOpen(false)}}
            variant='v2'
            
            className='black' >Home</CustomButton>
            <CustomButton className='black'  
            variant='v2'
            
            onClick={()=>{handleClick(false,'#about');setOpen(false)}}
            >About</CustomButton>
            
            <CustomButton
            variant='v2'

            onClick={()=>{handleClick(false,'#pricing');setOpen(false)}}
            className='black' >Pricing</CustomButton>
            <CustomButton
            variant='v2'
            onClick={()=>{handleClick(false,'#portfolio');setOpen(false)}}
            className='black' >Projects</CustomButton>
                 
                 <CustomButton

sx={{color:'white !important',width:'100% !important'}}

onClick={()=>handleClick(false,'#contact')}
              >
      Reach Us
            </CustomButton>
            

                 {/* <Link className='decor-none' href='#contact'>
      <CustomButton  sx={{width:'100% !important'}}>
      Reach Us
      </CustomButton>
      </Link> */}
          <SocialMedia sx={{margin:'0 !important',gap:.5,padding:'0 !important'}}/> 
          </Box>
    </Drawer>
    </>
  );
}
