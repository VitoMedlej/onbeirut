import {Typography, Box, Divider} from "@mui/material"

const About = () => {
    return (
        <>

<Box id='about' className='mx'>

            <Typography
                sx={{
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

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda
                consequatur architecto est explicabo, recusandae voluptatibus animi ab ipsum eos
                voluptates cumque tempore enim sed, quam sunt veniam, velit tenetur sequi?
                Soluta, nam impedit sunt unde reprehenderit similique totam perferendis odit
                harum a! Similique, odio.
            </Typography>
        </Box>
        <Divider></Divider>
        </>
    )
}

export default About