import React, { useEffect, useState } from 'react'
import { CardMoovie } from './CardMoovie'

export const PopularSeries = () => {

  const [popularSeries, setPopularSeries] = useState([]);

  const getPopularSeries = async()=>{
    const url = 'https://api.themoviedb.org/3/tv/popular?api_key=73c0b8a4dbda53191e7ac8e43ed8a8ec&language=en-US&page=1';
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
  }

  useEffect(()=>{
    getPopularSeries()
    .then(data => setPopularSeries(data.results))
  },[])

  
    
   
  return (
    <div className='container mt-5'>
      <h2>Popular Series</h2>
      <div className="row rows-cols-1 row-cols-md-2 g-3">
        {
          popularSeries.map(serie => (
            <CardMoovie key={serie.id} 
              title={serie.name} 
              vote={serie.vote_average}
              posterPath={serie.poster_path}/>
          ))
        }
       
      </div>        
    </div>
  )
}
 