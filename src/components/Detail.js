import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import bodyPartImg from '../assets/icons/body-part.png';
import TargetImg from '../assets/icons/target.png';
import EquipmentImg from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

    const {name, bodyPart, gifUrl, target, equipment} = exerciseDetail;
    const extras = [
        {
            icon: bodyPartImg,
            name: bodyPart,
        },
        {
            icon: TargetImg,
            name: target,
        },
        {
            icon: EquipmentImg,
            name: equipment,
        }
    ]
  return (

    <Stack gap="60px"
    sx={{flexDirection: {lg:'row'},p:'20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
        <Stack sx={{gap: {lg:'35px',xs:'20px'}}}>
            <Typography variant='h3' textTransform='capitalize'>
                {name}
            </Typography>
            <Typography variant='h5'>
                Exercises keep you strong and fit.
                <br/>
                This {bodyPart} exercise: {name} is one of the best exercise to target your {target}. It wil help you improve your fitness and stamina.
            </Typography>
            {
                extras.map((item,ind) => (
                    <Stack key={ind}  direction='row' gap ="24px" alignItems='center'>
                        <Button sx={{background:'#fff2db', borderRadius: '50%', width:'100px', height:'100px',
                        }}>
                            <img src={item.icon} alt={item.name} />
                        </Button>
                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Stack>
  )
}

export default Detail