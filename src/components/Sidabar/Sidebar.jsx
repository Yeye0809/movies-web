import React, { useEffect, useState } from 'react';

import './style.css';

export const Sidebar = () => {
  const [genres, setGenres] = useState([]);

  const getGenres = async()=>{
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=73c0b8a4dbda53191e7ac8e43ed8a8ec';
    const res = await fetch(url);
    const data = await res.json();

    return data
  }

  useEffect(()=>{
    getGenres()
    .then(data => setGenres(data.genres))
  }, [])


  return (
    <div className='col-2 p-5'>
        <div>
            <h3>Genres</h3>
            <ul>
              {
                genres?.map(genre =>(
                    <li key={genre.id}>{genre.name}</li>       
                ))
              }
            </ul>
        </div>
    </div>
  )
}
