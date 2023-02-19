import {Box, IconButton} from '@mui/material'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineShareAlt} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
const footerSocial = [
    {
        sx:{color: '#830092',fontSize:'1.5em'},
        Icon: AiOutlineInstagram,
        href: 'https://www.instagram.com/onbeirut/'
    }, {
        
        Icon: AiFillFacebook,
        href: 'https://www.facebook.com/profile.php?id=100090492667789'
    }, {
        sx:{color:'#039703',fontSize:'1.5em'},
        Icon: IoLogoWhatsapp,
        href: 'https://wa.me/96181826445'
    }
]
const SocialMedia = ({sx} : {
    sx?: any
}) => {
    return (
        <Box
            className='mx center flex items-center'
            sx={{
            gap: '1em',
            py: 1.5,
            px: '1em',
            ...sx
        }}>

            <IconButton
            sx={{color:'black',fontSize:'1.5em'}}
                onClick={() => navigator
                ?.clipboard
                    ?.writeText('https://www.onbeirut.com')}>
                <AiOutlineShareAlt/>
            </IconButton>
            {footerSocial.map(link => {
                if (!link.Icon) 
                    return;
                
                return <a rel="noreferrer" target="_blank" key={link.href} href={`${link.href}`}>
                    <IconButton
                        sx={link?.sx || {
                        color: '#3b5998',
                        fontSize: '1.5em'
                    }}>
                        <link.Icon/>
                    </IconButton>
                </a>
            })}

            {/* <IconButton
         sx={{color: '#830092',fontSize:'1.5em'}}>
            <AiOutlineInstagram/>
        </IconButton>
        <IconButton sx={{color:'#039703',fontSize:'1.5em'}}>
            <IoLogoWhatsapp/>
        </IconButton>
        <IconButton sx={{color:'black',fontSize:'1.5em'}}>
            <AiOutlineShareAlt/>
        </IconButton> */}

        </Box>
    )
}

export default SocialMedia