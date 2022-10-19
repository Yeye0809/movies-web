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
      <div className='col-4'>
        <div className="row">
          <div className="col">
          <div className='d-flex justify-conten-between'>
            <div>
              <button className={`btn btn-primary ${(counter === 1) && 'disabled'}`} onClick={backPage}>Back</button>
            </div>
            <div>
              <h4>{counter}</h4>
            </div>
            <div>
              <button className={`btn btn-primary ${(counter === 20) && 'disabled'}`} onClick={nextPage}>Next</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
      <PopularSeries counter={counter}/>
  </div>

)
}
