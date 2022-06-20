import { Box , Stack, Typography} from '@mui/material'
import React from 'react'

import logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80x" bgcolor="#fff3f4">
    <Stack gap="40px" alignItems='center' px='40px' pt='24px'>
      <img src={logo} alt='logo' width='200px' height='40px' />
      <Typography variant='h6' pb='40px' mt='20px'>
        ©{new Date().getFullYear()} made with 💪 by Arpit. 
      </Typography>
    </Stack>
    </Box>
  )
}

export default Footer