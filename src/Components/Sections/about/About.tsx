import {Typography, Box, Divider} from "@mui/material"
import { useEffect } from "react"
import gsap from 'gsap';


const About = () => {
    useEffect(() => {
        gsap.to('.text-1',{opacity:1,duration:1,scrollTrigger:{
            trigger : '.text-1',
            start : '0% 40%'
        }})
    }, [])
    
    return (
        <>

<Box id='about' className='mx'>

            <Typography
            className='text-1 translate op0'
                sx={{
                    maxWidth:'900px',
                    fontSize: {
                    xs: '1.8em',
                    sm: '2.4em',
                    md: '2.6em'
                },
                px: '1em',
                textAlign: 'left',
                py: '2em',
                fontWeight: '600'
            }}
                component='h2'>
{/* 
                Despite being small, we deliver great results.
                OnBeirut focuses on helping small and medium bussiness achieve the success they strive,
                what does this mean? We simple develop personalized, high performance websites that 
                attracts customers, sales, leads to you; all for an insignificant cost, afterall, we are here
                to help you grow and not increase your expenses.  */}
                Put in simple words, we are a Lebanon/Beirut-based web development agency,
                we create all kinds of web solutions from simple websites to small e-shops to complex web applications.
                <br/>
               Our goal is to create online presense, followed by major success for small and medium business
                that are unable to pay hundreds of dollars, instead we offer you the lowest cost, highest quality 
                results that you desire and your business deserves.
            </Typography>
        </Box>
        <Divider></Divider>
        </>
    )
}

export default About