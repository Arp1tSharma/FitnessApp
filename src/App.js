import React from 'react'
import "./App.css"
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './Home'
import ExerciseDetail from './ExerciseDetail'

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App