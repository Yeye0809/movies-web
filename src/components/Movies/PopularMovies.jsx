import React, { useEffect} from 'react'
import { useFetchPopulrars } from '../../Hooks/useFetchPopulrars'
import { CardMoovie } from './CardMoovie'

export const PopularMovies = ({counter}) => {

  const {onGetPopularFilms, popularMovies} = useFetchPopulrars();


  useEffect(()=>{
   onGetPopularFilms({counter});
  },[counter]) 


  return (
    <div className='container'>
      <div className="row rows-cols-1 row-cols-md-2 g-3">
        {
          popularMovies?.map(movie => (
            <CardMoovie key={movie.id} 
              id={movie.id}
              posterPath={movie.poster_path}
              title={movie.title} 
              vote={movie.vote_average}
              />
          ))
        }
       
      </div>        
    </div>
  )
}
 
