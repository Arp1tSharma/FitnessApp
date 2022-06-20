import React from 'react'
import { Stack, Typography } from '@mui/material'

import icon from '../assets/icons/gym.png'

const BodyCard = ({ item, setBodyPart, bodyPart , isBodyPart }) => {
    return (
        <Stack type="button"
            alignItems="center"
            justifyContent='center'
            className='bodyPart-card'
            sx={
                {
                    borderTop: bodyPart === item ? '4px solid #ff2625' :'',
                    backgroundColor: "#fff",
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                }
            }
            onClick={()=>{
                setBodyPart(item);
                if(isBodyPart){
                    window.scrollTo({top:1800, left: 100, behavior: 'smooth'})
                }
                }}
        >
            <img src={icon} alt="dumbell" style={{ width: '40px', height: '40px' }} />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212"
            textTransform="capitalize"
            sx={{
                color: bodyPart === item ? '#ff2625' :'black'
            }}
            >
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyCard