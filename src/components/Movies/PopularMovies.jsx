import React, { useEffect, useState } from 'react'
import { CardMoovie } from './CardMoovie'

export const PopularMovies = ({counter}) => {

  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async()=>{
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=73c0b8a4dbda53191e7ac8e43ed8a8ec&language=en-US&page=${counter}`;
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
  }

  useEffect(()=>{
    getPopularMovies()
    .then(data => setPopularMovies(data.results))
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
 