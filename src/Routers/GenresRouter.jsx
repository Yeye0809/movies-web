import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScreenGenresFilms } from '../components/Pages/ScreenGenresFilms'
import { ScreenGenresSeries } from '../components/Pages/ScreenGenresSeries'

export const GenresRouter = () => {
  return (
    <Routes>
        <Route path='films/:id' element={<ScreenGenresFilms />}/>
        <Route path='series/:id' element={<ScreenGenresSeries />}/>
    </Routes>
  )
}
