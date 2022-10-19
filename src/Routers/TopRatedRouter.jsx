import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScreenRatedFilms } from '../components/Films/ScreenRatedFilms'

export const TopRatedRouter = () => {
  return (
    <div className='col-8'>
        <Routes>
            <Route path='films' element={<ScreenRatedFilms />}/>
        </Routes>
    </div>
  )
}
