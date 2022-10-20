import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScreenRatedFilms } from '../components/Films/ScreenRatedFilms'
import { ScreenRatedSeries } from '../components/Series/ScreenRatedseries'

export const TopRatedRouter = () => {
  return (
    <div className='col-8'>
        <Routes>
            <Route path='films' element={<ScreenRatedFilms />}/>
            <Route path='series' element={<ScreenRatedSeries />}/>
        </Routes>
    </div>
  )
}
