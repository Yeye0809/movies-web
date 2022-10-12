import React from 'react'
import { PopularMovies } from './PopularMovies'
import { PopularSeries } from './PopularSeries'


export const ScreenMovies = () => {
  return (
    <div className='col-8'>
      <div className='container'>
        <PopularMovies />
        <hr/>
        <PopularSeries />     
      </div>
    </div>
  )
}
