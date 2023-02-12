import {Button} from '@mui/material'
import React from 'react'

const style1 = {
    color: 'white',
    background: '#0d2068',
    padding: '.55em 3.5em',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
        background: '#173092'
    },
    border: '1px solid transparent'
}
const style2 = {
    color: 'white',
    background: 'transparent',
    border: '1px solid transparent',
    
    // borderBottom: '1px solid white',
    fontSize: '14px',
    textTransform: 'none',
    padding: '.75em 2.5em',
    borderRadius: 0,
    '&:hover': {
        background: 'none',
        border: '1px solid'
    }
}
const CustomButton = ({className, children, sx, variant} : {
    sx?: any,
    children: any,
    className ?: string,
    variant?: string
}) => {
    const style = () => {
        if (!variant || variant === 'v1') {
            return style1
        }
        if (variant === 'standard') {
            return style2
        }
    }
    return (
        <Button
            className={className}
            sx={{
            ...style(),
            ...sx
        }}>
            <>
            {children}
            </>
            </Button>
    )
}

export default CustomButton