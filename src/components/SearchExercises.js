import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({bodyPart, setBodyPart, setExercises}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();
  }, [])
  
  const handleSearch = async () => { 
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const searchedExercises = exerciseData.filter((exercise)=> exercise.name.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)||exercise.target.toLowerCase().includes(search)||exercise.equipment.toLowerCase().includes(search))
      setSearch('');
      setExercises(searchedExercises)
      window.scrollTo({top:1800, behavior: 'smooth'})
    }
  }
  return (
    <Stack justifyContent="center" p="20px" alignItems="center" mt="37px">
      <Typography fontWeight={700} sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      mb="50px"
      textAlign="center"
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
          sx={{
            input:{fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: {lg:'850px', xs: '350px'},
            backgroundColor: "#fff",
            borderRadius: '40px'
          }}
          height="76px"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='search-btn'
          sx={{bgcolor: "#ff2625", color:'#fff', textTransform: 'none',
          width:{lg:'175px', xs:'80px'},
          fontSize: {lg: '20px', xs:'14px'},
          height: '56px',
          position: "absolute",
          right:'0'}}
          onClick={handleSearch}
        >
          Search
        </Button>

      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true} />
      </Box>
    </Stack>
  )
}

export default SearchExercises