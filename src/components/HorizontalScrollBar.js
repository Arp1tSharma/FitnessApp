import { Box } from '@mui/material'
import React from 'react'
import BodyCard from './BodyCard'
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard'

const HorizontalScrollBar = ({data , bodyPart, setBodyPart , isBodyPart, setExerciseVideos}) => {
  return (
    <ScrollMenu>
        {data.map((item)=>{
            return <Box key={item.id || item}
                itemId = {item.id || item}
                title = {item.id || item}
                sx={{m:{lg:"0 40px", xs:"0 20px"}}}
            >
            {
              isBodyPart ? 
              <BodyCard item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true} setExerciseVideos={setExerciseVideos}/>
              :
              <ExerciseCard exercise={item} />
            }
            </Box>
        })}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar