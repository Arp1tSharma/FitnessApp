import React from 'react'
import { Box, Stack , Typography } from '@mui/material' 
import Loader from './Loader'

const ExerciseVideos = ({name, exerciseVideos}) => {
  console.log(exerciseVideos);
  if(!exerciseVideos.length){
    return <div  style={{display: 'flex', alignItems:'center', justifyContent:'center', width:'100%',height:'100vh',position:'absolute', top:'0'}}>
    <div style={{width:'200px', height:'10%', background:'rgba(0,0,0,0.2)' }}>
      <Loader/>

    </div>
    </div>
  }
  return (
    <Box sx={{marginTop: {lg:'200px', xs:'20px'}}} p="20px">
      <Typography variant='h3' mb='50px'>
      Watch <span style={{color:"#ff2625", textTransform:'capitalize'}} >{name}</span> exercise Videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
      sx={{flexDirection: {lg:'row'},
      gap: {lg: '100px', xs:'40px'}}}
      >
        {exerciseVideos?.slice(0,6).map((item,index)=>{
          return <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
          >
          <img src={item.video.thumbnails[0].url} alt={item.video.id}/>
          <Box>
            <Typography variant='h5' color="#000">
              {item.video.title.length > 40 ? item.video.title.slice(0,40)+"...": item.video.title}
            </Typography>
            <Typography variant="h6" color="gray">
              {item.video.channelName}
            </Typography>
          </Box>
          </a>
        })}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos