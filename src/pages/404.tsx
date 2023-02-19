import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <Box sx={{width:'100%',textAlign:'center',mt:'4em',display:'flex',flexDirection:'column',fontSize:'2em'}} >404 not found!

        <Link href='/'>Go Home</Link>
    </Box>
  )
}

export default Index