import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { PopularSeries } from '../Movies/PopularSeries';

export const ScreenPopularSeries = () => {
  const {counter, backPage, nextPage} = useCounter()
  return  (
  <div className='col'>
    <div className='row d-flex justify-content-between mt-3'>
      <div className='col-4'>
        <h1>Series</h1>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Populars</h2>
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
    </div>
      <PopularSeries counter={counter}/>
  </div>

)
}
