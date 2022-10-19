import React, { useEffect } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetchRated } from '../../Hooks/useFetchRated'
import { CardMoovie } from '../Movies/CardMoovie';

export const ScreenRatedFilms = () => {
  const {rated, onRated} = useFetchRated();
  const {counter, backPage, nextPage} = useCounter();

  useEffect(()=>{
    onRated({counter})
  },[counter])
  return (
    <div className='col'>
      <h1>Films</h1>
      <div className='row'>
        <div className='col'>
          <h2>Top Rated</h2>
        </div>
        <div className='col-2'>
           <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`page-item ${( counter === 1 )&& 'disabled'}`} >
                  <a className="page-link" onClick={backPage} href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>

                <li className="page-item"><a className="page-link" href="#">{counter}</a></li>

                <li className="page-item">
                  <a className="page-link" onClick={nextPage} href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
          </nav>
        </div>
      </div>
      <div className='container'>
        <div className='row rows-cols-1 row-cols-md-2 g-3'>   
          {
            rated.map(film => (
              <CardMoovie key={film.id} 
                posterPath={film.poster_path} 
                title={film.title} 
                vote={film.vote_average} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
