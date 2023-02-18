import {Typography, Box, Divider} from "@mui/material"

const About = () => {
    return (
        <>

<Box id='about' className='mx'>

            <Typography
                sx={{
                    maxWidth:'md',
                    fontSize: {
                    xs: '1.9em',
                    sm: '2.4em',
                    md: '2.6em'
                },
                px: '1em',
                textAlign: 'left',
                py: '2em',
                fontWeight: '600'
            }}
                component='h2'>

                Despite being small, we deliver great results.
                OnBeirut focuses on helping small and medium bussiness achieve the success they strive,
                what does this mean? We simple develop personalized, high performance websites that 
                attracts customers, sales, leads to you; all for an insignificant cost, afterall, we are here
                to help you grow and not increase your expenses. 
            </Typography>
        </Box>
        <Divider></Divider>
        </>
    )
}

export default About