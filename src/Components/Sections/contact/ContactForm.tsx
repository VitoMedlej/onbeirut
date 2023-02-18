import {Box, Button, TextField, Typography} from '@mui/material'
import {useRouter} from 'next/router'
import React, {useContext, useRef, useState} from 'react'
// import Dots from '../Desgin/Dots'
// import {lang} from '../Navbar/Navbar'
// import Typography from '../Typographygraphy/Typography'
import emailjs from '@emailjs/browser';
import CustomButton from '@/Components/Buttons/CustomButton';

const contacts = [
    {
        title: {
            en: 'Email',
            ar: 'ايميل'
        }

    }
]
const Contact = () => {
    const form = useRef();
    const [details,
        setDetails] = useState({status: 0, error: ''})
    const [email,
        setEmail] = useState('')

    // const {l} = useContext(LangContext)

    const sendEmail = async(e : any) => {
        setDetails({status: 0, error: ''})

        e.preventDefault();

        if (!form.current) 
            return;
        let regexEmail = /^\S+@\S+\.\S+$/;
        if (!email || !email.match(regexEmail)) {
            setDetails({status: 400, error: 'Please Use a Valid Email Address'})
            console.log('return: ');
            return;
        }

        const req = await emailjs.sendForm(`service_eig2qxb`, 'template_gc3j6xq', form.current, '8qJYIm7toZyMq3yN_')
        const res = await req;
        if (res.status === 200) {
            setDetails({status: 200, error: 'Email sent successfully, thank you!'})
            return
        }
        setDetails({status: 400, error: 'We could not send your email, please try again.'})

    };
    return (
        <Box
            id='contact'
            sx={{
                color:'black',
                background:'white',
                padding:2,
                borderRadius:'8px',
            mx: {
                xs: 0,
                md: '1em'
            },
            mb: '5em',
            
            position: 'relative'
        }}>
            <Box
                sx={{
                top: '-23%',
                left: '-5%',
                display: {
                    xs: 'block',
                    md: 'none'
                }
            }}
                // color='#6000a9'
                />
            <Box
                sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row-reverse'
                },
                justifyContent: {
                    xs: 'center',
                    md: 'space-between'
                }
            }}
                className='mw'>

                {/* <Box
                    sx={{
                    position: 'relative',
                    width: '100%'

                }}>
                    <Box
                        sx={{
                        top: '-23%',
                        left: '-5%',
                        display: {
                            xs: 'none',
                            md: 'block'
                        }
                    }}
                        color='#6000a9'/>
                
                     <Box
                        className='mw'
                        sx={{
                        display: 'flex',
                        gap: '1em',
                        flexWrap: 'wrap',
                        justifyContent: {
                            xs: 'center',
                            sm: 'left'
                        },
                        textAlign: 'center',
                        pt: '1.5em'
                    }}>

                        <Box
                            sx={{
                            display: 'flex',
                            gap: '.5em'
                        }}>
                            <Typography
    component='h1'
sx={{
                                fontWeight: '600'
                            }}>
                                Email:
                            </Typography>

                            <Typography >
                            simplebeirutweb@gmail.com
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            gap: '.5em'
                        }}>
                            <Typography
                                sx={{
                                fontWeight: '600'
                            }}>
                                Phone:
                            </Typography>
                            <Typography >
                            +961 81/826445
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            gap: '.5em'
                        }}>
                            <Typography
                                
                                sx={{
                                fontWeight: '600'
                            }}>
Location:
                            </Typography>
                            <Typography>
                            Lebanon/Beirut
                            </Typography>
                        </Box>

                    </Box> 
                </Box> */}
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
                    alignItems: {
                        xs: 'center',
                        // md: lang('baseline', 'end', l)
                    },
                    width: {
                        xs: '100%',
                    },
                    maxWidth: '700px',
                    borderRadius: '9px',
                    // textAlign: lang('left', 'right', l)
                }}>
                    <Typography  className='title3' component='h1' >
                    Contact Us
                    </Typography>
                    <Typography
                    className='gray'
                        sx={{
                        // color: '#000000b8',
                        pt: '.25em',
                        px:'.25em'
                    }}
                        
                        >
                            Send us a message and we will respond to you within an hour.
                        </Typography>

                    <Typography
                        
                        sx={{
                        color: details.status === 200
                            ? 'white'
                            : ' red',
                        background: details.status === 200
                            ? '#238c23'
                            : ' pink',
                        width: '100%',
                        textAlign: 'center',
                        mt: '1em',
                        opacity: details.error.length > 1
                            ? 1
                            : 0
                    }}>
                        {details.error}
                    </Typography>
                    <Box
                        ref={form}
                        onSubmit={sendEmail}
                        component='form'
                        sx={{
                          
                        display: 'flex',
                        mt: '2em',
                        flexDirection: 'column',
                        gap: '1.25em',
                        width: '100%',
                        position: 'relative',
                        justifyContent: 'right'
                    }}>
                        <Box
                        className='form'
                            sx={{
                            top: '105%',
                            left: '-8%',
                            display: {

                                xs:'none',
                                md: 'block'
                            }
                        }}
                            // color='#02010182'
                            />
                        <TextField
                            type='text'
                            name='Name'
                            id="outlined-basic1"
                            label={'Name'}
                            variant="outlined"/>
                        <TextField
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type='email'
                            name='Email'
                            id="outlined-basic2"
                            label={'Email Address'}
                            variant="outlined"/>
                        <TextField
                            type='text'
                            name='Phone'
                            id="outlined-basic3"
                            label={'Phone Number'}
                            variant="outlined"/>
                        <TextField
                            type='text'
                            name='Message'
                            id="outlined-basic4"
                            rows={4}
                            multiline={true}
                            label={'Message'}
                            variant="outlined"/>
                        <Box
                            sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'inherit'
                            },
                            width: '100%'
                        }}>
                            <CustomButton  className='btn b1'>
                                Submit
                            </CustomButton>

                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Contact