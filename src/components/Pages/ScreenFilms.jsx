 import React, { useEffect } from 'react'
 import { Link, useNavigate, useParams } from 'react-router-dom'
 import { useFetchById } from '../../Hooks/useFetchById';

export const ScreenFilms = () => {

   const navigate = useNavigate();
   const {id} = useParams();
   const {filmById, onMovieById} = useFetchById();

   const {title, poster_path, release_date, vote_average, overview, genres} = filmById; 

   useEffect(()=>{
     onMovieById({id});
   }, []);

   const handleNavigateReturn = ()=>{
    navigate(-1)
   }
  
 
  return (
    
     <div className='col-8'>
         <div className="row mt-5">
           <div className="col-4">
             <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} 
                  alt={title} 
                  className="img-thumbnail animate__animated animate__fadeInLeft"
                  />
           </div>
           <div className="col-8 animate__animated animate__fadeInRight">
             <h2 className='mb-3'>{title}</h2>
             <ul className='list-group list-group-flush mb-3'>
                <li className="list-group-item">{release_date}</li>
                <li className="list-group-item">{vote_average}</li>
                {/* <li className="list-group-item">{ genres?.map( genre =>( <spam>{genre.name}</spam>))}</li> */}
             </ul>
             <p className='mb-3'>{overview}</p>
             <div className='mb-5'>
              {
                genres?.map(genre => (
                  <Link className='me-3' key={genre.id}>{genre.name}</Link>
                ))
              }
             </div>
             <button  
              className='btn btn-outline-primary'
              onClick={handleNavigateReturn}>
              Return
             </button>
           </div>
         </div>
     </div>
  )
}
