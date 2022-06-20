import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import React from 'react'
import Loader from './Loader'

const SimilarExercises = ({equipmentExercises, targetMuscleExercises, setExerciseVideos}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>
        Exercises that Target the same Muscle group
      </Typography>
      <Stack direction='row' mb={8} sx={{p: '2', position:'relative'}}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollBar data={targetMuscleExercises} isBodyPart={false} />
          : <Loader/>
        }
      </Stack>
      <Typography variant='h3' mb={5}>
        Exercises with the same Equipment
      </Typography>
      <Stack direction='row' mb={8} sx={{p: '2', position:'relative'}}>
        {equipmentExercises.length ? 
          <HorizontalScrollBar data={equipmentExercises} isBodyPart={false} setExerciseVideos={setExerciseVideos} />
          : <Loader/>
        }
      </Stack>

    </Box>
  )
}

export default SimilarExercises