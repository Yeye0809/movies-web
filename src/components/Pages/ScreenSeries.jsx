import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFetchById } from '../../Hooks/useFetchById';

export const ScreenSeries = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const {serieById, onSerieById} = useFetchById();


  useEffect(()=>{
    onSerieById({id});
  }, []);

  const handleNavigateReturn = ()=>{
   navigate(-1)
  }
 

 return (
   
    <div className='col-8'>
        <div className="row mt-5">
          <div className="col-4">
            <img src={`https://image.tmdb.org/t/p/w300${serieById?.poster_path}`} 
                 alt={serieById?.name} 
                 className="img-thumbnail animate__animated animate__fadeInLeft"
                 />
          </div>
          <div className="col-8 animate__animated animate__fadeInRight">
            <h2 className='mb-3'>{serieById?.name}</h2>
            <ul className='list-group list-group-flush mb-3'>
               <li className="list-group-item">{serieById?.release_date}</li>
               <li className="list-group-item">{serieById?.first_air_date}</li>
               {/* <li className="list-group-item">{ genres?.map( genre =>( <spam>{genre.name}</spam>))}</li> */}
            </ul>
            <p>{serieById?.overview}</p>
            <div className='mb-5'>
              {
                serieById?.genres?.map(genre => (
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
