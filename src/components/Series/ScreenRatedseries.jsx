import React, { useEffect } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetchRated } from '../../Hooks/useFetchRated'
import { CardSerie } from '../Movies/CardSerie';

export const ScreenRatedSeries = () => {
  const {ratedSeries, onRatedSeries} = useFetchRated();
  const {counter, backPage, nextPage} = useCounter();

  useEffect(()=>{
    onRatedSeries({counter});
  },[counter]);

  return (
    <div className='col'>
      <h1>Series</h1>
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
            ratedSeries.map(serie => (
              <CardSerie key={serie.id} 
                id={serie.id}
                posterPath={serie.poster_path} 
                title={serie.name} 
                vote={serie.vote_average} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
