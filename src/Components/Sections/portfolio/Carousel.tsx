import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Box, Divider, Typography } from "@mui/material";


const projects = [{
    href : 'https://zekra.shop/',
    img : 'https://res.cloudinary.com/dwxm8f25f/image/upload/v1676374669/cl2_spggtq.jpg',
    title : 'Zerka Ecommerce Shop'
},{
    href : 'https://www.cashdelivery-lb.com/',
    img : 'https://res.cloudinary.com/dwxm8f25f/image/upload/v1676372659/cl1_ejmm1g.jpg',
    title : 'Cash Delivery Lebanon'
},


]
export default function App() {
  return (
    <>
      <Swiper
      slidesPerView={1}
      autoplay={{
        delay:3000,
        disableOnInteraction: true
    }}
      
      navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
   {projects && projects.map(project=>{

       return <SwiperSlide key={project.title}>

            <Box 
            className='center auto'
            sx={{background:'white',width:{xs:'100%',sm:'90%'},maxWidth:'1000px',pb:1,maxHeight:'500px'}}>
            <a href={project.href} target='_blank ' rel="noreferrer" >
                    <img className='img' src={`${project.img}`} alt={`${project.img} Image`} />
            </a>
            <Divider/>
            <Typography className='center auto flex items-center'  component='h1'>
                    {project.title}
            </Typography>
            </Box>
        </SwiperSlide>
        })}
        {/* <SwiperSlide>

<Box 
className='center auto'
sx={{background:'white',width:{xs:'100%',sm:'90%'},maxWidth:'1000px',maxHeight:'500px'}}>
<a href='/'>
        <img className='img' src="https://res.cloudinary.com/dwxm8f25f/image/upload/v1676372659/cl1_ejmm1g.jpg" alt="Portfolio Image" />
</a>
</Box>
</SwiperSlide> */}
   
      </Swiper>
    </>
  );
}