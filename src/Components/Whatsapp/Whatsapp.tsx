// import { Box, IconButton } from "@mui/material"
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsApp = () => {
    return (
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5em',
            zIndex: 125125,
            top: '88%',
            right: '2%',
            position: 'fixed'
        }}>
               <a style={{textDecoration:'none'}} className="flex" href='https://wa.me/+96181826445' target='_blank'   rel="noreferrer">

            <div
                className='shadow pointer'
                style={{
                background:'white',
                color:'black',
                boxShadow:'1px 1px 3px #00000033',
                padding: '1em.75em',
                borderRadius: '6px',
            }}>
                +961 81826445
            </div>
            {/* <IconButton
                sx={{
                ':hover': {
                    background: 'green'
                },
                background: 'green',
                color: 'white'
            }}>
                <WhatsAppIcon fontSize='large'/>
            </IconButton> */}
            <div style={{width:'60px',height:'60px'}}>
               
                <img style={{width:'100%',height:'100%'}} src="https://img.icons8.com/color/480/null/whatsapp--v1.png" alt="" />
            </div>
               </a>
        </div>
    )
}

export default WhatsApp