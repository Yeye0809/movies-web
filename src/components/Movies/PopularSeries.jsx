import React, { useEffect, useState } from 'react'
import { useFetchPopulrars } from '../../Hooks/useFetchPopulrars';
import { CardSerie } from './CardSerie';

export const PopularSeries = ({counter}) => {  

  const {onGetPopularSeries, popularSeries} = useFetchPopulrars();


  useEffect(()=>{
    onGetPopularSeries({counter})
  },[counter])

   
  return (
    <div className='container'>
      <div className="row rows-cols-1 row-cols-md-2 g-3">
        {
          popularSeries?.map(serie => (
            <CardSerie key={serie.id} 
              id={serie.id}
              title={serie.name} 
              vote={serie.vote_average}
              posterPath={serie.poster_path}/>
          ))
        }
       
      </div>        
    </div>
  )
}
 