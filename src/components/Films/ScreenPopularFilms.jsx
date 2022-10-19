import { useCounter } from '../../Hooks/useCounter'
import { PopularMovies } from '../Movies/PopularMovies'

export const ScreenPopularFilms = () => {
 
  const {counter, backPage, nextPage} = useCounter()
  return (
    <div className='col'>
       <h1>Films</h1>
      <div className='row'>
        <div className='col'>
          <h2>Popular</h2>
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
      <PopularMovies counter={counter}/>
    </div>

  )
}
