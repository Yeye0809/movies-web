import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useCounter } from '../../Hooks/useCounter';
import { useFetchPopulrars } from '../../Hooks/useFetchPopulrars';
import { CardSerie } from '../Movies/CardSerie'

export const ScreenGenresSeries = () => {
  const {counter, backPage, nextPage} = useCounter();
  const {onGetPopularSeries, popularSeries} = useFetchPopulrars()
  const {id} = useParams();

  const filteredGenres = popularSeries?.filter( serie => serie?.genre_ids?.find( genreId => genreId == id));
  useEffect(()=>{
    onGetPopularSeries({counter});
  }, [counter, id])

  return (
    <div className='col-8'>
    <h1>Genres</h1> 
    <hr />
    <div className='row'>
      <div className="col">
        <h2>Series</h2>
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
    <div className="row rows-cols-1 row-cols-md-2 g-3">
      {
        filteredGenres.map( serie => (
          <CardSerie key={serie.id} 
            id={serie.id}
            title={serie.name} 
            vote={serie.vote_average}
            posterPath={serie.poster_path}
          />
        ))
      }
    </div>
</div>
  )
}
