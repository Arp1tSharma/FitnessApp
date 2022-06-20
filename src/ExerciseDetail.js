import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from './components/Detail'
import ExerciseVideos from './components/ExerciseVideos'
import SimilarExercises from './components/SimilarExercises'

import { exerciseOptions, fetchData , youtubeOptions } from './utils/fetchData'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState({});
  const [equipmentExercises, setEquipmentExercises] = useState({});

  const {id} = useParams();
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
    const fetchExerciseDetil = async () => { 
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name+" "+exerciseDetailData.target+" exercise"}`, youtubeOptions);
      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideosData.contents);
      setTargetMuscleExercises(targetMuscleExerciseData);
      setEquipmentExercises(equipmentMuscleExerciseData);
    }
    fetchExerciseDetil();
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} setExerciseVideos={setExerciseVideos} />
    </Box>
  )
}

export default ExerciseDetail