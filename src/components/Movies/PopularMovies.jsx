import React, { useEffect, useState } from 'react'
import { CardMoovie } from './CardMoovie'

export const PopularMovies = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async()=>{
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=73c0b8a4dbda53191e7ac8e43ed8a8ec&language=en-US&page=1';
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
  }

  useEffect(()=>{
    getPopularMovies()
    .then(data => setPopularMovies(data.results))
  },[])


  return (
    <div className='container mt-5'>
      <h2>Popular Movies</h2>
      <div className="row">
        {
          popularMovies.map(movie => (
            <CardMoovie key={movie.id} 
              posterPath={movie.poster_path}
              title={movie.title} 
              date={movie.release_date}/>
          ))
        }
       
      </div>        
    </div>
  )
}
 