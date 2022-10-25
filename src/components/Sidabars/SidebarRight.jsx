import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export const SidebarRight = () => {
  const [genres, setGenres] = useState([]);

  const getGenresSeries = async()=>{
    const url = 'https://api.themoviedb.org/3//genre/tv/list?api_key=73c0b8a4dbda53191e7ac8e43ed8a8ec';
    const res = await fetch(url);
    const data = await res.json();

    return data
  }

  useEffect(()=>{
    getGenresSeries()
    .then(data => setGenres(data.genres))
  }, [])


  return ( 
    <div className='col-2 p-5'>
        <div>
            <h3>Genres Series</h3>
            <ul className='list-group'>
              {
                genres?.map(genre =>(
                    <li className='list-group-item' key={genre.id}>
                      <Link to={`/genres/series/${genre.id}`} className='nav-item nav-link'>{genre.name}</Link>
                    </li>       
                ))
              }
            </ul>
        </div>
    </div>
  )
}
